const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myEngine,myWorld

function setup() {
  createCanvas(800,700);
myEngine=Engine.create();
myWorld=myEngine.world
var  gopt={isStatic : true}
ground= Bodies.rectangle(400, 500, 800, 10,gopt) 

var bopt={restitution : 0.7}
ball= Bodies.circle(400,200,20,bopt)
World.add(myWorld,ground)
World.add(myWorld,ball)
    //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
Engine.update(myEngine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}