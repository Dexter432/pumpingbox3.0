
var block1, block2, block3, block4;
var ball;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    createCanvas(800,600);

    
    ball=createSprite(random(10,750),300,20,20);
    ball.shapeColor="white";
    ball.velocityX=3;
    ball.velocityY=3;
    
   
    block1=createSprite(100,580,180,30);
    block1.shapeColor="red";

    block2=createSprite(300,580,180,30);
    block2.shapeColor="green";

    block3=createSprite(500,580,180,30);
    block3.shapeColor="blue";

    block4=createSprite(700,580,180,30);
    block4.shapeColor="yellow";

    bordas=createEdgeSprites()
    ball.bounceOff(bordas);

}

function draw() {
    background(rgb(10,10,10))
   
    if( ball.x<0){
      music.stop()
      ball.velocityX=4
    }else if( ball.x>800){
      music.stop()
      ball.velocityX=-3
    }
   
  if( ball.isTouching(block4)){
    music.play()
    ball.shapeColor="yellow";
    ball.bounceOff(block4);
    
  }
  
  else if( ball.isTouching(block3)){
    music.stop()
    ball.shapeColor="blue";
    bounceOff( ball,block3)
   
  }
    
  else if( ball.isTouching(block2)){
    music.stop()
    ball.shapeColor="green";
    bounceOff( ball,block2)
    ball.velocityX=3;
    ball.velocityY=3;
  }
  
  else if( ball.isTouching(block1)){
    music.stop()
    ball.shapeColor="red";
    ball.bounceOff(block1)
  }

  if ( ball.y<0){
    music.stop()
    ball.velocityY=3
  }

  
   
    drawSprites()
}
