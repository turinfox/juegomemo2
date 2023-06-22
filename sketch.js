var turin
var piso;
var techo;
var delay;
var mk;
var pe;

function setup() {
  createCanvas(1200,600);

  turin = createSprite(600,300,35,35);
 mk=createGroup();
  delay=createGroup();
  fox();
  ds();
 
  piso = createSprite(600,500,1200,20); 
  techo = createSprite(600,100,1200,20);
 createEdgeSprites();
 
}

function draw() {
  background("black");
  if (pe=="end") {
    turin.shapeColor= "red";
    
  }
   
   turin.collide(techo)
   turin.collide(piso)
   piso.shapeColor = "white";
   techo.shapeColor="white";
   turin.shapeColor= "blue";
   

   if (turin.x<17) {
    turin.x=17
   }
   if (turin.x>1183) {
    turin.x=1183
   }
   dnp();
   

  drawSprites();
}

var t1=150;
var t2=50;
//obstaculos abajo
function fox() {
  for (var i = 0; i <= 10; i++) {
   
   var iu=createSprite(0+145*i,390,15,200)
   delay.add(iu)
   delay.setVelocityXEach(15)
   
  }
  
  /*if (delay.x>1216) {
    delay.x=-16;
  }*/
}
function ds() {
  for (var i = 0; i <= 10; i++) {
   
   var iu=createSprite(73+145*i,200,15,200)
   mk.add(iu)
   mk.setVelocityXEach(-15)
   
  }
}
function dnp() {
  if (keyDown("up")) {
    turin.y=turin.y-17;
    
  }
  if (keyDown("down")) {
    turin.y=turin.y+12;
    
  }
  if (keyDown("left")) {
    turin.x=turin.x-12;
    
  }
  if (keyDown("right")) {
    turin.x=turin.x+12;
    
  }
  turin.velocityY=+10;
  if (turin.isTouching(delay)) {
    gameState="end"
  }
  if (turin.isTouching(mk)) {
    gameState="end"
  }
}