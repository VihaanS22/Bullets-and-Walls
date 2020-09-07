var rifle, rifle_image
var bullet, bullet_image, speed, weight
var wall, wall_image, thickness, wall2_image, wall3_image
var back, back_image
var start, start_text

function preload() {

 start_text = loadImage("start1.png")
wall_image = loadImage("wall.png")
wall2_image = loadImage("wall2.png")
wall3_image = loadImage("wall3.png")
rifle_image = loadImage("rifle.png")
back_image = loadImage("back.png")
bullet_image = loadImage("bullet.png")
}


function setup() {
  createCanvas(1500,900);

  

  back = createSprite(750, 400, 1500, 400);
  back.addAnimation("background", back_image)
  back.scale = 3

  start = createSprite(750, 200, 1500, 400);
  start.addAnimation("text", start_text)
 start.scale = 0.6
 

  thickness = random(22, 83)
  speed = random(223, 321)
  weight = random(30, 52)


  bullet = createSprite(280, 500, 1500, 400);
  bullet.addAnimation("bullet_shot", bullet_image)
  bullet.scale = 0.5
bullet.velocityX = speed


  
  rifle = createSprite(120, 495, 40, 10);
  rifle.addAnimation("rifle_gun", rifle_image)
rifle.scale = 0.5
  

  wall = createSprite(1400, 400, thickness, height/2);
wall.addAnimation("wall_brick", wall_image)
wall.addAnimation("wall_broken", wall2_image)
wall.addAnimation("wall_correct", wall3_image)



}

function draw() {

background(247, 247, 247)
  
if(hasCollided(bullet, wall)){
bullet.velocityX = 0

var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){

wall.changeAnimation("wall_broken", wall2_image)

}

if(damage<10){

  wall.changeAnimation("wall_correct", wall_image)


}
}

 /*if(wall.x-bullet.x<(bullet.width+wall.width)/5){
bullet.velocityX = 0;


var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

if(damage>10){

wall.changeAnimation("wall_broken", wall2_image)
}

if(deformation<10){
  wall.changeAnimation("wall_brick", wall_image)
} 
 

}
  
 */
  
  drawSprites();
}

function hasCollided(bullet, wall) {
  
bulletRightEdge = bullet.x + bullet.width
wallLeftEdge = wall.x

if(bulletRightEdge >= wallLeftEdge){
return true
}

return false

}

