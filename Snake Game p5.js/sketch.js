let snake;
let food;

function setup() {

	var canvas = createCanvas(windowWidth/2, windowHeight/1.02	);
	canvas.position((windowWidth - (windowWidth/2))/2 , (windowHeight - (windowHeight/1.02))/2);
	snake = new Snake();
	food = new Food();
	frameRate(8);
	console.log(width);
	console.log(height);

}

function draw() {

	background(0, 128, 0);
	snake.move();
	snake.snakeDie();
	snake.display();	
	if((food.xFood - snake.x === 0) && (food.yFood - snake.y === 0)){
		food.getLocation();
		snake.updateLength();
	}
	food.displayFood();
			
}