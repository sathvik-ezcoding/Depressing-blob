const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;
var log1,log2,log3,log4;
var bird;
var pigman,henchman;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log1 = new Log(810,260,300,PI/2)
    log2 = new Log(810,180,300,PI/2)
    log3 = new Log(760,120,150,PI/7)
    log4 = new Log(850,120,150,-PI/7)
    bird = new Bird(100,100)
    pigman = new Pigman(810,350)
    henchman = new Pigman(810,220)

ground= new Ground(600,height,1200,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   pigman.display();
   henchman.display();
   bird.display();
   ground.display();
}