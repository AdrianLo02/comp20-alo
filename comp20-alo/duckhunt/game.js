// Your work goes here...
function draw() {
	if (game.getContext) {
        ctx = game.getContext('2d');
/*old code
		height=600;
		width=800;
		img = new Image();
		img.onload=function() {
			ctx.drawImage(img, 0, 0, width, height);
			}
*/
		//drawing the ground
		drawGround();
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
		}
	}