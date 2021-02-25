/* Character Design Assignment 1 */


var cnIdle;

function preload() {
	cnIdle = loadImage("cn.gif");
}

function setup() {
	createCanvas(640,640);
}

function draw() {
	background(grey);
	image(cnIdle, 0, 0)
}