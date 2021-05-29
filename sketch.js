const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1, ground2, ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10, box11, box12, box13, box14, box15, box16;

var box1a,box2a,box3a,box4a,box5a,box6a,box7a,box8a,box9a,box10a,
box11a, box12a, box13a, box14a, box15a, box16a;

var img, rope, hexa, ball;

function preload(){
  img = loadImage("polygon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   
  engine = Engine.create();
  world =  engine.world;

  var options = {
    'restitution' : 0.1,
    'friction' : 0,
    'density' : 0.2
  }
  hexa = Bodies.circle(50, 200, 20, options);
  World.add(world, hexa)
  rope = new Launcher(hexa, {x:150, y:200});

  

  ground =  new Ground(width/2, height-20, width, 20);
  ground1 =  new Ground(width/2+50, height-110, 450, 20);
  ground2 =  new Ground(width/2+ 500, height-260, 450, 20);


  box1 = new Block(width/2-120,400, 50, 60);
  box2 = new Block(width/2-66,400, 50, 60);
  box3 = new Block(width/2-12,400, 50, 60);
  box4 = new Block(width/2+42,400, 50, 60);
  box5 = new Block(width/2+96,400, 50, 60);
  box6 = new Block(width/2+150,400,50, 60)
  box7 = new Block(width/2+204,400,50, 60);


  box8 = new Block(width/2-66,340, 50, 60);
  box9 = new Block(width/2-12,340, 50, 60);
  box10 = new Block(width/2+42,340, 50, 60);
  box11 = new Block(width/2+96,340, 50, 60);
  box12 = new Block(width/2+150,340,50, 60);

  box13 = new Block(width/2-12,280, 50, 60);
  box14 = new Block(width/2+42,280, 50, 60);
  box15 = new Block(width/2+96,280, 50, 60);

  box16 = new Block(width/2+42,220, 50, 60);





  
  box1a = new Block(width/2+350,240, 50, 60);
  box2a = new Block(width/2+404,240, 50, 60);
  box3a = new Block(width/2+458,240, 50, 60);
  box4a = new Block(width/2+512,240, 50, 60);
  box5a = new Block(width/2+566,240,50, 60);
  box6a = new Block(width/2+620,240,50, 60);
  box7a = new Block(width/2+674,240,50, 60);

  box8a = new Block(width/2+404,180, 50, 60);
  box9a = new Block(width/2+458,180, 50, 60);
  box10a = new Block(width/2+512,180, 50, 60);
  box11a = new Block(width/2+566,180,50, 60);
  box12a= new Block(width/2+620,180,50, 60);

  box13a = new Block(width/2+458,120, 50, 60);
  box14a = new Block(width/2+512,120, 50, 60);
  box15a = new Block(width/2+566,120,50, 60);

  box16a = new Block(width/2+512,60, 50, 60);

}

function draw() {
  background("white");  

  Engine.update(engine);

  
  
  ground.display();
  ground1.display();
  ground2.display();

  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("cyan")
  box8.display();
  box9.display();
  box10.display();
  box11.display()
  box12.display()

  fill("lightgreen");
  box13.display();
  box14.display();
  box15.display();

  fill("yellow");
  box16.display();


  fill("pink");
  box1a.display();
  box2a.display();
  box3a.display();
  box4a.display();
  box5a.display();
  box6a.display();
  box7a.display();

  fill("cyan")
  box8a.display();
  box9a.display();
  box10a.display();
  box11a.display()
  box12a.display()

  fill("lightgreen");
  box13a.display();
  box14a.display();
  box15a.display();

  fill("yellow");
  box16a.display();

  rope.display();
 
  imageMode(CENTER);
  image(img, hexa.position.x, hexa.position.y, 40, 40 )

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(hexa);
  }
}