
let img;

var p1X = 100;
var p1Y = 100;

var b1X = 200;
var b1Y = 300;
var bWidth = 200;
var bHeight = 40;

function preload() {
  img = loadImage('Ninja.jpg');
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(15, 115, 209);
  image(img, 50, 300, 50, 50);
}

