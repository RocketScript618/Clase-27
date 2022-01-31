const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var tower,towerImage;

var backImage;

function preload() {
  backImage = loadImage("background.gif");
  towerImage = loadImage("tower.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  tower = new Tower(120,350,180,310);

  rectMode(CENTER);
}


function draw() {
  background("black");
  image(backImage,0,0,width,height);
  Engine.update(engine);

  tower.display();

}