   Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var count = 0;
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
  // text("1000", 17, 500);
  // text("900", 105, 500);
  // text("500", 185, 500);
  // text("20", 270, 500);
  // text("50", 350, 500);
  // text("10", 430, 500);
  // text("100", 500, 500);
  // text("500", 580, 500);
  // text("900", 660, 500);
  // text("1000", 740, 500);

  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    //score++;
  //    particle.display();
  //  }

  //for displaying particles at a time and scores
 if(particle!=null)
 {
   particle.display();

   if (particle.body.position.y>760)
   {
         if (particle.body.position.x < 300) 
         {
             score=score+500;      
             particle=null;
             if ( count>= 5) gameState ="end";                          
         }


         else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
         {
               score = score + 100;
               particle=null;
               if ( count>= 5) gameState ="end";

         }
         else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
         {
               score = score + 200;
               particle=null;
               if ( count>= 5)  gameState ="end";

         }      
         
   }
 }
 


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  // if(particle.body.position.x < 80 || particle.body.position.x > 0){

  // //  // score= score+1;

  // }

  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  


}

function mousePressed(){

  if(gameState !== "end"){

    count++;

    particle = new Particle(mouseX, 10,10,10);

    
  }

}
