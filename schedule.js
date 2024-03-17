var currentdate = new Date();

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(195);
	fill(255);
	stroke(0);
	text(currentdate.getMonth() + 1, windowWidth / 2, windowHeight / 2);

}
