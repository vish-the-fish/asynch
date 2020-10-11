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
  start(){
    if(gamestate == 0){
      player = new Player();
      player.getcount();
      form = new Form();
      form.display();
    }
  }
}