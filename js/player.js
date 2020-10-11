class Player{
  constructor(){};
  getcount(){
    var playercountref = database.ref("playerCount");
    playercountref.on("value",function(data){
      playercount = data.val();
    })
  }
  updatecount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
  update(name){
    var playerindex = "player"+playercount;
    database.ref(playerindex).set({
      name:name
    })
  }
}