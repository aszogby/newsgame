var sizing = 40;
var img;
var y2;
var hit = false;

function setup() {
 createCanvas(500,500);
 theAB = color(255,255,255);
  textSize(25);
 img=loadImage("fball.jpg");
  x = width/2;
  y = height;
  y2 = height;
 
}

function draw() {
  image(img, 0, 05);
  fill(0);
  text("Eagles", 10,10,60,60);
  fill(0);
  ellipse(x-225,y2-400, sizing, sizing);
  fill('#04458A');
  text("Cowboys", 10,450,60,60);
  fill('#04458A');
  text(y2-400,300,300);
  ellipse(mouseX,mouseY,40,40);
  fill(0);
  line(20,20,20,20);
  
  text("If you(Cowboys) collide with the Eagles",50,100);
  text("you can cause injury to a players head", 50, 120);
  text("The players head will grow",50, 140);
  text("Causing serious brain problems", 50, 160);
  
   y = y - 1;
   y2 = y2 + 1;
   
    
  hit = collideCircleCircle(x-225,y2-400,sizing,pmouseX,pmouseY,40);
   if (hit){
     y2 = 0;
     y = 0;
     sizing*5;
   } 
  }



  
  
