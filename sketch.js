const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var count;
var day 
var night
var bg
function preload(){
  getBackgroundImg()



}

function setup(){
    var canvas = createCanvas(1200,400)
    engine = Engine.create();
    world = engine.world;
    
count = 0;

    ground1 = new Ground(410,300,400,20);
    ground2 = new Ground(1000,200,300,20);
   
    box1 = new Box(330,265,40,40)
    box2 = new Box(355,265,40,40)
    box3 = new Box(385,255,40,40)
    box4 = new Box(420,255,40,40)
    box5 = new Box(450,255,40,40)

    box6 = new Box(360,195,40,40)
    box7 = new Box(390,195,40,40)
    box8 = new Box(420,195,40,40)
    
    box9 = new Box(390,155,40,40)

    box10 = new Box(970,195,40,40)
    box11= new Box(1000,195,40,40)
    box12= new Box(1030,195,40,40)
    
    box13= new Box(980,175,40,40)
    box14= new Box(1010,185,40,40)

    box15= new Box(1000,175,40,40)


   polygon1 = new Polygon(200,200,50,50);
    rope = new Slingshot(polygon1.body,{x:100,y:200})



}

function draw(){

if(bg)
background(bg) 
    Engine.update(engine);
    //console.log(score)
    text("Score: "+count,750,40);
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();

    
    polygon1.display();
    rope.display();


}
function keyPressed(){
    if(keyCode == 32) {
  rope.attach(polygon1.body)
  
    } 
  }
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1800){
    b = "black.jpg"  
  }
  else{
     b = "white.png" 
  }

 bg= loadImage(b);
  
}




