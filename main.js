canvas= document.getElementById('my_canvas');
ctx= canvas.getContext("2d");

nasa_imges_of_mars_array=["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];

random_number= Math.floor(Math.random() * 4);
console.log(random_number);

rover_width=100;
rover_height=90;

background_image= nasa_imges_of_mars_array[random_number];
console.log("my_backroundimage=" + background_image);

rover_image= "rover.png";

rover_x=10;
rover_y=10;

function add()
{
    console.log("QWERTY")
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadImage;
    background_ImgTag.src = background_image;

    rover_ImgTag = new Image();
    rover_ImgTag.onload = uploadrover;
    rover_ImgTag.src = rover_image;
}

function uploadImage()
{
    console.log("Background")
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_ImgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed ==  '38')
    {
        up();
        console.log("up")
    }

    if(keyPressed ==  '40')
    {
        down();
        console.log("down")
    }
    if(keyPressed ==  '37')
    {
        left()
        console.log("left")
    }
    if(keyPressed ==  '39')
    {
        right();
        console.log("right")
    }
}

function up()
{
    if(rover_y >= 0)
    {
        rover_y= rover_y-10;
        console.log("rover x -"+ rover_x +"rover y-" + rover_y);
        uploadImage();
        uploadrover();
    }
}

function down()
{
    if(rover_y <= 500)
    {
        rover_y= rover_y+10;
        console.log("rover x -"+ rover_x +"rover y-" + rover_y);
        uploadImage();
        uploadrover();
    }
}

function left()
{
    if(rover_x >= 0)
    {
        rover_x= rover_x-10;
        console.log("rover x -"+ rover_x +"rover y-" + rover_y);
        uploadImage();
        uploadrover();
    }
}

function right()
{
    if(rover_x <= 700)
    {
        rover_x= rover_x+10;
        console.log("rover x -"+ rover_x +"rover y-" + rover_y);
        uploadImage();
        uploadrover();
    }
}