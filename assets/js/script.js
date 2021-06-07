var today = new Date();
var month = today.getMonth();
var day = today.getDate();
var yearr = today.getFullYear();

var monthnames = ["January","February","March","April","May","June","July","August","September","October","November","December"];



document.getElementById("date-now").innerHTML= monthnames[month] + " " + day + " " + yearr


function savestuff() {
    
var inputid = "t" + event.target.id;    

var inputstuff = document.getElementById(inputid).value;

console.log(inputstuff);

var schedule = JSON.parse(localStorage.getItem("schedule")) || [];

var workitems = {
        timeframe: event.target.id,
        items: inputstuff,
}
schedule.push(workitems);
localStorage.setItem("schedule",JSON.stringify(schedule));


var currentschedule = JSON.parse(localStorage.getItem("schedule"))


for (let i = 0; i < currentschedule.length; i++) {
    var storedid = "t" + currentschedule[i].timeframe;
    var storeditem = currentschedule[i].items;
    document.getElementById(storedid).placeholder = storeditem;
}

document.getElementById(inputid).value= "";


}

var currentschedule = JSON.parse(localStorage.getItem("schedule"))

if (currentschedule != null) {
for (let i = 0; i < currentschedule.length; i++) {
    var storedid = "t" + currentschedule[i].timeframe;
    var storeditem = currentschedule[i].items;
    document.getElementById(storedid).placeholder = storeditem;
}
}

/* Time Thing */

var timenow = today.getHours();
console.log(timenow);


for (let i = 8; i < 19; i++) {
    var chooseslot = "t" + i;
    if (i < timenow) {
        document.getElementById(chooseslot).style.backgroundColor = "lightgray";
    }
    else if (i = timenow) {
        document.getElementById(chooseslot).style.backgroundColor = "var(--green)";
    }
    else {
        document.getElementById(chooseslot).style.backgroundColor = "var(--yellow)";
    }
    
}