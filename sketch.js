const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var car,wall;
var speed,weight;
var deformation ;


function setup() {
  createCanvas(1600,400);
  car=createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX=speed;
  car.shapeColor=(255);

wall.shapeColor=(80,80,80);


}

function draw() {
  background("black"); 
  if (wall.x-car.x<wall.width/2+car.width/2) {
    car.velocityx=0;
  
    deformation=0.5*weight*speed*speed/22500
    if (deformation<100) {
      car.shapeColor=(0,255,0)
    }
    if (deformation>100 && deformation < 180) {
      car.shapeColor=(230,230,0)
    }
   
    if (deformation>180) {
      car.shapeColor=(255,0,0)
    }
  } 
  drawSprites();
}