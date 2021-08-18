
var ground
var block1,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
block16

var block17,block18,block19,block20,block21
var hexa_image, hexa

var box

function preload() {
  
  hexa_image=loadImage("polygon.png")

}



function setup() {
	createCanvas(800, 600);
    ground = new Ground();

    block1=new Block(240,425,30,30)
    block2=new Block2(270,425,30,30)
    block3=new Block(300,425,30,30)
    block4=new Block2(330,425,30,30)
    block5=new Block(360,425,30,30)
    block6=new Block2(390,425,30,30)
    block7=new Block(420,425,30,30)

    block8=new Block(270,395,30,30)
    block9=new Block2(300,395,30,30)
    block10=new Block(330,395,30,30)
    block11=new Block2(360,395,30,30)
    block12=new Block(390,395,30,30)

    block13=new Block(300,365,30,30)
    block14=new Block2(330,365,30,30)
    block15=new Block(360,365,30,30)

    block16=new Block(330,335,30,30)


    block17=new Block2(580,225,30,30)
    block18=new Block(610,225,30,30)
    block19=new Block2(640,225,30,30)
    block20=new Block(670,225,30,30)
    block21=new Block2(700,225,30,30)


}


function draw() {
  background(green);

  ground.display()

   strock(15)
   fill("black")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  strock(15)
  fill("white")
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  strock(15)
  fill("brown")
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  strock(15)
  fill("red")
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()


  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}

 




