function draw() {
	if (game.getContext) {
        ctx = game.getContext('2d');

		//drawing the sky
		ctx.fillStyle="#87CEEB";
		ctx.fillRect(0, 0, 800, 600);

		drawTree();
		//drawing the ground
		drawGround();
		drawDog();
	}
}

function drawTree() {
	sourceX=0;
	sourceY=268;
	sourceWidth=80;
	sourceHeight=130;
	destX=0;
	destY=120;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

//defines arguments pertaining to the ground and draws by calling drawObject
function drawGround() {
	sourceX=100;
	sourceY=700;
	sourceWidth=800;
	sourceHeight=200;
	destX=0;
	destY=400;
	destWidth=sourceWidth
	destHeight=sourceHeight
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

function drawDog() {
	sourceX=0;
	sourceY=0;
	sourceWidth=61;
	sourceHeight=43;
	destX=150;
	destY=430;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

//draws a portion of the sprite sheet onto the canvas
function drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
	img = new Image();
	img.onload=function() {
		ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
	}
	img.src = 'assets/duckhunt.png';
}