var input = document.getElementById('number');
console.log(input);
var date = document.getElementById('date')

function currenttime() {


    var currentdate = new Date();
    console.log(currentdate);

    var day = currentdate.getDate();
    console.log(day);
    var month =parseInt(currentdate.getMonth()+1);
    console.log(month);
    // var month1=1;

    var year = currentdate.getFullYear();
    console.log(year);

    var today =day+ '-' + "0"+month+ '-' + year;
    console.log(today);

    var hour = currentdate.getHours();
    console.log(hour);

    var min = currentdate.getMinutes();
    console.log(min);

    var sec = currentdate.getSeconds();
    console.log(sec);

    var zone = "AM";

    //time
    if (hour == 0) {
        hour =12;
    }
    if (hour > 12) {
        hour = hour - 12;
        zone = "PM"
       
    }
   
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    //time
    var time = hour + ':' + min + ':' + sec + ':' + zone;
    console.log(time);
    date.innerHTML = today;
    input.innerHTML = time;

    setTimeout(currenttime, 1000)
}
currenttime();

