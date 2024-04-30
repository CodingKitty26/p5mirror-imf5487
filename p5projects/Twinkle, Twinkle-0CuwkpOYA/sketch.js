let w = 0;
let h = 0; 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(600, 450);
  fullscreenButton = createButton("Full Screen");
  fullscreenButton.mousePressed(fullscreen);
  setInterval(function(){
    
   w = 0;
   h = 0;

  }, 3000); 
}
  
  function draw() {
   background(0); 
  fill(255, 120, 205);
  push();
  translate(width * 0.2, height * 0.3);
  rotate(frameCount / -100.0);
  star(w, h, 30, 70, 5);
  pop();
  
  w++;
  h++;
    
  fill (245, 217, 39);
  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(w, h, 30, 70, 5);
  pop();
  
    w++;
    h++;
  
  fill(255);
  noStroke();
  push();
  translate(width * 0.7, height * 0.2);
  rotate(frameCount / 100.0);
  star(w, h, 30, 70, 5);
  pop();
  
  w--;
  h--;
    
  fill(255);
  noStroke();
  push();
  translate(width * 0.3, height * 0.8);
  rotate(frameCount / 100.0);
  star(w, h, 30, 70, 5);
  pop();
  
  w++;
  h++;
  
  fill(110, 117, 219);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 100.0);
  star(0, 0, 30, 70, 5);
  pop();
}



function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
