//ims05 - imf5487
//Isadora Fleming Final Project
//References document: https://docs.google.com/document/d/1S5jXU6knsKtYP1nowR6es72uJM2ASDXsUMUahwIGWog/edit


let comet;  /// parent object to spark fragments
let sparks = []; /// spark fragments
let noofsparks = 100; 
let timecheck = 10;
let backgroundCalm;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  backgroundCalm = loadSound("Oceans Heart.mp3");
}

function setup() {
  createCanvas(700, 400);
  background(0); 
   comet = new fireball(); for (let i = 0; i < noofsparks; i++) {
    sparks.push(new minifireball());
  }
  fullscreenButton = createButton("Full Screen");
  fullscreenButton.mousePressed(fullscreen);
  
  backgroundMusic();
}

function backgroundMusic() {
  backgroundCalm.play();
  backgroundCalm.loop();
  backgroundCalm.setVolume(0.1);
}
 
function draw() {
   background(0); 
  
  fill(255, 201, 0, 255);
  circle(55, 70, 80); 
  
  fill(255, 120, 205);
  push();
  translate(width * 0.2, height * 0.3);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill (245, 217, 39);
  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(255);
  noStroke();
  push();
  translate(width * 0.7, height * 0.2);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(224, 74, 74); //strawberry pink
  noStroke();
  push();
  translate(width * 0.3, height * 0.8);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(191, 107, 42); //coffee brown
  noStroke();
  push();
  translate(width * 0.4, height * 0.1);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(109, 184, 72); //light green
  noStroke();
  push();
  translate(width * 0.4, height * 0.35);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(34, 39, 189); // star by the moon, blue
  noStroke();
  push();
  translate(width * 0.01, height * 0.45);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(255); // white
  noStroke();
  push();
  translate(width * 0.2, height * 0.6);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(34, 189, 158); // teal
  noStroke();
  push();
  translate(width * 0.89, height * 0.1);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(135, 168, 214); // light blue/purple
  noStroke();
  push();
  translate(width * 0.7, height * 0.6);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(255, 153, 219); // baby pink
  noStroke();
  push();
  translate(width * 0.4, height * 0.6);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(227, 89, 39); // pumpkin
  noStroke();
  push();
  translate(width * 0.1, height * 0.8);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
   fill(97, 29, 145); //purple
  noStroke();
  push();
  translate(width * 0.92, height * 0.8);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(224, 11, 210); //bright pink
  noStroke();
  push();
  translate(width * 0.55, height * 0.3);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(255, 153, 158); //peach
  noStroke();
  push();
  translate(width * 0.5, height * 0.7);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
  
  fill(110, 117, 219); // blue star
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 100.0);
  star(0, 0, 10, 1.2, 5);
  pop();
   
  let s = second(20);  
  if (s / timecheck === int(s/timecheck)) {
    comet.newcomet();
    for (let i = 0; i < noofsparks; i++) {
      sparks[i].newborn();
    }
  }
  
  comet.update(); 
  comet.bounds(); 
  
  if(comet.mass > 1 &&
    s/timecheck !== int(s/timecheck)){
    comet.render();
  }
  
  if(s/timecheck !== int(s/timecheck)) {
   for (let i = 0; i < noofsparks; i++) { 
    let yesspark = random(1); //chance stars are born
    if (yesspark < 0.0075) {
      sparks[i].makenew(comet.pos, comet.vel); 
    }
    sparks[i].update(); 
  }
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
}

function fireball() { //angle of shooting star
  this.pos = createVector(random(-45, width*0.4), 
                          height * random(0.1,0.5)); 
  this.vel = createVector(random(2, 3), random(2.75));
  this.vel.mult(2); 
  this.mass = random(9,18); 
  
  this.update = function() {
    this.pos.add(this.vel);
  }
  
  this.bounds = function() { 
    if (this.pos.x > width ||
      this.pos.y > height) {
      this.pos = createVector(random(-45, width*0.4), 
                          height * random(0.1,0.5)); 
    }
  }
  this.render = function() { 
    push(); 
    stroke(200, 255, 255, 180);
    strokeWeight(this.mass*random(2,4)); 
    point(this.pos); 
    pop();
  }
  
  this.newcomet = function (){
    this.pos = createVector(random(-45, width*0.4), 
                          height * random(0.1,0.5)); 
  this.vel = createVector(random(2, 3), random(1.75));
  this.vel.mult(2); 
  this.mass = random(9,18);
  }
}

function minifireball() { 
  this.pos = createVector(comet.pos.x,
                          comet.pos.y); 
  this.vel = createVector(comet.vel.x,
                          comet.vel.y); 
  this.lifespan = 0; 
  this.burnrate = random(1.75, 4.5);

  this.makenew = function(cometpos, cometvel) { 
    comet.mass -= 0.1; 
    if (comet.mass <= 1) { 
      comet.mass = 1; 
    }
    
    if (comet.mass > 1) { /// check if comet is not melted
      this.pos = createVector(cometpos.x, cometpos.y); 
      this.vel = createVector(cometvel.x, cometvel.y+random(-0.05, random(-0.07, 0.25))); 
      this.lifespan = 0; 
      
      
      
      
      let yesspire = random(1);
      if (yesspire < 0.25) { //flickers if below 25%
        push();
        translate(this.pos);
        stroke(200, 255, 255, 180);
        strokeWeight(random(2,4)); 
        let spire = random(comet.mass, comet.mass+3);
        line(-spire*1.5,0, spire*1.5,0); //flaring
        line(0, -spire*1.5, 0, -spire*1.5);
        line(-spire, -spire, spire, spire);
        line(spire, -spire, spire, -spire);
        pop();
      }
    }
  }

  this.update = function() { 
    this.lifespan += this.burnrate; 
    if (this.lifespan >= 255) { 
      this.lifespan = 255; 
    }

    if (this.lifespan < 255) { 
      this.vel.mult(0.98); 
      this.pos.add(this.vel); 
      push(); 
      stroke(255, 255 - this.lifespan, 0, 255);//yellow to red color
      strokeWeight(random(5,8)-this.lifespan*0.015);
      point(this.pos);
      pop();
    }
  }
  
  this.newborn = function() {
    this.pos = createVector(comet.pos.x,
                            comet.pos.y);
    this.vel = createVector(comet.vel.x,
                            comet.vel.y);
    this.lifespan = 0;
    this.burnrate = random(1,2);
  }
}

