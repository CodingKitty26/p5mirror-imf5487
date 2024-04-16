//https://editor.p5js.org/imf5487/sketches/TGbYD1IF4
///ims03-Isadora

/*Original: https://editor.p5js.org/p5/sketches/Interaction:_kaleidoscope
// changing background reference (https://p5js.org/reference/#/p5/background and https://editor.p5js.org/lberdugo/sketches/BJG10p4dZ)
 * @name Kaleidoscope
 * @arialabel User draws thick black lines on the grey background and it is mirrored 5 times in a circle like a kaleidoscope
 * @description A kaleidoscope is an optical instrument with two or more reflecting surfaces tilted to each other in an angle. This example tries to replicate the behavior of a kaleidoscope. Set the number of reflections at the symmetry variable and start drawing on the screen. Paste the below code in the <a href="https://editor.p5js.org/"> Editor </a> and click on the save button if you wish to download a .jpg file of the art that you have created.
 */
// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 6;   

let angle = 360 / symmetry;
let saveButton, clearButton, colorChangeButton, mouseButton, keyboardButton;
let slider;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function setup() { 
  createCanvas(710, 710);
  angleMode(DEGREES);
  background(127);

  // Creating the save button for the file
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creating the button for Full Screen
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);

  // Setting up the slider for the thickness of the brush
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);

  //Creating button for Changing Background
  colorChangeButton = createButton('change background');
  colorChangeButton.mousePressed(changeColor);
}

// Save File Function
function saveFile() {
  save('design.jpg');
}

// Clear Screen function
function clearScreen() {
  background(127);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

//Background Color Change Function
  function changeColor(){
  time = millis(1000);
  background(random(255), random(255), random(255));
    time = millis(); //also update the stored time
}

function draw() {
  translate(width / 2, height / 2);
  stroke(mouseX,0,mouseY);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}
