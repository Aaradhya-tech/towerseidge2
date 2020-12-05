const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ground1, ground2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;
var birds;
var band;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    birds = new bird(20,20);

    b1 = new pig(670,150,50,50);
    b2 = new pig(625,150,50,50)
    b3 = new pig(720,150,50,50);
    b4 = new pig(640,100,50,50);
    b5 = new pig(700,100,50,50);
    b6 = new pig(670,50,50,50);

    b7 = new pig(950,110,50,50);
    b8 = new pig(1015,110,50,50);
    b9 = new pig(880,110,50,50);
    b10 = new pig(980,45,50,50);
    b11 = new pig(920,45,50,50);
    b12 = new pig(950,5,70,20);



    ground1 = new Ground(670,200,230,20);
    ground2 = new Ground(950,150,230,20);

    ground = new Ground(600,height,1200,20);

   band = new chain(birds.body,{x:200,y:200});
    
}

function draw(){
    
    background(0);
    Engine.update(engine);
    
    birds.display();
    ground1.display();
    ground2.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

   b7.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
 
   
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(birds.body,{x : mouseX , y : mouseY})
   }
   
   function mouseReleased(){
       band.fly();
   }

   function keyPressed(){
    if(keyCode === 32){
        band.attach(birds.body);
    } }