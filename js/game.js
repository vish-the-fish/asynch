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
  }
  play(){
    form.hide();
    textSize(20);
    text("gamestarted",120,100);
    Player.getplayerinfo();
    if(allplayers!==undefined){
      var displayposition = 120;
      for(var plar in allplayers){
        if(plar == "player"+player.index){
          fill("red");
        }else{
          fill("black");
        }
        displayposition += 20;
        textSize(15);
        text(allplayers[plar].name+" : "+allplayers[plar].distance,120,displayposition);
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
    }
  }
}