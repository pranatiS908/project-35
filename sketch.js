var dog, happyDog, database, foodS, foodStock, 

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog.addImage(dog);
  foodStock=database.ref('Food')
  foodStock.on("value", readstock)
  
}


function draw() {  
 background(46, 139, 87)
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)
   foodStock=foodStock-1
 }
  drawSprites();
  text(foodStock)
  textSize(20)
  fill();
 stroke();

}

function readStock(data){
  foodS=data.val();
}

function writeStock(){
  database.ref('/').update({
    Food:x
  })
}



