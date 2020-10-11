class Form{
  constructor(){}
  display(){
    var title = createElement("h2");
   title.html("Car Racing Game! 4 players");
   title.position(130,0);
   var input = createInput("name");
   var button = createButton("play");
   var greeting = createElement("h3");
   input.position(130,160);
   button.position(250,300);
   button.mousePressed(function(){
     input.hide();
     button.hide();
     var name = input.value();
     playercount+=1;
     player.update(name);
     player.updatecount(playercount);
     greeting.html("hello "+name);
     greeting.position(130,140);
   })
  }
}