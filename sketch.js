var ball1,ball2,ball3,ball4,ball5, roof1,rope1,rope2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball1=new Balls(200,400);
	 ball2=new Balls(250,400);
	 ball3=new Balls(300,400);
	 ball4=new Balls(350,400);
	 ball5=new Balls(400,400);
	roof1=new Roof(400,200,500,40);
	rope1=new Rope(ball1.body,roof1.body,-200,0)
	rope2=new Rope(ball2.body,roof1.body,-140,0)
	rope3=new Rope(ball3.body,roof1.body,-80,0)
	rope4=new Rope(ball4.body,roof1.body,-20,0)
     rope5=new Rope(ball5.body,roof1.body,36,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('blue');
  
  drawSprites();
 
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:300,y:0})
	}
  }


