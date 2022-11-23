var today = new Date(); 
/*khai bao kieu object
*New: toan tu dia chi -> cap phat bo nho cho doi tuong
*today: ten cua doi tuong(object)
*Date(): Constructor -> ham khoi tao doi tuong

*/
var hourNow = today.getHours();//gio hien tai

var mis = today.getMinutes();
var secs = today.getSeconds();
var greeting;

document.writeln("<p>It is " + today +"</p>");
document.writeln("<p>Hour is " + hourNow +"</p>");
document.writeln("<p>Minutes is " + mis +"</p>");
document.writeln("<p>seconds is " + secs +"</p>");

if(hourNow > 18){
    greeting = 'Good evening!';
} else if(hourNow > 12){
    greeting = 'Good afternoon';
} else if(hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting ='Hello';
}

document.write('<h1>'+greeting+'<h1>' );