/* Character Design Assignment 1 */

/* global variables */
var cnHappy, cnMad;
var cnX, cnY;
var cnSpeed = 3;

function preload() {
	cnHappy = loadImage("cn_happy.gif");
	cnMad = loadImage("cn_mad.gif");
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

	var cnIsMad = false;

	if (keyIsDown(RIGHT_ARROW)) {
		cnX += cnSpeed;
		cnIsMad = true;
	}

	if (keyIsDown(LEFT_ARROW)) {
		cnX -= cnSpeed;
		cnIsMad = true;
	}
	
	if (keyIsDown(UP_ARROW)) {
		cnY -= cnSpeed;
		cnIsMad = true;
	}

	if (keyIsDown(DOWN_ARROW)) {
		cnY += cnSpeed;
		cnIsMad = true;
	}

	if (cnIsMad) {
		image(cnMad, cnX, cnY);
	} else {
		image(cnHappy, cnX, cnY);
		}
	}
	