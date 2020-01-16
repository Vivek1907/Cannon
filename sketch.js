const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,cannon,head;

function setup(){
  createCanvas(1400,675);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  ground = new Ground(700,650,1400,50);
  head = new Head(380,475,115,50,0);
  cannon = new Cannon(width/4,550,100,50);
}

function draw(){
  background("#87ceeb");
  Engine.update(engine);
  ground.display("brown");
  head.display("#d9ff66");
  cannon.display("#d9ff66");
}