var scene = createSprite(200,200);
scene.setAnimation("bg_underwater_1");

var fish1 = createSprite(20,100);
fish1.setAnimation("fish1");
fish1.velocityX = 5;
fish1.scale = 0.2;

var fish2 = createSprite(380,200);
fish2.setAnimation("fish2");
fish2.velocityX = -2;
fish2.scale = 0.3;

var fish3 = createSprite(20,320);
fish3.setAnimation("fish1");
fish3.velocityX = 4;
fish3.scale = 0.2;


function draw() {
  background("white");
  if(fish1.x > 430) {
    fish1.x = 0;
  }
  if(fish2.x < -40) {
    fish2.x = 400;
  }
  if(fish3.x > 430) {
    fish3.x = 0;
  }
  
  drawSprites();
}

function mousePressed() {
  //cambiar la escena de fondo a una aterradora
  scene.setAnimation("bg_underwater_2");
  //cambiar los peces a peces malos
  fish1.setAnimation("bad_fish1");
  fish2.setAnimation("bad_fish2");
  fish3.setAnimation("bad_fish1");
}
