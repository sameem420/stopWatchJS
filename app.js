var min = 0;
var sec = 0;
var msec = 0;


var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec
    if(msec >= 100)
    {
        sec++
        secHeading.innerHTML = sec
        msec = 0
    }
    else if(sec >= 60)
    {
        min++
        minHeading.innerHTML = min
        sec = 0;
    }
}

function Start() {
    interval = setInterval(timer, 10)
    document.getElementById("startBtn").disabled = true;
}

function Pause() {
    clearInterval(interval)
    var btn = document.getElementById("startBtn").disabled = false;
}

function Reset() {
    showHistory();

    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    Pause();
}

function showHistory() {
    var minRecord = document.createElement("h1");
    var secRecord = document.createElement("h1");
    var msecRecord = document.createElement("h1");
    var linebreak = document.createElement("br");

    var lm = document.createTextNode(min);
    var ls = document.createTextNode(sec);
    var lms = document.createTextNode(msec);

    minRecord.appendChild(lm);
    secRecord.appendChild(ls);
    msecRecord.appendChild(lms);

    if (msec === '') {
      alert("Can't add empty values!");
    } 
    else {
      document.getElementById("lastRecord").appendChild(minRecord);
      document.getElementById("lastRecord").appendChild(secRecord);
      document.getElementById("lastRecord").appendChild(msecRecord);
      document.getElementById("lastRecord").appendChild(linebreak);
    }
}