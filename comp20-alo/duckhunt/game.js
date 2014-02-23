function draw() {
	sprite = new Image();
	sprite.src = 'assets/duckhunt.png';
	sprite.onload = function(){
		game = document.getElementById('game');
		ctx = game.getContext('2d');

		//drawing the sky
		ctx.fillStyle="#87CEEB";
		ctx.fillRect(0, 0, 800, 600);

		//drawing from the sprite sheet. Each of the following functions defines values for which sprite to use and where to place it on the canvas, then calls another function to draw
		drawDuck1();
		drawDuck2();
		drawDuck3();
		drawDuck4();
		drawDuck5();
		drawTree();
		drawGround();
		drawDog();
	}
}

//defines values signifying what portion of the sprite sheet to use and where to draw on the canvas, then draws by calling drawSprite
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

function drawDuck1() {
	sourceX=0;
	sourceY=120;
	sourceWidth=38;
	sourceHeight=34;
	destX=50;
	destY=50;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

function drawDuck2() {
	sourceX=130;
	sourceY=120;
	sourceWidth=38;
	sourceHeight=34;
	destX=600;
	destY=150;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

function drawDuck3() {
	sourceX=213;
	sourceY=156;
	sourceWidth=38;
	sourceHeight=34;
	destX=300;
	destY=200;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

function drawDuck4() {
	sourceX=305;
	sourceY=232;
	sourceWidth=38;
	sourceHeight=34;
	destX=700;
	destY=350;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

function drawDuck5() {
	sourceX=0;
	sourceY=238;
	sourceWidth=38;
	sourceHeight=34;
	destX=450;
	destY=100;
	destWidth=sourceWidth*3;
	destHeight=sourceHeight*3;
	drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}

//draws a portion of the sprite sheet onto the canvas by calling drawImage
function drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
	ctx.drawImage(sprite, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}