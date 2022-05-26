var canvas = new fabric.Canvas("myCanvas");

block_width= 50 ;
block_height= 70;
player_x= 15;
player_y= 19;


var playerobjects = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerobjects = Img;
        playerobjects.scaleToWidth(160);
        playerobjects.scaleToHeight(150);
        playerobjects.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(playerobjects);
    });
}

var blockobject = "";


function block_update(get_image) {
    fabric.Image.fromURL(get_image, function(Img)
    {
        blockobject = Img;
        blockobject.scaleToWidth(block_width);
        blockobject.scaleToHeight(block_height);
        blockobject.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(blockobject);
    });
}

window.addEventListener("keydown" , my_boringkeydown);

function my_boringkeydown(e){

    keypressed = e.keyCode;
    console.log(keypressed);

    if((e.shiftKey == true)&&(keypressed == '80')){
       console.log("shift p is pressed");
       block_width = block_width + 10 ;
       block_height = block_height + 10 ;

       document.getElementById("bts").innerHTML = block_width;
       document.getElementById("skz").innerHTML = block_height;
    }

    if((e.shiftKey == true)&&(keypressed == '77')){
        console.log("shift m is pressed");
        block_width = block_width - 10 ;
        block_height = block_height - 10 ;
 
        document.getElementById("bts").innerHTML = block_width;
        document.getElementById("skz").innerHTML = block_height;
     }

if(keypressed == '38'){
    up();
    console.log("movinup")
}

if(keypressed == '40'){
    down();
    console.log("movindown")
}

if(keypressed == '37'){
    left();
    console.log("movinleft")
}

if(keypressed == '39'){
    right();
    console.log("movinright")
}

if(keypressed == '67'){
    block_update("cloud.jpg");
    console.log("c is pressed i.e cloud is shown ")
}

if(keypressed == '68'){
    block_update("dark_green.png");
    console.log("d is pressed ")
}

if(keypressed == '71'){
    block_update("ground.png");
    console.log("g is pressed ")
}

if(keypressed == '76'){
    block_update("light_green.png");
    console.log("l is pressed ")
}

if(keypressed == '82'){
    block_update("roof.jpg");
    console.log("r is pressed ")
}

if(keypressed == '84'){
    block_update("trunk.jpg");
    console.log("t is pressed ")
}

if(keypressed == '85'){
    block_update("unique.png");
    console.log("u is pressed ")
}

if(keypressed == '87'){
    block_update("wall.jpg");
    console.log("w is pressed ")
}

if(keypressed == '89'){
    block_update("yellow_wall.png");
    console.log("y is pressed ")
}

}

function up(){
    if(player_y >= 0 ){
      player_y = player_y - block_height;
      console.log("block height is " + block_height );
      console.log("player y = " + player_y + " player x = " + player_x);
      canvas.remove(playerobjects);
      
      player_update();
    }
    
}

function down(){
    if(player_y <= 600 ){
       player_y = player_y + block_height;
       console.log("block height is " + block_height);
       console.log("player y = " + player_y + "player x " + player_x);
       canvas.remove(playerobjects);
       
       player_update();
    }
}

function left(){
    if(player_x >= 0 ){
        player_x = player_x - block_width ;
        console.log("block width is " + block_width);
        console.log("player x = " + player_x + "player y = " + player_y );
        canvas.remove(playerobjects);

        player_update();
    }
}

function right(){
    if(player_x <= 900){
        player_x = player_x + block_width ; 
        console.log("block width is " + block_width);
        console.log("player x =" + player_x + "player y =" + player_y);
        canvas.remove(playerobjects);

        player_update();
    }
}
