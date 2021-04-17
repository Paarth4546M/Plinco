const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies

var engine,world,ground;
var score = 0;
var turn = 0;
var particle
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var gameState = "start"
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(40,795,80,10);
  ground2 = new Ground(120,795,80,10);
  ground3 = new Ground(200,795,80,10);
  ground4 = new Ground(280,795,80,10);
  ground5 = new Ground(360,795,80,10);
  ground6 = new Ground(440,795,80,10);
  ground7 = new Ground(520,795,80,10);
  ground8 = new Ground(600,795,80,10);
  ground9 = new Ground(680,795,80,10);
  ground10 = new Ground(760,795,80,10);

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
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


  
    
}
 


function draw() {
  background("black");

  for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
   
 }
 
  textSize(20)
   text(mouseX + "," + mouseY, mouseX,mouseY);

   if(turn >= 5){
      gameState =  "end"
      textSize(40)
      text("Game Over",300,400)
   }

  textSize(20)
  text("500",20,600)
  text("500",100,600)
  text("500",180,600)
  text("300",260,600)
  text("300",340,600)
  text("300",420,600)
  text("200",500,600)
  text("200",580,600)
  text("200",660,600)
  text("100",740,600)
  textSize(40)
  text("Score : "+score,20,50);
  Engine.update(engine);
 
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();
  ground9.display();
  ground10.display();
  
  push()
  fill("yellow")
  rect(400,490,800,5)
 pop()

  if(particle != null){
     particle.display();
     if(particle.body.position.y>500){
        if(particle.body.position.x<250){
           score = score + 500
           particle = null; 
        }
     }
  }

  if(particle != null){
   particle.display();
   if(particle.body.position.y>500){
      if(particle.body.position.x>250 && particle.body.position.x<490){
         score = score + 300
         particle = null; 
      }
   }
}
if(particle != null){
   particle.display();
   if(particle.body.position.y>500){
      if(particle.body.position.x>491 && particle.body.position.x<725){
         score = score + 200
         particle = null; 
      }
   }
}
if(particle != null){
   particle.display();
   if(particle.body.position.y>500){
      if(particle.body.position.x>726){
         score = score + 100
         particle = null; 
      }
   }
}


   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
    
}
function mousePressed(){
   if(gameState === "start"){
      particle = new Particle(mouseX,10,10)
     turn += 1
   }
}

