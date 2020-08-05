var ground;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){


}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
 

  ground=new Ground(400,350,150,20);
  ground1=new Ground(600,200,150,20)
  box=new Box(400,330,20,20);
  box1=new Box(420,330,20,20);
  box2=new Box(380,330,20,20);
  box3=new Box(390,310,20,20);
  box4=new Box(410,310,20,20);
  box5=new Box(400,290,20,20);
  box6=new Box(600,180,20,20);  
  box7=new Box(620,180,20,20);
  box8=new Box(580,180,20,20);
  box9=new Box(610,160,20,20);
  box10=new Box(590,160,20,20);
  box11=new Box(600,140,20,20);

  box12= new Box(100,500,50,50);

  
  
  polygon=new Polygon(50,200,40,40);
  slingshot= new SlingShot(polygon.body,{x:50,y:200});
  
}

function draw() {
  background("brown"); 
  
  ground.display();
  ground1.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  fill ("blue")
  box12.display();

  
  polygon.display();
  slingshot.display();
  

  drawSprites();
}

function mouseDragged()
{
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}