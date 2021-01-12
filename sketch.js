const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
polygonImage = loadImage("polygon.png")



}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(400,780,800,20);
Stand1 = new Ground(400,500,200,15)
Stand2 = new Ground(600,400,200,15)

Block1 = new Box(320,475,30,40)
Block2 = new Box(350,475,30,40)
Block3 = new Box(380,475,30,40)
Block4 = new Box(410,475,30,40)
Block5 = new Box(440,475,30,40)
Block6 = new Box(470,475,30,40)

//Level 2
Block7 = new Box(350,435,30,40)
Block8 = new Box(380,435,30,40)
Block9 = new Box(410,435,30,40)
Block10 = new Box(440,435,30,40)
//Level 3
Block11 = new Box(380,395,30,40)
Block12 = new Box(410,395,30,40)
//level 4
Block13 = new Box(395,355,30,40)
 
//level 1 stage 2
Block14 = new Box(525,315,30,40)
Block15 = new Box(555,315,30,40)
Block16 = new Box(585,315,30,40)
Block17 = new Box(615,315,30,40)
Block18 = new Box(645,315,30,40)
Block19 = new Box(675,315,30,40)

//Level 2 stage 2 
Block20 = new Box(555,285,30,40)
Block21 = new Box(585,285,30,40)
Block22 = new Box(615,285,30,40)
Block23 = new Box(645,285,30,40)
//Level 3 stage 2  
Block24 = new Box(585,255,30,40)
Block25 = new Box(615,255,30,40)
//level 4 stage 2
Block26 = new Box(605,225,30,40)




polygon = Bodies.rectangle(50,400,50,50,{density:1.5})
World.add(world,this.polygon)

Slingshot = new SlingShot(this.polygon,{x:100,y:400})

}

function draw() {
  background(0);
  Engine.update(engine)  
 ground.display()
 Stand1.display()
 Stand2.display()
 Block1.display()
 Block2.display()
 Block3.display()
 Block4.display()
 Block5.display()
 Block6.display()
 Block7.display()
 Block8.display()
 Block9.display()
 Block10.display()
 Block11.display()
 Block12.display()
 Block13.display()
 //stage 2
 Block14.display()
 Block15.display()
 Block16.display()
 Block17.display()
 Block18.display()
 Block19.display()
 Block20.display()
 Block21.display()
 Block22.display()
 Block23.display()
 Block24.display()
 Block25.display()
 Block26.display()
Slingshot.display()
 image(polygonImage,polygon.position.x,polygon.position.y,50,50)
}

function keyPressed ()
{
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x: mouseX,y: mouseY})
}
function mouseReleased(){
Slingshot.fly()



}