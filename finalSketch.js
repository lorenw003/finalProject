let fade = 0;
let fadeAmount = 1;
let letters = [];
let allowQuietCheck = false;

let crowd, street, tram, font, bezierLine, explodingText, typed, flashedMessage;

var mic, count;

// ARRAY OF FUNCTIONS
const actions = [movingLetters, squiggle, exploding, typing, flashing, flashingMessage];



function preload() {
  //FONT
  font = loadFont('./data/SF-Pro-Rounded-Regular.otf');
  
  //SOUND
  street = loadSound('data/Street.m4a');
  crowd = loadSound('data/Crowd.m4a');
  tram = loadSound('data/Tram.m4a');
}




function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));
  
  textFont(font);
  
  //Turn on Mic
  mic = new p5.AudioIn();
  mic.start();
  
  //Analyse amplitude
  analyzer= new p5.Amplitude();
  
  //Output Volume
  outputVolume(1);
  
  //Different Functions
  bezierLine = new BezierLine();
  explodingText = new ExplodingText(["Reminders", "0 Completed", "Reminders", "Branding Brief 2B", "Reminders", "Finish Application", "Submit Form", "Buy Milk", "Vacuum Room", "Marketing Exam Prep", "Interactive Media Assignment", "Laundry", "Pay Rent", "Sleep", "Search", "Add List", "3 Tasks", "Due Tomorrow", "Deadline", "Due Now", "DUE", "LATE", "TOO MUCH"]);
  typed = new TypingMessage(["Reminders", "0 Completed", "Reminders", "Branding Brief 2B", "Reminders", "Finish Application", "Submit Form", "Buy Milk", "Vacuum Room", "Marketing Exam Prep", "Interactive Media Assignment", "Laundry", "Pay Rent", "Sleep", "Search", "Add List", "3 Tasks", "Due Tomorrow", "Deadline", "Due Now", "DUE", "LATE", "TOO MUCH"]);
  flashedMessage = new TypingText(width / 3.5, height / 2);
  
  setTimeout(() => {
    allowQuietCheck = true;
  }, 5000);
}




function draw() {
  count = 0;
  let volume=mic.getLevel();
  
  let mappedVol = map(volume, 0, 1, 0, 100);
  console.log(mappedVol);
  count += mappedVol;

  
  if (count > 0.4) {
    changeFunction();
  } else if (count < 0.2 && allowQuietCheck) {
     quietSetting();
  }
}




//QUIET SETTING
function quietSetting() {
  window.location.href = "index.html";
}


//MOVING LETTERS
//This code is taken from https://editor.p5js.org/pattvira/sketches/Rs498E8W3
function movingLetters() {
  background(220);
  letters.push(new Letter(random(0,width), random(0,height)));
  
  for (let i=letters.length-1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen==true) {
      letters.splice(i, 1);
    }
  }
}



//SQUIGGLE
function squiggle() {
   // Fading text
  textSize(100);
  fill(224, 224, 224, fade);
  noStroke();
  textAlign(CENTER);
  text("I CANT... I...", width / 2, height / 2);

  // Fade logic
  if (fade < 0) fadeAmount = 10;
  if (fade > 255) fadeAmount = -10;
  fade += fadeAmount;

  // Bezier logic
  frameRate(10);
  //DRAWS CURVE
  bezierLine.display(); 
  //GETS NEW POINTS FOR CONTIONUS CURVE
  bezierLine.newPoints(); 
}



//EXPLODING TEXT
function exploding () {
  textAlign(CENTER, CENTER);
  explodingText.display();
}



//TYPING TEXT
function typing() {
  textAlign(LEFT, BASELINE);
  typed.display();
  console.log("typed");
}


//FLASHING BACKGROUNG
function flashing() {
  background(random(255), random(255), random(255));
}


//FLASHING TYPE 
function flashingMessage() {
  background(33);
  textAlign(LEFT, CENTER);
  flashedMessage.type();
}


//SOUND
function mousePressed() {
  crowd.play();
  tram.play();
  
}



//RESPONSIVE
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}




//CHANGE FUNCTION
function changeFunction() {
  console.log("checking");
  const randomIndex = Math.floor(random(actions.length));
  return actions[randomIndex]();
}
