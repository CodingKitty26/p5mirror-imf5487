let colorChangeButton;

function setup() {
  angleMode(DEGREES);
  rectMode(CENTER);
  createCanvas(400, 400);
   background(150, 0, 100, 150);
 
  colorChangeButton = createButton('change background');
  colorChangeButton.mousePressed(changeColor);
  
}
  
  function changeColor(){
  time = millis(1000);
  background(random(255), random(255), random(255));
    time = millis(); //also update the stored time
}
  
function draw() {
  fill(125,44,12);
  rect(200,220,205,330,90) //back hair
  
  fill(75,217,242);
  rect(200,380,190,270,40); //shirt
  
   fill(145,68,9);
  rect(200,239,50,50); //neck
  
  fill(75,217,242);
  rect(200,380,190,270,40); //shirt
  
  fill(145,68,9);
  arc(200,195,50,50,0,180); //mouth
  

     fill(145,68,9);
  ellipse(125,155,30,20); //left ear
  ellipse(275,155,30,20); //right ear
  
  
  fill(145,68,9);
  ellipse(200,150,150,180); //face

  fill(145,68,9);
  arc(200,195,50,50,0,180); //mouth
  
  
  fill(186,91,19);
  ellipse(170,143,20,20); //left eye
  ellipse(230,143,20,20); //right eye
  
   fill(186,91,19);
  arc(198,175,25,15,90,270); //nose
}



function drawFlower(x, y, d, r, g, b) {
  fill(255,255,0);
  ellipse(x,y,d,d);
  fill(r,g,b);
  ellipse(x - 50, y, d, d);
  ellipse(x + 50, y, d, d);
  ellipse(x - 25, y + 43, d, d);
  ellipse(x + 25, y + 43, d, d);
  ellipse(x - 25, y - 43, d, d);
  ellipse(x + 25, y - 43, d, d);
}

let fairysparkle;
  
function preload(){
  fairysparkle = loadSound('fairysparkle.wav');
}
  

function mousePressed() {
  drawFlower(mouseX, mouseY, random(40,60), 
random(0,255), random(110, 255), random(120, 255));
             
}

function mousePressed(){
  drawFlower(mouseX, mouseY, random(40,60), 
random(0,255), random(110, 255), random(120, 255));
  fairysparkle.play();
}