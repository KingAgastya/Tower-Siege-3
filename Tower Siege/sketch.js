const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var col1, col2, col3, col4, col5;
var score = 0;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  col1 = new Box(845, 150, 50, 50);
  col2 = new Box(895, 150, 50, 50);
  col3 = new Box(945, 150, 50, 50);
  col4 = new Box(870, 100, 50, 50);
  col5 = new Box(920, 100, 50, 50);
  col6 = new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background('turquoise');

  strokeWeight(4);
  noStroke();
  fill("black");
  textSize(30);
  text("Score: "+ score, 30, 40);

  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("yellow", "lime");
  box2.display("yellow", "lime");
  box3.display("yellow", "lime");
  box4.display("yellow", "lime");
  box5.display("yellow", "lime");
  box6.display("brown", "lime");
  box7.display("brown", "lime");
  box8.display("brown", "lime");
  box9.display("brown", "lime");
  box10.display("green", "lime");
  box11.display("green", "lime");
  box12.display("green", "lime");
  box13.display("pink", "lime");
  box14.display("pink", "lime");
  box15.display("gray", "lime");
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  col1.display("yellow", "lime")
  col2.display("yellow", "lime")
  col3.display("yellow", "lime")
  col4.display("orange", "lime")
  col5.display("orange", "lime")
  col6.display("purple", "lime")
  sling.display("yellow");
  stand1.display();
  stand2.display();
  ball.display("darkblue", "pink");
  textSize(35);
  fill(0);
  text("DRAG AND RELEASE THE BALL TO DESTROY THE BOXES", 150, 385)
  fill("pink");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}

async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseType = await response.json();
    var dt = responseType.datetime;
    var hour = dt.slice(11,13);
    if(hour >= 19 && hour <= 06)
    {
      background("Black");   
    }
    else
    {
      background("Cyan");
    }
    
}