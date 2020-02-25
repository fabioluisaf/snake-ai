class Game {
    constructor(sizeX, sizeY, cellSize) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.cellSize = cellSize;
        this.food = null;
        this.score = 0;
        this.ended = false;
        this.nextInput = null;

        let snakePos = createVector(Math.floor(sizeX / 2), Math.floor(sizeY / 2));
        this.snake = new Snake(snakePos);

        this.updateEntities();
    }

    updateEntities() {
        if(this.isThereFood()) {
            if(this.snake.body[0].x === this.food.position.x && this.snake.body[0].y === this.food.position.y) {
                this.snake.eat();
                this.food = this.generateFood();
                this.score++;
            }
        } else {
            this.food = this.generateFood();
        }
    }

    isThereFood() {
        return !(this.food === null);
    }

    generateFood() {
        let newFoodPos = createVector(this.snake.body[0].x, this.snake.body[0].y);

        while(this.foodColidesWithSnake(newFoodPos)) {
            newFoodPos.x = Math.floor(Math.random() * (this.sizeX - 1));
            newFoodPos.y = Math.floor(Math.random() * (this.sizeY - 1));
        }

        return new Food(newFoodPos);
    }

    foodColidesWithSnake(foodPosition) {
        for(let pos of this.snake.body) {
            if(foodPosition.x === pos.x && foodPosition.y === pos.y) {
                return true;
            }
        }
        
        return false;
    }

    nextFrame() {
        this.applyInput();
        this.snake.move();
        
        this.checkSnakeCollision();
        this.updateEntities();
    }

    checkSnakeCollision() {
        let head = this.snake.body[0];

        if(head.x >= this.sizeX || head.y >= this.sizeY || head.x < 0 || head.y < 0) {
            this.ended = true;
            return;
        }

        for(let i = 1; i < this.snake.body.length; i++) {
            let currentPart = this.snake.body[i];

            if(head.x === currentPart.x && head.y === currentPart.y) {
                this.ended = true;
                return;
            }
        }
    }

    takeInput(input) {
        this.nextInput = input.toLowerCase();
    }

    applyInput() {
        if(this.nextInput) {
            switch(this.nextInput) {
                case "up":
                    this.snake.setMoveDirection(false, true);
                    break;
                case "down":
                    this.snake.setMoveDirection(false, false);
                    break;
                case "left":
                    this.snake.setMoveDirection(true, false);
                    break;
                case "right":
                    this.snake.setMoveDirection(true, true);
                    break;
            }

            this.nextInput = null;
        } 
    }

    show() {
        this.snake.show(this.cellSize, color(0, 255, 0));
        this.food.show(this.cellSize, color(255, 0, 0));
    }

    getEntities() {
        let entities = {
            snake: this.snake,
            food: this.food
        }

        return entities;
    }
}