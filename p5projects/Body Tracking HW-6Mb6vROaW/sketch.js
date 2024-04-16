// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js

Modified based on Kyle McDonald's ml5 poseNet sketch:
https://editor.p5js.org/kylemcdonald/sketches/H1OoUd9h7
=== */

let video;
let poseNet;
let poses = [];

/*
See below link for complete list of available keypoints:
https://github.com/tensorflow/tfjs-models/tree/master/posenet#keypoints
*/
let keypointIndex = 0;

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.size(width, height);

  // detection
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  image(video, 0, 0, width, height);

  drawKeyPoints();
}

  // Loop through all the poses detected
function drawKeyPoints() {  
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i].pose;
    let leftEar = pose.leftEar;
    let rightEar = pose.rightEar;
    
    //try changing to value of keypointIndex in line 22!
    let xpos = pose.keypoints[keypointIndex].position.x;
    let ypos = pose.keypoints[keypointIndex].position.y;
    
    fill(255, 0, 0);
    ellipse(int(xpos), int(ypos), 50, 50);
    
  
    fill(255, 0, 0);
    ellipse(int(xpos), int(ypos), 20, 50);
    
  
  }
}

