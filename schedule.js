var currentdate = new Date();

function setup() {
	createCanvas(windowWidth, windowHeight);
	var currenteverything = currentdate.getFullYear() + "/" + 
							(currentdate.getMonth() + 1) + "/" + 
		                    currentdate.getDay + " " +
		                    currentdate.getHour + ":" +
		                    currentdate.getMinute + ":";
}

function draw() {
	background(195);
	fill(255);
	stroke(0);
	textSize(100);
	text(currenteverything, windowWidth / 2, windowHeight / 2);
	

}
