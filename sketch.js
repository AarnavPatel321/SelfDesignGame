var invisibleLine;
var boat1,boat1Image;
var boat2,boat2Image;
function preload(){
  boat1Image=loadImage("Images/PlayerBoat1.png");
  boat2Image=loadImage("Images/PlayerBoat2.png");
  coinImage=loadImage("Images/CoinImage.png");
  bgImage1=loadImage("BackgroundImage.jpeg");

}
function setup() {
  createCanvas(1000,550);
  bgImage=createSprite(500,225,10,10);
  bgImage.addImage("bg", bgImage1);
  bgImage.scale=5;
  invisibleLine=createSprite(500,275,4,550);
  boat1=createSprite(250,500,10,10);
  boat1.addImage("boat1",boat1Image);
  boat2=createSprite(750,500,10,10);
  boat2.addImage("boat2",boat2Image);
  boat2.scale=0.2;
  boat1.scale=0.2;
  coin=createSprite(100,100,10,10);
  coin.addImage("coin", coinImage);
  coin.scale=0.2;
}

function draw() {
  background(0,0,0);  
  if(keyDown("left")){
    boat1.x=boat1.x-2;
  }
  if(keyDown("right")){
    boat1.x=boat1.x+2;
  }
  if(keyDown("A")){
    boat2.x=boat2.x-2;
  }
  if(keyDown("D")){
    boat2.x=boat2.x+2;
  }
  if(boat1.isTouching(invisibleLine)){
    textSize(25);
    text("Hellooo", 200,200);
  }
  drawSprites();
}