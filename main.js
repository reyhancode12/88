var canvas = new fabric.Canvas('myCanvas');

ball_x=0;
ball_y=0;
hole_x=400;
hole_y=200;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-h.png",function(Img){
hole_obj=Img;
hole_obj.scaleToWidth(65);
hole_obj.scaleToWidth(70);
hole_obj.set({
top:hole_y,
left:hole_x

});
canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.image.fromURL("ball.png",function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToWidth(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		
		});
		canvas.add(ball_obj);
			});
}

window.addEventListener("keydown", my_keydown);

if((ball_y==hole_y)&&(ball_x==hole_x)){
	canvas.remove(ball_obj);
}



function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >=10)
		 {
ball_y=ball_y-block_image_height;
console.log("block_image_height"+block_image_height);
console.log("when down key is pressed, X="+ball_x"Y="+ball_y);
canvas.remove(ball_obj);
new_image();
	}

	function down()
	{
		 if (ball_y <=450)
		 {
ball_y=ball_y+block_image_height;
console.log("block_image_height"+block_image_height);
console.log("when down key is pressed, X="+ball_x"Y="+ball_y);
canvas.remove(ball_obj);
new_image();
		 }
	} 

	function left()
	{
				{
			if(ball_x >5)
		 {
ball_y=ball_x-block_image_width;
console.log("block_image_width"+block_image_width);
console.log("when down key is pressed, X="+ball_x"Y="+ball_y);
canvas.remove(ball_obj);
new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			{
				ball_y=ball_x+block_image_width;
				console.log("block_image_width"+block_image_width);
				console.log("when down key is pressed, X="+ball_x"Y="+ball_y);
				canvas.remove(ball_obj);
				new_image();
						}
		}
	}
	
}

