class Form{
  constructor(){
     this.input = createInput("name");
     this.button = createButton("play");
     this.greeting = createElement("h3");
  }
  hide(){
    this.input.hide();
    this.greeting.hide();
    this.button.hide();
  }
  display(){
    var title = createElement("h2");
   title.html("Car Racing Game! 4 players");
   title.position(130,0);
   this.input.position(130,160);
   this.button.position(250,300);
   this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();
     player.name = this.input.value();
     playercount+=1;
     player.update();
     player.updatecount(playercount);
     this.greeting.html("hello "+player.name);
     this.greeting.position(130,140);
   })
  }
}