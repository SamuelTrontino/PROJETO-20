
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1
var block2
var block3
var ground



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground_options = {
	isStatic : true	
	}

	block_options = {
	restitution : 0.95,
    frictionAir : 0.01
	}

	block2_options = {
	restitution : 0.1,
	frictionAir : 0.95
	}

	block3_options = {
	restitution : 1.0,
	frictionAir : 0.0
	}
	

	//Crie os Corpos Aqui.
	block1 = Bodies.circle(100,20,10,block_options);
	World.add(world,block1)

	block2 = Bodies.rectangle(400,20,10,20,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(600,10,10,20,block3_options);
	World.add(world,block3)


	ground = Bodies.rectangle(400,640,1000,10,ground_options);
	World.add(world,ground);

	Engine.run(engine)
	
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {

  background(0);
  
  drawSprites();
  Engine.update(engine);
  ellipse(block1.position.x,block1.position.y,20);
  rect(block2.position.x,block2.position.y,50,50);
  rect(block3.position.x,block3.position.y,90,50);
  rect(ground.position.x,ground.position.y,1000,10);
  
}



