var WIDTH = 400;
var HEIGHT = 400;


function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(100);
  noFill();

  var penSize = 4;
  strokeWeight(penSize);

  var diameter = 100;

  // Black 
  stroke("pink");
  circle(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter);

  // Blue 
  stroke(0, 0, 222);
  circle(WIDTH / 2 - diameter - 2 * penSize, HEIGHT / 2 - diameter/4, diameter);

  // Red 
  stroke("purple");
  circle(WIDTH / 2 + diameter + 2 * penSize, HEIGHT / 2 - diameter/4, diameter);
  
  // Yellow 
  stroke(255,255,0,100);
  circle(WIDTH / 2 - diameter/2 - penSize, HEIGHT / 2 + diameter/4, diameter);
  
  // Green 
  stroke(0,255,0,100);
  circle(WIDTH / 2 + diameter/2 + penSize, HEIGHT / 2 + diameter/4, diameter);
  
  // blue 2 
  stroke(0 ,0, 222);
  arc(WIDTH / 2 - diameter - 2 * penSize, HEIGHT / 2 - diameter/4, diameter,diameter,-PI/4,PI/4);
  
  // Black 2
  stroke("pink");
  arc(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter,diameter, -PI/4,PI/4);
  arc(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter,diameter, PI/2,2*PI/3);
  
  //  Red 2
  stroke("purple");
  arc(WIDTH / 2 + diameter + 2 * penSize, HEIGHT / 2 - diameter/4, diameter,diameter,PI/2,2*PI/3);

  
}