var movingobject;
var steadyobject;

function setup() {
  createCanvas(800,400);
  movingobject=createSprite(60,70,100,100);
  steadyobject=createSprite(200,150,80,100);

  movingobject.debug=true;
  steadyobject.debug=true;
}

function draw() {
  background("black");  
  drawSprites();
  movingobject.y=mouseY;
  movingobject.x=mouseX

  console.log(movingobject.x-steadyobject.x)
  if (movingobject.x-steadyobject.x<movingobject.width/2+steadyobject.width/2 
    && steadyobject.x-movingobject.x<movingobject.width/2+steadyobject.width/2
  && movingobject.y-steadyobject.y<movingobject.height/2+steadyobject.height/2 
    && steadyobject.y-movingobject.y<movingobject.height/2+steadyobject.height/2){
movingobject.shapeColor="green";
steadyobject.shapeColor="red";
  }

  else 
  {movingobject.shapeColor="blue";
  steadyobject.shapeColor="yellow";}

}