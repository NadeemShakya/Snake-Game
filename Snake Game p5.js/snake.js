
let gameOver = true;
function Snake() {
	this.xInit = 0;
	this.yInit = 0;
	this.xNext = 80;
	this.yNext = 80;
	this.x = 0;
	this.y = 0;
	this.size = 40;
	this.xDir = 40;
	this.yDir = 0;
	this.snakeLength = 0;
	this.tail = [];
	this.gameOver = 1;
	this.column = floor(width/this.size);
	this.row = floor(height/this.size);


this.display = function() {

	if(gameOver) {
		noStroke();
		for(this.i = 0; this.i < this.row; this.i++){
			if(this.i % 2 == 0) {
				for(this.j = 0; this.j < this.column; this.j++){
					if(this.j % 2 == 0) {
						fill(127,255,0);
						rect(this.j*this.size, this.i*this.size, this.size, this.size);
					}else{
						fill(50,205,50);
						rect(this.j*this.size, this.i*this.size, this.size, this.size);
					}
				}
			}else {
				for(this.j = 0; this.j < this.column; this.j++){
					if(this.j % 2 == 0) {
						fill(50,205,50);
						rect(this.j*this.size, this.i*this.size, this.size, this.size);
					}else{
						fill(127,255,0);
						rect(this.j*this.size, this.i*this.size, this.size, this.size);
					}
				}				
			}

		}
		stroke(128);
		noFill();
 
		fill(32, 32, 32);    //snake's color
		noStroke();
		textSize(20);
		fill(250, 3, 0);
		text("Score : " + this.snakeLength * 10, height-100, 50);
		stroke(250, 0, 0);
		strokeWeight(2.5);
		line(this.xFood + 20, this.yFood + 1, this.xFood + 22, this.yFood - 10);
		noStroke();
		// stroke(0);
		// strokeWeight(3);
		fill(65,105,225);
		rect(this.x, this.y, this.size, this.size);  // snake's initial head.
		for(var i = 0; i < this.tail.length;i++){
			for (var j = 0; j < this.tail.length; j++) {
				
				rect(this.tail[i][j], this.tail[i][j+1], this.size, this.size);
				
			}
			
		}	


		//snake's eye start.
		fill(0);
		noStroke();
		ellipse(this.x+5, this.y+10, 6, 6);
		ellipse(this.x+15, this.y+10, 6, 6);
		fill(255);
		ellipse(this.x+5, this.y+10, 2, 2);
		ellipse(this.x+15, this.y+10, 2, 2);
		//snake's eye stop.		
	} else {              //gameover
		fill(0);
		noStroke();
		textSize(32);

		text("GameOver !! Your Total Score is " + this.snakeLength * 10 + "." , width/8,  150);
		text("Press F5 to play again!", width / 8, 200);
	}
}

this.move = function() {
	noFill();
	stroke(255);
	this.xInit = this.xNext;
	this.yInit = this.yNext;
	this.xNext += this.xDir;
	this.yNext += this.yDir;

	this.xNext = constrain(this.xNext, 0, width-this.size-3);
	this.yNext = constrain(this.yNext, 0, height-this.size - 19	);
	if(this.snakeLength == 0) {

	}else if(this.snakeLength === 1 && (this.xNext != this.xInit || this.yNext != this.yInit)) {
		
		this.tail[0] = [this.x, this.y];
	
		
	}else if(this.snakeLength > 1 && (this.xNext != this.xInit || this.yNext != this.yInit)) {

		for(let i = (this.snakeLength - 1); i > 0; i--) {
				this.tail[i] = this.tail[i-1];

		}

		this.tail[0] = [this.x, this.y];
	}else {
		gameOver = false;
	}

	this.x = this.xNext;
	this.y = this.yNext;


	noFill();


	if(keyCode == UP_ARROW && this.xInit !== this.xNext && this.snakeLength > 0){
		this.xDir = 0;
		this.yDir = -40;
	} else if(keyCode == DOWN_ARROW && this.xInit !== this.xNext && this.snakeLength > 0) {
		this.xDir = 0;
		this.yDir = 40;
	}else if(keyCode == RIGHT_ARROW && this.yInit !== this.yNext && this.snakeLength > 0) {
		this.xDir = 40;
		this.yDir = 0;

	}else if(keyCode == LEFT_ARROW && this.yInit !== this.yNext && this.snakeLength > 0) {
		this.xDir = -40;
		this.yDir = 0;
	}else if(keyCode == DOWN_ARROW && this.snakeLength == 0) {
		this.xDir = 0;
		this.yDir = 40;
	}else if(keyCode == RIGHT_ARROW && this.snakeLength == 0) {
		this.xDir = 40;
		this.yDir = 0;

	}else if(keyCode == LEFT_ARROW && this.snakeLength == 0) {
		this.xDir = -40;
		this.yDir = 0;
	}else if(keyCode == UP_ARROW && this.snakeLength == 0) {
		this.xDir = 0;
		this.yDir = -40;
	}


}

this.snakeDie = function() {

	for(let i = 0; i < this.tail.length; i++){
		for(let j = 0; j < this.tail.length; j++){
	
			if(this.tail[i][j] == this.x && this.tail[i][j+1] == this.y) {
				
				gameOver = false;
				
			}				
		}


	}
	
}

	this.len = 0;
	this.updateLength = function() {
		this.snakeLength++;
		this.tail[this.len] = [this.x, this.y];
		this.len++;
			
	
	}


}

function Food() {

		this.i;
		this.size = 40;
		this.column = width/this.size;
		this.row = height/this.size;

		this.xFood = floor((random(60, width-40)/this.size)) * this.size;
		this.yFood = floor((random(60, height-40)/this.size)) * this.size;
		this.getLocation = function() {
			this.xFood = floor((random(60, width - 80)/this.size)) * this.size;
			this.yFood = floor((random(60, height - 80)/this	.size)) * this.size;
			
		
		}

		this.displayFood = function() {
			if(gameOver){
				fill(250, 3, 0);
				ellipse(this.xFood + 20, this.yFood + 20, this.size, this.size);
				stroke(0);
				strokeWeight(2.5);
				line(this.xFood + 20, this.yFood + 1, this.xFood + 22, this.yFood - 10);

				// for(this.i = 0; this.i < this.column; this.i++){
				// 	stroke(255, 255, 255, 100);
				// 	line(this.i*this.size, 0, this.i*this.size, height);
				// }
				// for(this.i = 0; this.i < this.row; this.i++){
				// 	stroke(255, 255, 255, 100);
					
				// 	line(0, this.i*this.size, width, this.i*this.size);
				// }
			
		}

	}
}

