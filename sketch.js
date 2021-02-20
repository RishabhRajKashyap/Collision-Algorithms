var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100, 200, 30, 40);
  obj1.shapeColor = "green";

  obj2 = createSprite(200, 250, 30, 40);
  obj2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //values are called as parameters or arguments in coding
  if(isTouching(movingRect, obj2)){
    movingRect.shapeColor = "red";
    obj2.shapeColor = "red";
  }
   else {
    movingRect.shapeColor = "green";
    obj2.shapeColor = "green";
  }

  drawSprites();
}

