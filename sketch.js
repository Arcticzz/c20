const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var angle = 180

function setup (){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
/*var ball_options = {
  restitution:0.8, 
  frictionAir:0.01
}
ball = Bodies.circle(200,200,20,ball_options);
World.add(world, ball);
*/
wedge1 = Bodies.rectangle(200,200,100,20)
var ground_option = {
  isStatic:true
}
ground = Bodies.rectangle(200,350,400, 5, ground_option);
World.add(world, ground);
World.add(world,wedge1)
console.log(ground);
}

function draw (){
  background("black");
  Engine.update(engine);
  /*ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  */
  fill("blue");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 5)
  Matter.Body.rotate(wedge1, angle);
  push();
  translate(wedge1.position.x, wedge1.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop();
  angle = angle+0.2
}