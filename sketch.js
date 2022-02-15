
// Write a sketch that includes a function of your own design that draws a moon.
// The function should take a arguments/parameters for size, color, and phase.
// You should be able to draw a number of moons with different phases, sizes 
// and colors within your draw() function.
// Phase should be a number from 0 - 30, where 0 is a new moon, 15 is a full 
// moon, and 30 is an almost new moon.
// does not need to look like a moon


let topLid = 75;
let bottomLid = 825;

function setup() {
	createCanvas(2000, 900);
}

function draw() {
	background(150);

	//centering tool
	line

 //moon();

//function moon(phase, xLoc, yLoc, overallSize){ //phase should be between 0-30
 
   //top eyelid bezier
 	noFill();
    strokeWeight(10);
	beginShape();
	vertex(666, 450);
	quadraticVertex(1050, topLid, 1333, 450);
	//second argument of quad vertex will be custom phase variable
	endShape();

	//bottom eyelid bezier
	noFill();
    strokeWeight(10);
	beginShape();
	vertex(666, 450);
	quadraticVertex(950, bottomLid, 1333, 450);
	//second argument of quad vertex will be custom phase variable
	endShape();

	//

	 //top eye fold
 	noFill();
    strokeWeight(10);
	beginShape();
	vertex(666, 350);
	quadraticVertex(1000, 50, 1333, 400);
	//second argument of quad vertex will be custom phase variable
	endShape();


}


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


//Jesses example:

	// let timer = 0;
	// let moonphase;
	// let monthInSeconds = 30;
	// let frameRate = 60;

	// function setup() {
	//   createCanvas(800, 800);
	// }

	// function draw() {
	//   background(0);

	//   //animate moon over time, simulating a month
	//   timer++;
	//   timer = timer % (monthInSeconds * frameRate); //300 should be 5 seconds if we are 60fps
	//   moonphase = map(timer, 0, monthInSeconds * frameRate, 0, 30);
	//   //print(moonphase);
	//   fill(255);
	//   text("day of the month "+int(moonphase), 100, 100);
	//   moon(moonphase, width/2, height/2, 1);

	//   //draw 30 different moons across the top of the screen
	//   for (var i = 0; i < 30; i++) {
	//     moon(i, i*30, 50, 0.1);
	//   }
	// }


	// function moon(phase, xLoc, yLoc, overallSize){ //phase should be between 0-30
	//   if (phase <= 15){
	//     phase = map(phase, 0, 15, 0, 300);
	//   }else{
	//     phase = map(phase, 15, 30, 300, 0);
	//   }

	//   ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize );
	// 	//print("myCoolFunction is running");
	// }