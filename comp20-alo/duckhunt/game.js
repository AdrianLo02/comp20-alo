function draw() {
	sprite = new Image();
	sprite.src = 'assets/duckhunt.png';
	sprite.onload = function(){
		game = document.getElementById('game');
		ctx = game.getContext('2d');

		//drawing the sky
		ctx.fillStyle="#87CEEB";
		ctx.fillRect(0, 0, 800, 600);

		//drawing from the sprite sheet
		drawTree();
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

//defines values signifying what portion of the sprite sheet to use and where to draw on the canvas, then draws by calling drawSprite
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

function drawDuck1 {

}

function drawDuck2 {
	
}

function drawDuck3 {
	
}

function drawDuck4 {
	
}

function drawDuck5 {
	
}

//draws a portion of the sprite sheet onto the canvas by calling drawImage
function drawSprite(sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
	ctx.drawImage(sprite, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
}