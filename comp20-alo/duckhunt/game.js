function draw() {
	if (game.getContext) {
        ctx = game.getContext('2d');

		//drawing the sky
		ctx.fillStyle="#87CEEB";
		ctx.fillRect(0, 0, 800, 600);

		//drawing the ground
		drawGround();
	}
}

//defines arguments pertaining to the ground and draws by calling drawObject
function drawGround() {
	sourceX=0;
	sourceY=700;
	sourceWidth=900;
	sourceHeight=200;
	destX=0;
	destY=422;
	destWidth=800;
	destHeight=178;
	drawObject(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

//draws a portion of the sprite sheet onto the canvas
function drawObject(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
	img = new Image();
	img.onload=function() {
		ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
	}
	img.src = 'assets/duckhunt.png';
}