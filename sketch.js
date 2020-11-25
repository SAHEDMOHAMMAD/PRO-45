var canvas, backgroundImage;
var player1,playerStep1,playerNormal1,playerTouch1;
var player2,playerStep2,playerNormal2,playerTouch2;
var player3,playerStep3,playerNormal3,playerTouch3;
var player4,playerStep4,playerNormal4,playerTouch4;
var player5,playerStep5,playerNormal5,playerTouch5;
var player6,playerStep6,playerNormal6,playerTouch6;
var Tree



function preload(){
backgroundImage=loadImage("sprites/GROUND.jpg")
    player1 = loadAnimation("sprites/player1-1.png","sprites/player1-2.png",
    "sprites/player1-3.png","sprites/player1-4.png");

    player2 = loadAnimation("sprites/player2-1.png","sprites/player2-2.png",
    "sprites/player2-3.png","sprites/player2-4.png");

    player3 = loadAnimation("sprites/player3-1.png","sprites/player3-2.png",
    "sprites/player3-3.png","sprites/player3-4.png");

    player4 = loadAnimation("sprites/player4-1.png","sprites/player4-2.png",
    "sprites/player4-3.png","sprites/player4-4.png");

    player5 = loadAnimation("sprites/player5-1.png","sprites/player5-2.png",
    "sprites/player5-3.png","sprites/player5-4.png");

     Tree=loadAnimation("sprites/TREE.png")

}

function setup(){
canvas = createCanvas(displayWidth,displayHeight);

playerA=createSprite(displayWidth/2,displayHeight/2)
playerA.addAnimation("running",player1)
playerA.scale=0.2
playerA.velocityX=(4,4)


playerB=createSprite(displayWidth-100,displayHeight/2)
playerB.addAnimation("running",player2)
playerB.scale=0.2
playerB.velocityX=(-4,-4)

playerC=createSprite(displayWidth-200,displayHeight/2)
playerC.addAnimation("running",player3)
playerC.scale=0.2
playerC.velocityX=(-4,4)

playerD=createSprite(displayWidth-400,displayHeight/2)
playerD.addAnimation("running",player4)
playerD.scale=0.2
playerD.velocityX=(4,-4)

playerE=createSprite(displayWidth-300,displayHeight/2)
playerE.addAnimation("running",player5)
playerE.scale=0.2

TreeA=createSprite(displayWidth/7,displayHeight/3)
TreeA.addAnimation("running",Tree)
TreeA.scale=0.6

// player1 = new Player(0,0,0,0);
// player2 = new Player(0,0,0,0);
// player3 = new Player(0,0,0,0);
// player4 = new Player(0,0,0,0);
// player5 = new Player(0,0,0,0);
// tree    = new Tree(0,0,0,0)
}



function draw(){
background(backgroundImage);
if(keyDown("space") && playerE >= 9) {
    playerE.velocityY = -4;
  }

  playerE.velocityY = playerE.velocityY + 0.3


// player1.display();
// player2.display();
// player3.display();
// player4.display();
// player5.display();
// tree.display();
drawSprites();
text(mouseX+","+mouseY, mouseX,mouseY);
}







