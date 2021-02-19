setInterval(displayTime, 1000); 

function displayTime() {
    let date = new Date() 
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    if (hour>12) {
        hour -= 12;
        period = "PM";
    }

    if (hour < 12) {
        period = "AM";
    }

hour = hour <10 ? "0" + hour : hour;
mins = mins < 10 ? "0" + mins : mins;
secs = secs < 10 ? "0" + secs : secs; 

let currentTime = hour + ":" + mins + ":" + secs + period

document.getElementById("JacobsDigitalClock")
    .innerHTML = currentTime
}

displayTime()