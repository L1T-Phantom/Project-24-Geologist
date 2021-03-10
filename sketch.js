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

    plane = new Plane(600,400,1250,20);

    hammer = new Hammer(800,200,20,20);

	stone = new Stone(600,200,90,90);

	rubber = new Rubber(400,200,20,10);

	iron = new Iron(200,200,75,50);

	sand1 = new Sand(500,500);

	sand2 = new Sand(500,500);

	sand3 = new Sand(500,500);

	sand4 = new Sand(500,500);

	sand5 = new Sand(500,500);

	sand6 = new Sand(500,500);

	sand7 = new Sand(500,500);

	sand8 = new Sand(500,500);

	sand9 = new Sand(500,500);

	sand10 = new Sand(500,500);

}

//Displaying the objects.

function draw() {
	background("lightblue");

    Engine.update(engine);

	hammer.display();
	plane.display();
	stone.display();
	rubber.display();
	iron.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();
}