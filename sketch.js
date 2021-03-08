const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// Declaring the engine variable.

var engine;
var hammer,plane,stone,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

    //Creating an engine for the application to make physics simulations.

	engine = Engine.create();
	world = engine.world;

	//Creating the bodies.

    plane = new Plane(600,380,1200,20);

    hammer = new Hammer(150,50,200,70);

	stone = new Stone(100,100,50,50);

	rubber = new Rubber(200,200,100,100);
}


function draw() {
	background("lightblue");

    Engine.update(engine);

	hammer.display();
	plane.display();
	stone.display();
	rubber.display();
}