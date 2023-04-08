var socket = new WebSocket('ws://' + window.location.host + '/ws');
var coldbuttonpressed = true;
var hotbuttonpressed = true;
var newpagepressed = true;

socket.onmessage = function (event) {
    strs = event.data.split(",");
    document.querySelector("#temperature").innerHTML = strs[0];
    document.querySelector('#humidity').innerHTML = strs[1];
    let snowflake1 = document.querySelector('#snow1').innerHTML = '&#9927'
    let snowflake2 = document.querySelector('#snow2').innerHTML = '&#9927'
    let snowflake3 = document.querySelector('#snow3').innerHTML = '&#9927'
    let snowflake4 = document.querySelector('#snow4').innerHTML = '&#9927'
    let snowflake5 = document.querySelector('#snow5').innerHTML = '&#9927'
    let snowflake6 = document.querySelector('#snow6').innerHTML = '&#9927'
    let sunshine1 = document.querySelector('#snow1').innerHTML = '&#9728'
    let sunshine2 = document.querySelector('#snow2').innerHTML = '&#9728'
    let sunshine3 = document.querySelector('#snow3').innerHTML = '&#9728'
    let sunshine4 = document.querySelector('#snow4').innerHTML = '&#9728'
    let sunshine5 = document.querySelector('#snow5').innerHTML = '&#9728'
    let sunshine6 = document.querySelector('#snow6').innerHTML = '&#9728'
    console.log(strs[0]);
    tempAsInt = parseInt(strs[0]);
    if (tempAsInt < 40 && tempAsInt >= 35) {
        //104 deg to 95 deg
        document.getElementById('body').style.background = "rgb(251,78,63)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(251,78,63,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('cloudy').style.visibility = "hidden"
        document.getElementById('hotstuff').style.visibility = "visible"
        document.getElementById('snow1').innerHTML = sunshine1
        document.getElementById('snow2').innerHTML = sunshine2
        document.getElementById('snow3').innerHTML = sunshine3
        document.getElementById('snow4').innerHTML = sunshine4
        document.getElementById('snow5').innerHTML = sunshine5
        document.getElementById('snow6').innerHTML = sunshine6
        document.getElementById('snow1').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow2').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow3').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow4').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow5').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow6').style.color = "rgb(247, 226, 42)"
        document.getElementsByClassName('weather-card').style.animation = "pulse-red 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(250, 112, 154, 0.4), rgba(254, 225, 64, 0.4));"
        // document.getElementById('coldbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 35 && tempAsInt >= 30) {
        //95 deg to 86 deg
        document.getElementById('body').style.background = "rgb(240,92,44)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(240,92,44,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('cloudy').style.visibility = "hidden"
        document.getElementById('hotstuff').style.visibility = "visible"
        document.getElementById('snow1').innerHTML = sunshine1
        document.getElementById('snow2').innerHTML = sunshine2
        document.getElementById('snow3').innerHTML = sunshine3
        document.getElementById('snow4').innerHTML = sunshine4
        document.getElementById('snow5').innerHTML = sunshine5
        document.getElementById('snow6').innerHTML = sunshine6
        document.getElementById('snow1').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow2').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow3').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow4').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow5').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow6').style.color = "rgb(247, 226, 42)"
        document.getElementsByClassName('weather-card').style.animation = "pulse-red 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(250, 112, 154, 0.4), rgba(254, 225, 64, 0.4));"
        // document.getElementById('coldbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 30 && tempAsInt >= 25) {
        //86 deg to 77 deg
        document.getElementById('body').style.background = "rgb(187,226,38)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(187,226,38,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('cloudy').style.visibility = "hidden"
        document.getElementById('hotstuff').style.visibility = "visible"
        document.getElementById('snow1').innerHTML = sunshine1
        document.getElementById('snow2').innerHTML = sunshine2
        document.getElementById('snow3').innerHTML = sunshine3
        document.getElementById('snow4').innerHTML = sunshine4
        document.getElementById('snow5').innerHTML = sunshine5
        document.getElementById('snow6').innerHTML = sunshine6
        document.getElementById('snow1').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow2').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow3').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow4').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow5').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow6').style.color = "rgb(247, 226, 42)"
        document.getElementsByClassName('weather-card').style.animation = "pulse-red 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(250, 112, 154, 0.4), rgba(254, 225, 64, 0.4));"
        // document.getElementById('coldbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 25 && tempAsInt >= 20) {
        //77 deg to 68 deg
        document.getElementById('body').style.background = "rgb(41,236,158)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(41,236,158,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('cloudy').style.visibility = "hidden"
        document.getElementById('hotstuff').style.visibility = "visible"
        document.getElementById('snow1').innerHTML = sunshine1
        document.getElementById('snow2').innerHTML = sunshine2
        document.getElementById('snow3').innerHTML = sunshine3
        document.getElementById('snow4').innerHTML = sunshine4
        document.getElementById('snow5').innerHTML = sunshine5
        document.getElementById('snow6').innerHTML = sunshine6
        document.getElementById('snow1').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow2').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow3').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow4').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow5').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow6').style.color = "rgb(247, 226, 42)"
        document.getElementsByClassName('weather-card').style.animation = "pulse-red 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(250, 112, 154, 0.4), rgba(254, 225, 64, 0.4));"
        // document.getElementById('coldbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 20 && tempAsInt >= 15) {
        //68 deg to 59 deg
        document.getElementById('body').style.background = "rgb(65,236,41);"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(65,236,41,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('cloudy').style.visibility = "hidden"
        document.getElementById('hotstuff').style.visibility = "visible"
        document.getElementById('snow1').innerHTML = sunshine1
        document.getElementById('snow2').innerHTML = sunshine2
        document.getElementById('snow3').innerHTML = sunshine3
        document.getElementById('snow4').innerHTML = sunshine4
        document.getElementById('snow5').innerHTML = sunshine5
        document.getElementById('snow6').innerHTML = sunshine6
        document.getElementById('snow1').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow2').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow3').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow4').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow5').style.color = "rgb(247, 226, 42)"
        document.getElementById('snow6').style.color = "rgb(247, 226, 42)"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(250, 112, 154, 0.4), rgba(254, 225, 64, 0.4));"
        document.getElementsByClassName('weather-card').style.animation = "pulse-red 10s infinite;"
        // document.getElementById('coldbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 15 && tempAsInt >= 10) {
        //59 deg to 50 deg
        document.getElementById('body').style.background = "rgb(75,188,207)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(75,188,207,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('hot').style.visibility = "hidden"
        document.getElementById('cloudy').style.visibility = "visible"
        document.getElementById('coldstuff').style.visibility = "visible"
        document.getElementById('hotstuff').style.visibility = "hidden"
        document.getElementById('snow1').innerHTML = snowflake1
        document.getElementById('snow2').innerHTML = snowflake2
        document.getElementById('snow3').innerHTML = snowflake3
        document.getElementById('snow4').innerHTML = snowflake4
        document.getElementById('snow5').innerHTML = snowflake5
        document.getElementById('snow6').innerHTML = snowflake6
        document.getElementById('snow1').style.color = "#fff"
        document.getElementById('snow2').style.color = "#fff"
        document.getElementById('snow3').style.color = "#fff"
        document.getElementById('snow4').style.color = "#fff"
        document.getElementById('snow5').style.color = "#fff"
        document.getElementById('snow6').style.color = "#fff"
        document.getElementsByClassName('weather-card').style.animation = "pulse-blue 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(161, 196, 253, 0.4), rgba(194, 233, 251, 0.4));"
        // document.getElementById('hotbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 10 && tempAsInt >= 5) {
        //50 deg to 41 deg
        document.getElementById('body').style.background = "rgb(16,139,212)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(16,139,212,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('hot').style.visibility = "hidden"
        document.getElementById('coldstuff').style.visibility = "visible"
        document.getElementById('hotstuff').style.visibility = "hidden"
        document.getElementById('snow1').innerHTML = snowflake1
        document.getElementById('snow2').innerHTML = snowflake2
        document.getElementById('snow3').innerHTML = snowflake3
        document.getElementById('snow4').innerHTML = snowflake4
        document.getElementById('snow5').innerHTML = snowflake5
        document.getElementById('snow6').innerHTML = snowflake6
        document.getElementById('snow1').style.color = "#fff"
        document.getElementById('snow2').style.color = "#fff"
        document.getElementById('snow3').style.color = "#fff"
        document.getElementById('snow4').style.color = "#fff"
        document.getElementById('snow5').style.color = "#fff"
        document.getElementById('snow6').style.color = "#fff"
        document.getElementsByClassName('weather-card').style.animation = "pulse-blue 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(161, 196, 253, 0.4), rgba(194, 233, 251, 0.4));"
        // document.getElementById('hotbutton').style.visibility = "hidden"
    }
    else if (tempAsInt < 5) {
        // 41 deg to 32 deg and below.
        document.getElementById('body').style.background = "rgb(16,83,212)"
        document.getElementById('body').style.background = "radial-gradient(circle, rgba(16,83,212,1) 0%, rgba(0,0,0,1) 100%)"
        document.getElementById('hot').style.visibility = "hidden"
        document.getElementById('coldstuff').style.visibility = "visible"
        document.getElementById('hotstuff').style.visibility = "hidden"
        document.getElementById('snow1').innerHTML = snowflake1
        document.getElementById('snow2').innerHTML = snowflake2
        document.getElementById('snow3').innerHTML = snowflake3
        document.getElementById('snow4').innerHTML = snowflake4
        document.getElementById('snow5').innerHTML = snowflake5
        document.getElementById('snow6').innerHTML = snowflake6
        document.getElementById('snow1').style.color = "#fff"
        document.getElementById('snow2').style.color = "#fff"
        document.getElementById('snow3').style.color = "#fff"
        document.getElementById('snow4').style.color = "#fff"
        document.getElementById('snow5').style.color = "#fff"
        document.getElementById('snow6').style.color = "#fff"
        document.getElementsByClassName('weather-card').style.animation = "pulse-blue 10s infinite;"
        document.getElementsByClassName('weather-card').style.background = "linear-gradient(to top right, rgba(161, 196, 253, 0.4), rgba(194, 233, 251, 0.4));"
        // document.getElementById('hotbutton').style.visibility = "hidden"
    }
    // else if (tempAsInt < 9 && tempAsInt >= 7) {
    //     document.getElementById('body').style.background = "rgb(26,213,195)"
    //     document.getElementById('body').style.background = "radial-gradient(circle, rgba(26,213,195,1) 40%, rgba(60,57,55,1) 100%)"
    //     document.getElementById('hot').style.visibility = "hidden"
    // }
    // else if (tempAsInt < 7 && tempAsInt >= 5) {
    //     document.getElementById('body').style.background = "rgb(26,150,213)"
    //     document.getElementById('body').style.background = "radial-gradient(circle, rgba(26,150,213,1) 40%, rgba(60,57,55,1) 100%)"
    //     document.getElementById('hot').style.visibility = "hidden"
    // }
    // else if (tempAsInt < 5 && tempAsInt >= 3) {
    //     document.getElementById('body').style.background = "rgb(26,112,213)"
    //     document.getElementById('body').style.background = "radial-gradient(circle, rgba(26,112,213,1) 48%, rgba(60,57,55,1) 100%)"
    //     document.getElementById('hot').style.visibility = "hidden"
    // }
    // else if (tempAsInt < 3 && tempAsInt >= 0) {
    //     document.getElementById('body').style.background = "rgb(26,43,213)"
    //     document.getElementById('body').style.background = "radial-gradient(circle, rgba(26,43,213,1) 48%, rgba(60,57,55,1) 100%)"
    //     document.getElementById('hot').style.visibility = "hidden"
    // }
};

var coldbutton = document.querySelector("#coldbutton");
coldbutton.onclick = function () {
    coldbuttonpressed = !coldbuttonpressed;
    if (coldbuttonpressed) {
        document.querySelector("#beanie").style.visibility = "visible"
        document.querySelector("#hotchoclate").style.visibility = "visible"
        document.querySelector("#hoodie").style.visibility = "visible"
        document.querySelector("#woolsocks").style.visibility = "visible"
    }
    else {
        document.querySelector("#beanie").style.visibility = "hidden"
        document.querySelector("#hotchoclate").style.visibility = "hidden"
        document.querySelector("#hoodie").style.visibility = "hidden"
        document.querySelector("#woolsocks").style.visibility = "hidden"
    }
};
var hotbutton = document.querySelector("#hotbutton");
hotbutton.onclick = function () {
    hotbuttonpressed = !hotbuttonpressed;
    if (hotbuttonpressed) {
        document.querySelector("#lemonade").style.visibility = "visible"
        document.querySelector("#sundress").style.visibility = "visible"
        document.querySelector("#beach").style.visibility = "visible"
        document.querySelector("#sunset").style.visibility = "visible"
    }
    else {
        document.querySelector("#lemonade").style.visibility = "hidden"
        document.querySelector("#sundress").style.visibility = "hidden"
        document.querySelector("#beach").style.visibility = "hidden"
        document.querySelector("#sunset").style.visibility = "hidden"
    }
};

var newpage = document.querySelector("#page1");
newpage.onclick = function () {
    newpagepressed = !newpagepressed;
    if (newpagepressed) {
        document.querySelector("#page1").style.visibility = "visible"
        console.log(newpagepressed)
    }
}

// experimental features.



