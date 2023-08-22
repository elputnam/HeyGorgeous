//Pub in Galway to encourage selfies

//photos
let base;
let bronze;
let pigeons;
let selfie1;
let selfie2;
let sil;

let alp1 = 0;
let alp2 = 255;
let colour = 180;

function preload(){
  base = loadImage("assets/HeyGorgeous_base.png");
  bronze = loadImage('assets/HeyGorgeous_bronze.png');
  pigeons = loadImage('assets/HeyGorgeous_pigeons.png');
  selfie1 = loadImage('assets/HeyGorgeous_self1.png');
  selfie2 = loadImage('assets/HeyGorgeous_self2.png');
  sil = loadImage('assets/HeyGorgeous_sil.png')
}

function setup() {
  createCanvas(bronze.width, bronze.height);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
  frameRate(8);
  //rectMode(CENTER);

}

function draw() {
  background(0);

  //bronze
  push();
  tint(255, random(70, 100));
  image(bronze, 0, 0, width, height);
  pop();

  
  //pigeons
  blend(pigeons, 0, 0, pigeons.width, pigeons.height, 0, 0, width, height, DIFFERENCE);

  //selfie 1
  push();
  selfie1.filter(GRAY);
  tint(255, random(50));
  image(selfie1, random(50), 0, width, height);


  blend(selfie1, 0, 0, selfie1.width, selfie1.height, 0, 0, width, height, LIGHTEST);
  pop();

  //second pigeon layer
  push();
  tint(255, random(alp1));
  image(pigeons, 0, 0, width, height);
  pop();

  //glitch
  // for (let i = 0; i <10; i++){
  //   noStroke();
  //   //fill(random(360), 100, 100, alp1);
  //   fill(0, random(alp1));
  //   rect(0, random(height), width, random(20));
  // }
  push();
  tint(0, alp2);
  image(sil, random(-5,5), random(-5,5));
  pop();

  for (let i = 0; i <10; i++){
    noStroke();
    fill(colour, random(100), 100, alp2);
    // fill(0, random(alp1));
    rect(0, random(height), width, 50);
  }
  

  //selfie 2
  push();
  tint(alp2);
  blend(selfie2, 0, 0, selfie2.width, selfie2.height, 0, 0, width, height, DARKEST);
  pop();
  
  
  //blend(sil, 0, 0, sil.width, sil.height, 0, 0, width, height, DIFFERENCE);
  if (frameCount%int(random(20))==0){
    colour = random(360);
    bronze.filter(INVERT);
    if (alp1 == 0){
      alp1 = 100;
      alp2 = 0;
    } else {
        alp1 = 0;
        alp2 = 255;
      }
    }
  }

