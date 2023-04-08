#include "heltec.h"
#include <Arduino.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <SPIFFS.h>


#define BAND 915E6 // 868E6 or 915E6
#define DHTTYPE DHT22
#define DHTPIN 13
#include "DHT.h"

DHT dht(DHTPIN, DHTTYPE);

//setting the network credentials.
const char *ssid = "Kendall WiFi";
const char *password = "secrets!";

// set the server to port 80.
AsyncWebServer server(80);
AsyncWebSocket ws("/ws");

// lora receving and sending addresses
byte receiverAddress = 0x96;
byte senderAddress   = 0x45;
bool sender = false;

long ignoredMessagesCount = 0;
long lastSendTime = 0;
byte messageNum = 0;
// dht temp values
int chk;
float hum;  //Stores humidity value
float temp; //Stores temperature value

void notFound(AsyncWebServerRequest *request) {
  request->send(404, "text/plain", "Not found");
}

void setup() {
  Heltec.begin(true /*display*/, true /*LoRa*/, true /*Serial*/, true /*PABOOST*/, BAND);
  dht.begin();
  Serial.begin(9600);
  // basic http client for possibly using the internet wifiMulti.addAP("SSID", "PASSWORD");
  WiFi.softAP(ssid, password);
  
  printToScreen("My IP:" + WiFi.softAPIP().toString());
  if (!SPIFFS.begin()) {
    printToScreen("SPIFFS failed.");
    while (true);
  }
  server.serveStatic("/", SPIFFS, "/www/").setDefaultFile("index.html");
  server.onNotFound(notFound);
  server.addHandler(&ws);
  server.begin();
  
}

void loop() {
  if (sender) {
//    delay(2000);
//    //Read data and store it to variables hum and temp
//    hum = dht.readHumidity();
//    temp= dht.readTemperature();
//    float far = dht.convertCtoF(hum);
//    String mystring = "";
//    mystring.concat(temp);
//    //Print temp and humidity values to serial monitor
//    printToScreen(mystring + " Celsius");
    if (millis() - lastSendTime > 1000) {
        delay(2000);
        hum = dht.readHumidity();
        temp = dht.readTemperature();
        String temptostring = "";
        temptostring.concat(temp);
        String message = temptostring;
        String humtostring = "";
        humtostring.concat(hum);
        String humMessage = humtostring;
        String line1 = "The current temperature is:";
        String line2 = "The current humidity is:";
        String total = "";
        total = message + "," + humMessage;
        sendMessage(total);
        printToScreen(line1 + "\n" + message + "\n" + line2 + "\n" + humMessage);
        lastSendTime = millis();
//      String message = "Hello Obi wan.";
//      sendMessage(message);
//      String line1 = "From: 0x" + String(senderAddress, HEX) + " To: 0x" + String(receiverAddress, HEX);
//      String line2 = "Sending: " + message;
//      String line3 = "Message ID: " + String(messageNum);
//      printToScreen(line1 + "\n" + line2 + "\n" + line3);
//      lastSendTime = millis();
    }
  } else {
    onReceive(LoRa.parsePacket());
    
  }
}

void printToScreen(String s) {
  Heltec.display->clear();
  Heltec.display->drawString(0, 0, s);
  Heltec.display->display();
}

void sendMessage(String message) {
  LoRa.beginPacket();
  LoRa.setTxPower(20, RF_PACONFIG_PASELECT_PABOOST);
  LoRa.write(receiverAddress);
  LoRa.write(senderAddress);
  LoRa.write(messageNum);
  LoRa.write(message.length());
  LoRa.print(message);
  LoRa.endPacket();
  messageNum += 1;
}

String convertTemp(){
   temp = dht.readTemperature();
   String temptostring = "";
   temptostring.concat(temp);
   String message = temptostring;
   return message;
}

byte lastRecipient = 0;
byte lastSender = 0;
byte lastIncomingMessageNum = 0;
byte lastIncomingMessageLength = 0;
String lastIncomingMessage = "";
int lastRssi = 0;
int lastSnr = 0;

void onReceive(int packetSize) {
  if (packetSize == 0) {
    return;
  }

  byte recipient = LoRa.read();
  byte sender = LoRa.read();
  byte incomingMessageNum = LoRa.read();
  byte incomingMessageLength = LoRa.read();

  String incomingMessage = "";
  while (LoRa.available()) {
    incomingMessage += (char) LoRa.read();
  }

  if (incomingMessageLength != incomingMessage.length()) {
    printToScreen("error: invalid message length");
    return;
  }

  if (recipient == receiverAddress || recipient == 0xFF) {
    lastRecipient = recipient;
    lastSender = sender;
    lastIncomingMessageNum = incomingMessageNum;
    lastIncomingMessageLength = incomingMessageLength;
    lastIncomingMessage = incomingMessage;
    lastRssi = LoRa.packetRssi();
    lastSnr = LoRa.packetSnr();
    
    
  } else {
    ignoredMessagesCount += 1;
  }

  String line1 = "From: 0x" + String(lastSender, HEX) + " To: 0x" + String(lastRecipient, HEX);
  String line2 = "Received: " + lastIncomingMessage;
  String line3 = "Message ID: " + String(lastIncomingMessageNum);
  String line4 = "Ignored messages: " + String(ignoredMessagesCount);
  String line5 = "RSSI: " + String(lastRssi) + " SNR: " + String(lastSnr);
  printToScreen(line1 + "\n" + line2 + "\n" + line3 + "\n" + line4 + "\n" + line5);
  ws.textAll(lastIncomingMessage.c_str());
  
}
