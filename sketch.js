
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,600,40)
 //bob1 = new Bob(10,10,100);
 bob1 = new Bob(225,450,50);
 bob2 = new Bob(325,450,50);
 bob3 = new Bob(425,450,50);
 bob4 = new Bob(525,450,50);
 bob5 = new Bob(625,450,50);

 rope1 = new Rope(bob1.body,roof1.body,-175,0);
 rope2 = new Rope(bob2.body,roof1.body,-75,0);
 rope3 = new Rope(bob3.body,roof1.body,20,0);
 rope4 = new Rope(bob4.body,roof1.body,115,0);
 rope5 = new Rope(bob5.body,roof1.body,215,0);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  bob1.display();
  roof1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 //drawSprites();
 
}

function keyPressed(){ 
	if(keyCode === 32){
		
		 Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -200, y : -400}); }
		 console.log("hello");
		 }



