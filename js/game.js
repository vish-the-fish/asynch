class Game{
  constructor(){}
  getState(){
    var gamestateref = database.ref("gameState");
    gamestateref.on("value",function(data){
      gamestate = data.val();
    })
  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  async start(){
    if(gamestate == 0){
      player = new Player();
      var playercountref = await database.ref("playerCount").once("value");
      if(playercountref.exists()){
        playercount = playercountref.val();
        player.getcount();
      }
      form = new Form();
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4];
    
  }
    play(){
    form.hide();
    textSize(20);
    text("gamestarted",120,100);
    Player.getplayerinfo();
    if(allplayers!==undefined){
      var index = 0;
      var x = 0;
      var y = 0;
      for(var plar in allplayers){
        index = index+1;
        console.log(index);
        x = x+200;
        y = displayHeight-allplayers[plar].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index = player.index){
          
          cars[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
    }
    drawSprites();
  }
}