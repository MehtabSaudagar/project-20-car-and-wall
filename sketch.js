var car, wall, weight, speed, deformation;
var state="do";
var def;
function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 car.shapeColor="grey";
 wall=createSprite(1200,200,60,height/2);
 wall.shapeColor="black"

 speed=random(55,70);
  weight=random(400,1500);
 car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  textSize(50)
      fill("red")
   
      if(keyDown("space")&&state==="done"){
        state="do"
        car.x=50;
        speed=random(55,70);
    weight=random(400,1500);
    car.velocityX=speed;
    car.shapeColor="grey";
      }
    
     
  if(wall.x-car.x<wall.width/2+car.width/2){
    text("DEFORMATION is "+def+" for passengers",250,100);
    if(state==="do"){
    car.velocityX=0;
   car.x=wall.x-wall.width/1.2;
    deformation=0.5*weight*speed*speed/22500;

    if(deformation<100){
      car.shapeColor="green";
      def="good";
      
    }

    if(deformation>180){
      car.shapeColor="red";
      def="lethal";
    }

    if(deformation>100 &&deformation<180){
      car.shapeColor="yellow";
      def="average";
    }

    state="done";
  }
}

  drawSprites();
}