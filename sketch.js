
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground, dustinBox1, dustinBox2, dustinBox3;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  
  
	Engine.run(engine);

    ground=new Ground(width/2,670,width,20);
    dustinBox1 = new Dustbin(1000,653,150,20);
    dustinBox2 = new Dustbin(1080,628,20,70);
    dustinBox3 = new Dustbin(920,628,20,70);
    paperObject = new Paper(200,450,40);
   
    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });

    
  }





function draw() {
  rectMode(CENTER);
  background("red");

  ground.display();
  dustinBox1.display();
  dustinBox2.display();
  dustinBox3.display();
  paperObject.display();

  keyPressed();
  
  drawSprites();
 
}



function keyPressed() {

 if (keyCode ===UP_ARROW)  {

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

 }


}



