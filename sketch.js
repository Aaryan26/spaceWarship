var PLAY=1;
var END=0;
var gameState= PLAY;

var bg, bgimg;
var ground;

var man, manImage;
var bullet, bulletImg;

var alien,alien1Img, alien2Img, alien3Img;
var aliengrp, bulletgrp;
var alien1, alien2, alien3;
var score=0;
var spawnRate=300;

function preload(){
  bgimg= loadImage('images/space.jpg');
  manImage= loadImage('images/man.png');
  bulletImg= loadImage('images/bullet.png');

  alien1Img= loadImage('images/alien1.png');
  alien2Img= loadImage('images/alien2.png');
  alien3Img= loadImage('images/alien3.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  bg= createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  bg.addImage(bgimg);

  man=createSprite(50, displayHeight-140, 10,10);
  man.addImage(manImage);
  man.scale= 0.5;
  man.collide= ground;

  ground= createSprite(displayWidth/2, displayHeight, displayWidth, 100);
  ground.shapeColor='brown';

  aliengrp= new Group();
  alien2grp= new Group();
  alien3grp= new Group();
  bulletgrp= new Group();
}

function draw() {
  background(0);

 
  

  if(gameState === PLAY){
  bg.velocityX= 3;

  if(bg.x>1000){
    bg.x= displayWidth/2;
  }

  if(keyDown(UP_ARROW)){
      spawnbullet();
     }
  
  if(aliengrp.isTouching(bulletgrp)){
   // gameState= END;
    aliengrp.destroyEach();
    bulletgrp.destroyEach();
    score= score+2;
  }
  
  if(alien2grp.isTouching(bulletgrp)){
     alien2grp.destroyEach();
     bulletgrp.destroyEach();
     score= score+4;
   }
  
   if(alien3grp.isTouching(bulletgrp)){
    alien3grp.destroyEach();
    bulletgrp.destroyEach();
    score= score+8;
  }
 
}
  

  else if(gameState === END){
    bg.velocityX=0;

  }

  console.log(gameState);

  

  spawnalien1();
  spawnalien2();
  spawnalien3();

 drawSprites();

 textSize(30);
 fill ('white');
 text('score:' + score, displayWidth-150, 50);

}

function spawnalien1(){
  
  if(frameCount % 200 === 0){    
    var alien= createSprite(displayWidth+10, displayHeight-140, 10, 10);
    var rand= Math.round(random(1,3));
    alien.addImage(alien1Img);   
    spawnRate--;
    alien.velocityX= -3;
    aliengrp.add(alien);
    alien.scale= 0.4;
}
}

function spawnalien2(){
  
  if(frameCount % 300 === 0){
    var alien= createSprite(displayWidth+10, displayHeight-140, 10, 10);
    var rand= Math.round(random(1,3));
    alien.addImage(alien2Img);   
    spawnRate--;
    alien.velocityX= -3;
    alien2grp.add(alien);
    alien.scale= 0.4;
}
}

function spawnalien3(){
  
  if(frameCount % 500 === 0){
    var alien= createSprite(displayWidth+10, displayHeight-140, 10, 10);
    var rand= Math.round(random(1,3));
    alien.addImage(alien3Img);   
    spawnRate--;
    alien.velocityX= -3;
    alien3grp.add(alien);
    alien.scale= 0.4;
}
}



function spawnbullet(){
  bullet= createSprite(120, displayHeight-110, 10, 10);
  bullet.addImage(bulletImg);
  bullet.scale= 0.1;
  bullet.velocityX= 10;
  bulletgrp.add(bullet);
}




