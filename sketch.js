
// Write a sketch that includes a function of your own design that draws a moon.
// The function should take a arguments/parameters for size, color, and phase.
// You should be able to draw a number of moons with different phases, sizes 
// and colors within your draw() function.
// Phase should be a number from 0 - 30, where 0 is a new moon, 15 is a full 
// moon, and 30 is an almost new moon.
// does not need to look like a moon

//current issues:
	// no masking layer for outside of eyeball image
	// background image is being drawn in the upper left cordner
	// but also being drawn larger across the entire screen only once?
	// eyelids only getting close together but not touching/closing
	//

let background;
let eyeBall;
let eyeX = 1000;
let eyeY = 450;

let topLid = 74;
let topSpeed = 1;
let bottomLid = 826;
let bottomSpeed = 1;
let closed = 525;
let leftxAnchor = 666;
let leftyAnchor = 450;
let rightxAnchor = 1333;
let rightyAnchor = 400;
let flag = false;

function preload(){
  background = loadImage('assets/cloud_background.png');
  eyeBall = loadImage("assets/eye_ball.png");
}

function setup() {
	createCanvas(2000, 950);
}

function draw() {
  image(background, 0, 0);
  imageMode(CENTER);
  image(eyeBall, eyeX, eyeY);

// iris tracking mouse conditionals
 if (eyeX < 1300){
   if (mouseX > eyeX){
    eyeX = eyeX + 2
   }
 }
 if (eyeX > 700){
   if (mouseX < eyeX){
    eyeX = eyeX - 2
   }
 }

  if (eyeY > 300){
   if (mouseY < eyeY){
    eyeY = eyeY - 2
   }
 }
 if (eyeY < 600){
   if (mouseY > eyeY){
    eyeY = eyeY + 2
   }
 }
//console.log(eyeX, eyeY);


//masking layer???
	//hole in background
	//begin and endcontour functions


  //top eyelid bezier
 	noFill();
  strokeWeight(8);
	beginShape();
	vertex(leftxAnchor, leftyAnchor);
	quadraticVertex(1050, topLid, rightxAnchor, rightyAnchor);
	endShape();

	blink();

	//bottom eyelid bezier
	noFill();
  strokeWeight(8);
	beginShape();
	vertex(leftxAnchor, leftyAnchor);
	quadraticVertex(950, bottomLid, rightxAnchor, rightyAnchor);
	endShape();

	bottomBlink();
		
	//top eye fold
 	noFill();
  strokeWeight(5);
	beginShape();
	vertex(leftxAnchor, 350);
	quadraticVertex(900, 100, 1100, 175);
	endShape();

	//console.log(topLid, bottomLid, flag);
	
}
	
function blink(){
	if(topLid < 75){
		flag = false
	}
	if (flag == true){
 		topLid = topLid - topSpeed
 		}
	if (topLid <= closed && flag == false){
 		topLid = topLid + topSpeed
 		if (topLid == closed){
 		flag = true;
 		}
 	}


}

function bottomBlink(){
	if(bottomLid > 825){
		flag = false
	}
	if (flag == true){
 		bottomLid = bottomLid + bottomSpeed
 		}
	if (bottomLid >= closed && flag == false){
 		bottomLid = bottomLid - bottomSpeed
 		if (bottomLid == closed){
 		flag = true;
 		}
 	}


}

//lids maximum point is 374

//IF lid is higher or lower than most open point THEN:
	//switch is false
//IF lid is past closed position and switch is false THEN:
	//lids movement is reversed 
		//IF lid is closed
		// switch is true
//IF switch is true THEN:
	//lid moves opposite direction


//masking layer for eye ball
	// beginShape(maskingLayer);
	// 	vertex(0, 0);//top left
	// 	vertex(2000, 0);//top right
	// 	vertex(2000, 900);//bottom right
	// 	vertex(0, 900);//bottom left
	// 	noFill();
	// 	//top bezier
	// 	//bottom bezier
	// 	endShape();

//my notes:
//eye continuesly opens and closes, with phase equation that has 30 phases
//equation that causes the control point, middle point of my bezier curve to be reversed 
//once top most point or lowest most point are reached 
//refer to wackycat equation of speed + xloc * -1 to reverse direction
//use map or speed and location -1 equation

//helens notes:
// i need to make a almond shape using vertex, quadraticvertex, quadraticvertex. that happens inside the custom function moon.
// the 2nd parameter of both of the quadraticxertex functions will each be a thing that i am changing.
// the top quadraticvertex 2nd parameter needs to increase and decrease along the y axis. that 2nd parameter will need to switch direction — so i will need a direction variable - once it reaches certain y values.
// and same with the bottom quadratic vertex 2nd parameter. but that one won’t be increasing and decreasing along the same y values, it will be lower  down, aka higher in y values, because it’s visually below the top quADRATIC VERTEX.
// my custom moon function - to do this stuff.
// moon function - or rather it should be in the draw loop
// outside of moon(), that is called something like “phaseBlinker"
// From Helen Spencer-Wallace to Everyone 02:29 PM
// i can use map to invert and change the range of phaseBlinker
// blinkDirection variable that you reassign to be 1 or -1
// whereas range of values is probably done with mapping.
