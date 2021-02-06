var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("fairysound.wav.wav");

}

function setup() {
	createCanvas(1365, 650);

	 

	fairy = createSprite(100, 470);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
 

  background(bgImg)

  keyPressed();

  
if(keyDown("down")){
	star.velocityY = 2;
}

if(star.y === 450){
	star.velocityY = 0;
}

drawSprites();

fairyVoice.play();

}

function keyPressed() {
	if(keyWentDown("left")){
	fairy.velocityX = -3;
	}
	if(keyWentUp("left")){
	fairy.velocityX = 0;
	}
	if(keyWentDown("right")){
	fairy.velocityX = 3;
	}
	if(keyWentUp("right")){
	fairy.velocityX = 0;
	}
}
