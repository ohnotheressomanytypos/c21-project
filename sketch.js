var canvas;
var music;

var box;
var surf1,surf2,surf3,surf4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box=createSprite(random(20,750),15,20,20);
    box.velocityX=(random(-20,20));
    box.velocityY=(random(1,20));
    box.shapeColor=("white");

    surf1=createSprite(100,590,190,10);
    surf1.shapeColor=("blue");

    surf2=createSprite(300,590,190,10);
    surf2.shapeColor=("orange");

    surf3=createSprite(500,590,190,10);
    surf3.shapeColor=("red");

    surf4=createSprite(700,590,190,10);
    surf4.shapeColor=("green")
    
    edges= createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    
    box.bounceOff(edges);

    box.bounceOff(surf1);
    box.bounceOff(surf2);
    box.bounceOff(surf3);
    box.bounceOff(surf4);

    
    if(surf1.isTouching(box)){
        box.shapeColor=("blue");
    }
    if(surf2.isTouching(box)){
        box.shapeColor=("orange");
    }
    if(surf3.isTouching(box)){
        box.shapeColor=("red");  
    }
    if(surf4.isTouching(box)){ 
        box.shapeColor=("green");
    }

    drawSprites();
    
}
