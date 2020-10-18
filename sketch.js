var database, form, player, game;
var gamestate = 0;
var playercount = 0;
var allplayers;
var car1,car2,car3,car4,cars;
function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playercount == 4){
        game.update(1);
    }
    if(gamestate == 1){
        clear();
        game.play();
    }
}

