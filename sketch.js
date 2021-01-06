
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinImage,dust,bgImg;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
	bgImg = loadImage("park.jpg")

}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	
	dust = createSprite(885,530,20,20);
	dust.addImage(dustbinImage);
	dust.scale = 0.5;
	
	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	



	Engine.run(engine);
	dust = new dustbin(832,525,20,150)
	dust1 = new dustbin(880,603,100,20)
	dust2 = new dustbin(930,525,20,150)
	Paper = new paper(100,610,10)
	surface = new Ground(width/2,620,width,10)
	
}


function draw() {
 
  background(bgImg);
  dust.display();
  dust1.display();
  dust2.display();
  Paper.display();
  surface.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:52.55,y:-60})
	} 
}

