var hr,mn,sec;
var hrAnge,mnAngle,scAngle;


function setup() {
  createCanvas(400,400);
  //too use angle in degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  //TRANSLATION AND ROTATION
  translate(200,200);
  rotate(-90);

  //CALCULATING TIME USING PREDEFINED FUNCTION FROM P5.JS
  hr = hour();
  mn = minute();
  sc = second();

 //TO CREATE ab Iterative rotation
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  //drawing sconds hand
  push();
  rotate(scAngle);//rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing mins hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

   //drawing hr hand
   push();
   rotate(hrAngle);
   stroke(0,0,255,);
   strokeWeight(7);
   line(0,0,50,0);
   pop();

   stroke(255,0,255);
   point(0,0);

   //drawing the arcs
   strokeWeight(10);
   noFill();
   //seconds
   stroke(255,0,0);
   arc(0,0,300,300,0,scAngle);
   //minutes
   stroke(0,255,0);
   arc(0,0,280,280,0,mnAngle);
   //hour
   stroke(0,0,255);
   arc(0,0,260,260,0,hrAngle);

}