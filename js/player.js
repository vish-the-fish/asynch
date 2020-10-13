class Player{
  constructor(){
    this.index = 0;
    this.distance = 0;
    this.name = null;
  };
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
  update(){
    var playerindex = "players/player"+this.index;
    database.ref(playerindex).set({
      name:this.name,distance:this.distance
    })
  }
  static getplayerinfo(){
    var playerinforef = database.ref("players");
    playerinforef.on("value",(data)=>{
      allplayers = data.val();
    })
  }
}