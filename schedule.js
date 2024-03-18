var currentdate = new Date();
var todaysEvent = "Creating Stream Schedule In Javascript";
var obj = JSON.parse(`
{
"18":{
	"events":"First bit: Chess(TBD) Second Half: Mario 64 16 & 70",
	"month":"3",
	"day":"monday",
	"time":"13:00"
},
"19":{
	"events":"Lets Learn C: Writing HTTP Server",
	"month":"3",
	"day":"tuesday",
	"time":"13:00"
},
"20":{
	"events":"Mario 64",
	"month":"3",
	"day":"wednesday",
	"time":"TBD"
},
"21":{
	"events":"Lets Learn C: Boids in C/Raylib Second Half: Mario",
	"month":"3",
	"day":"thursday",
	"time":"13:00"
},
"22":{
	"events":"TTT/Mario 64",
	"month":"3",
	"day":"friday",
	"time":"15:00"
},
"23":{
	"events":"Mario 64 on a Steering Wheel",
	"month":"3",
	"day":"saturday",
	"time":"13:00"
},
"24":{
	"events":"Wildcard",
	"month":"3",
	"day":"sunday",
	"time":"13:00"
}
}
`);

var displayDate = currentdate.getFullYear() + "/" + (currentdate.getMonth() + 1) + "/" +
				  currentdate.getDate() + "\n" +
				  currentdate.getHours() + ":" +
				  currentdate.getMinutes() + ":" +
				  currentdate.getSeconds();

var altDispDate = currentdate.getFullYear() + "/" + (currentdate.getMonth() + 1) + "/" +
				  currentdate.getDate();

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	displayDate = currentdate.getFullYear() + "/" + 
				 (currentdate.getMonth() + 1) + "/" +
				  currentdate.getDate() + "\n" +
				  currentdate.getHours() + ":" +
				  currentdate.getMinutes() + ":" +
				  currentdate.getSeconds();
	

	currentdate = new Date();

	background(30);
	fill(255);
	stroke(0);
	textSize(35)
	textAlign(CENTER);
	textStyle(NORMAL);
	text(displayDate, windowWidth / 2, (windowHeight / 2) + 80);
	textSize(50);
	textStyle(BOLD);	
	
	
	
	displayEvent(currentdate.getDate(), windowWidth / 2, windowHeight / 2, 0);
	textSize(25);
	fill(200);
	textStyle(NORMAL);
	displayEvent(currentdate.getDate(), windowWidth * 1 / 4, (windowHeight / 2) + 60, -1);
	displayEvent(currentdate.getDate(), windowWidth * 3 / 4, (windowHeight / 2) + 60, 1);
}


function displayEvent(curDate, x, y, mod) {
	if(mod == -1) {
		altDispDate = currentdate.getFullYear() + "/" + (currentdate.getMonth() + 1) + "/" +
					  (currentdate.getDate() - 1);
		textSize(17);
		text(altDispDate, x, y + 25);
		textSize(25);
	} else if(mod == 1) {
		altDispDate = currentdate.getFullYear() + "/" + (currentdate.getMonth() + 1) + "/" +
					  (currentdate.getDate() + 1);
		textSize(17);
		text(altDispDate, x, y + 25);
		textSize(25);
	}	
	
	switch(curDate + mod) {
		case 18:
			text(obj["18"].events, x, y);
			break;
		case 19:
			text(obj["19"].events, x, y);
			break;
		case 20:
			text(obj["20"].events, x, y);
			break;
		case 21:
			text(obj["21"].events, x, y);
			break;
		case 22:
			text(obj["22"].events, x, y);
			break;
		case 23:
			text(obj["23"].events, x, y);
			break;
		case 24:
			text(obj["24"].events, x, y);
			break;
		default:
			var index = curDate + mod;
			if(index < 18) {
				index += 7
			} else if(index > 24) {
				index -= 7;
			}
				index = [index + ""];
			text("no schedule " + obj[index].day, x, y);			

			break;
		
	}
}
