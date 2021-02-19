function updateClock(){
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let am_or_pm = document.getElementById("am_or_pm");

    if(hours >=12){
        am_or_pm.innerHTML = 'PM';
    }else{
        am_or_pm.innerHTML + 'AM';
    }
    if(hours > 12){
    hours = hours - 12;
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

}

document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

}  
setInterval(updateClock, 1000)