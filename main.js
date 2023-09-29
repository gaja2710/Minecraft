canvas = new fabric.Canvas('myCanvas');

player_x = 30;
player_y = 30;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("Technoblade.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });

}

function block_update(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_object);
    });

}

window.addEventListener("keydown", my_keydown);



function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("n and shift pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if (keyPressed == "37") {
        left();
        console.log("left");
    }
    if (keyPressed == "38") {
        up();
        console.log("up");
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("dwon");
    }

    if (keyPressed == "87") {
        block_update('Brick_block.jpg');
        console.log("w");
    }

    if (keyPressed == "71") {
        block_update('Grass_block.jpg');
        console.log("g");
    }

    if (keyPressed == "84") {
        block_update('Oak_block.jpg');
        console.log("t");
    }
    if (keyPressed == "82") {
        block_update('Water_block');
        console.log("r");
    }
    if (keyPressed == "89") {
        block_update('Oak_leaves.png');
        console.log("y");
    }

    if (keyPressed == "68") {
        block_update('Diamond_block.jpg');
        console.log("d");
    }
    if (keyPressed == "65") {
        block_update('Birch_wood_block.jpg');
        console.log("a");
    }

    if (keyPressed == "66") {
        block_update('Cherry_block.jpg');
        console.log("b");
    }

    if (keyPressed == "66") {
        block_update('Cherry_plank_block.jpg');
        console.log("c");
    }

    if (keyPressed == "72") {
        block_update('Cobblestone_block.jpg');
        console.log("h");
    }
    if (keyPressed == "69") {
        block_update('Emerald_block.jpg');
        console.log("e");
    }
    if (keyPressed == "70") {
        block_update('Deepslate_block.jpg');
        console.log("f");
    }
    if (keyPressed == "73") {
        block_update('Water_block_block.jpg');
        console.log("f");
    }
    if (keyPressed == "74") {
        block_update('Glass_block.jpg');
        console.log("j");
    }
    if (keyPressed == "75") {
        block_update('Glowstone_block.jpg');
        console.log("k");
    }
    if (keyPressed == "76") {
        block_update('Gold_block.jpg');
        console.log("f");
    }
    if (keyPressed == "77") {
        block_update('Grass_block.png');
        console.log("m");
    }
    if (keyPressed == "78") {
        block_update('Iron_bars_block.jpg');
        console.log("n");
    }
    if (keyPressed == "79") {
        block_update('Stone_brick_block.jpg');
        console.log("o");
    }
    if (keyPressed == "80") {
        block_update('Lava_block.jpg');
        console.log("p");
    }
    if (keyPressed == "81") {
        block_update('Obsidian_block.jpg');
        console.log("q");
    }
    if (keyPressed == "83") {
        block_update('Quartz_block.png');
        console.log("s");
    }
    if (keyPressed == "85") {
        block_update('Quartz_pillar_block.png');
        console.log("u");
    }
    if (keyPressed == "86") {
        block_update('Spruce_planks_block.png');
        console.log("v");
    }
    if (keyPressed == "88") {
        block_update('Spruce_wood_block.jpg');
        console.log("x");
    }
    if (keyPressed == "90") {
        block_update('Stone_block.jpg');
        console.log("q");
    }
}


function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("block image height" + block_height);
        console.log("When up arrow is pressed, x= " + player_x + ", y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y <= 550) {
        player_y = player_y + block_height;
        console.log("block image height" + block_height);
        console.log("When down arrow is pressed, x= " + player_x + ", y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_width;
        console.log("block image width" + block_width);
        console.log("When left arrow is pressed, x= " + player_x + ", y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x <= 900) {
        player_x = player_x + block_width;
        console.log("block image width" + block_width);
        console.log("When right arrow is pressed, x= " + player_x + ", y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}