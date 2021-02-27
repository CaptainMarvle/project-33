  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var particle;
var turn = 0;
var gameState = 1;
var line;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

 
}
 


function draw() {
  background("black");

  textSize(40);
  text("Score : "+score,20,40);
  stroke("white");
  fill("white"); 

  textSize(20);
  stroke("white");
  fill("white"); 
  text("1000", 17, 500);
  text("900", 105, 500);
  text("500", 185, 500);
  text("20", 270, 500);
  text("50", 350, 500);
  text("10", 430, 500);
  text("100", 500, 500);
  text("500", 580, 500);
  text("900", 660, 500);
  text("1000", 740, 500);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles.x < 80 || particles.x > 0){

    score= score+1000

   }


}

function mousePressed(){

  if(gameState !== "end"){

    count++;
    particle = new Particle(mouseX, 10,10,10);

  }

}