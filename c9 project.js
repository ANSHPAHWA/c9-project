
function setup() {
  createCanvas(400,400);
  var box1=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyDown("LEFT")){
    background("red")
  }
  if(keyDown("RIGHT")){
    background("blue")
  }
  if(keyDown("UP")){
    background("orange")
    }
  if(keyDown("DOWN")){
    background("yellow")
  }

}




