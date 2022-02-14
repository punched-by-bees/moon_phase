
let timer = 0;
let moonphase;
let monthInSeconds = 30;
let frameRate = 60;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  //animate moon over time, simulating a month
  timer++;
  timer = timer % (monthInSeconds * frameRate); //300 should be 5 seconds if we are 60fps
  moonphase = map(timer, 0, monthInSeconds * frameRate, 0, 30);
  //print(moonphase);
  fill(255);
  text("day of the month "+int(moonphase), 100, 100);
  moon(moonphase, width/2, height/2, 1);

  //draw 30 different moons across the top of the screen
  for (var i = 0; i < 30; i++) {
    moon(i, i*30, 50, 0.1);
  }
}


function moon(phase, xLoc, yLoc, overallSize){ //phase should be between 0-30
  if (phase <= 15){
    phase = map(phase, 0, 15, 0, 300);
  }else{
    phase = map(phase, 15, 30, 300, 0);
  }

  ellipse(xLoc, yLoc, phase*overallSize, phase*overallSize );
	//print("myCoolFunction is running");
}