var cat,catImg,cat2Img,cat3Img;
var mouse,mouse2Img,mouse3Img,mouse4Img
var ground,groundImg;

function preload() {
    groundImg = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img = loadAnimation("images/cat4.png");

    mouse2Img = loadImage("images/mouse1.png");
    mouse3Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    ground = createSprite(500,400,10,10);
    ground.addImage(groundImg);

    cat = createSprite(800,600,10,10);
    cat.addImage(catImg);
    cat.addAnimation("In",cat2Img)
    cat.addAnimation("Img",cat3Img)
    cat.scale = 0.2;
    cat.debug = true;

    mouse = createSprite(100,600,20,20);
    mouse.addImage(mouse2Img);
    mouse.addAnimation("Img",mouse3Img);
    mouse.addAnimation("Img",mouse4Img);
    mouse.debug = true;
    mouse.scale = 0.2;
    
    //create tom and jerry sprites here

}

function draw() {

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.changeAnimation("Img",cat3Img);
       cat.changeAnimation("cat3Img");
        cat.velocityX = 0;
    }

    console.log(cat.x-mouse.x)

   

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.changeAnimation("Img",cat2Img);
        mouse.changeAnimation("Img",mouse3Img);
    }

  //For moving and changing animation write code here


}
