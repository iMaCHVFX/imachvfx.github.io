var currentdate = new Date();

var displayDate = currentdate.getFullYear() + "/" + 
				 (currentdate.getMonth() + 1) + "/" +
				  currentdate.getDate() + "\n" +
				  currentdate.getHours() + ":" +
				  currentdate.getMinutes() + ":" +
				  currentdate.getSeconds();

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
	debugD = currentdate.getDate();
	debugH = currentdate.getHours();
	debugM = currentdate.getMinutes();
	debugS = currentdate.getSeconds();
	background(30);
	fill(255);
	stroke(0);
	textSize(20)
	text(displayDate, windowWidth / 2, windowHeight / 2);

}


