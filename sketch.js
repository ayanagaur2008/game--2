var playerImg, asteroidImg, backImg, playerShoot, comp; 
var player, back, asteroidsGroup, compPlay;


function preload(){
  playerImg = loadImage("player.png");
  asteroidImg = loadImage("asteroid.png");
  backImg = loadImage("background.png");
  playerShoot = loadAnimation("shoot.png","shoot2.png");
  comp = loadImage("ai play.png");
}
function setup() {
  createCanvas(500,500);

  player = createSprite(250,250, 40,40);
  player.addImage(playerImg); 

  compPlay = createSprite(250, 350, 40,40);
  compPlay.addImage(comp);

  asteroid = createSprite(500,250,20,20);
  asteroid.addImage(asteroidImg);
}

function draw() {
  
  background(backImg);
 if (keyDown(UP_ARROW))
 {
   player.velocityX = 0;
   player.velocityY = -2;
 }
 
  if (keyDown(DOWN_ARROW)) {
    player.velocityY = 2;
    player.velocityX = 0;
  }
 
 if (keyDown(LEFT_ARROW))
 {
  player.velocityX = -2;
  player.velocityY = 0;
 }
 
 if (keyDown(RIGHT_ARROW))
 { 
  player.velocityX = 2;
  player.velocityY = 0;
 }

 if(asteroid.isTouching(player))
 {
   player.addAnimation(playerShoot);
 }

 spawnAsteroids();
 

  drawSprites();
}

function spawnAsteroids(){
  if(frameCount % 80 === 0){
    y = random(2, 498);
    asteroid = createSprite(450,y,20,20);
  asteroid.addImage(asteroidImg);
  asteroid.velocityX = -4;
    
    
    
    asteroid.scale = 0.5;
    asteroid.lifetime = 300;
  
    //asteroidsGroup.add(asteroid);
  }
}