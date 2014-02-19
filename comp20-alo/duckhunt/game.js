// Your work goes here...
function draw() {
	if (game.getContext) {
        ctx = game.getContext('2d');
		img = new Image();
		img.onload=function() {
			ctx.drawImage(img, 10, 10);
			}
		img.src = 'assets/duckhunt.png';
		
		}
	}