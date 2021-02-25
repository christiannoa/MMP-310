/* Character Design Assignment 1 */

/* Global Variables */
var cnIdle, cnmad;
var cnX, cnY;
var cnSpeed = 3;

function preload() {
	cnIdle = loadImage("cn.gif");
	cnMad = loadImage("cnmad.gif");
}

function setup() {
	createCanvas(2048,600);
	cnX = width/2;
	cnY = height/2;
	imageMode(CENTER);
}

function draw() {
	background(255);

	/* logic + event */
	/* Character movement */
	/* Use up, down, left, and/or right arrow to move charcter around canvas */

	if (keyIsDown(RIGHT_ARROW)) {
		cnX += cnSpeed;
	}

	if (keyIsDown(LEFT_ARROW)) {
		cnX -= cnSpeed;
	}
	
	if (keyIsDown(UP_ARROW)) {
		cnY -= cnSpeed;
	}

	if (keyIsDown(DOWN_ARROW)) {
		cnY += cnSpeed;
	}


	image(cnIdle, cnX, cnY);
}