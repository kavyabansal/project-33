const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  backImage = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
}



snow = [];

function draw() {
  background(backImage);  
  Engine.update(engine);

  if(frameCount%90===0) {
    snow.push(new Snow(random(width/2-400,width/2+400),10,60));
  }

  for (var k=0;k<snow.length;k++) {
    snow[k].display();
  }
  
}


/*if(frameCount%90===0){
  particles.push(new Particles(random(width/2-10,width/2+10),10,10));
}

for (var k=0;k<particles.length;k++) {
  particles[k].display();
}*/