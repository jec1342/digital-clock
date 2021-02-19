function updateClock(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_or_pm = document.getElementById("am_or_pm");

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


    
//conditional statement minutes less than 10 seconds less than 10 add 0

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    
}  
setInterval( updateClock, 1000)
