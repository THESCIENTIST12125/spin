const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var gg,bal


function preload() {
    

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

gg=new ground(200,50,100,25)

bal=new ball(185,20,30,30)

slab1=new move(350,150,150,30)
con1=new con (slab1.body,{x:350,y:150},0,0.04)
slab2=new move(220,250,150,30)
con2=new con (slab2.body,{x:220,y:250},0,0.04)




}


function draw(){
    background('#bfbfbf');
    Engine.update(engine);
   
gg.display()
bal.display()
slab1.display()
con1.display()
slab2.display()
con2.display()


}
