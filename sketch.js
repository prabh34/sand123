var fixedRect, movingRect;
var go1,go2,go3;
var mo1,mo2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1= createSprite(500,200,80,40);
  go1.shapeColor= "green";
  go2= createSprite(600,50,80,30);
  go2.shapeColor= "orange";
  go3= createSprite(200,100,50,30);
  go3.shapeColor= "blue";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor= "brown";
    fixedRect.shapeColor= "yellow";
  }
  else{
    movingRect.shapeColor= "green";
    fixedRect.shapeColor= "green";
  }
  
  drawSprites();
}

function isTouching(mo1,mo2) {
  if (mo1.x - mo2.x < mo2.width/2 + mo1.width/2
    && mo2.x - mo1.x < mo2.width/2 + mo1.width/2
    && mo1.y - mo2.y < mo2.height/2 + mo1.height/2
    && mo2.y - mo1.y < mo2.height/2 + mo1.height/2) {
  return true;
}
else {
  return false;
  
}

}