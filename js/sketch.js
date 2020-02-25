const fr = 60;
const delay = 5000 / fr;
const cellSize = 20;

// let game;

function setup() {
    createCanvas(700, 700);
    frameRate(fr);

    // game = new Game(width / cellSize, height / cellSize, cellSize);
    // startGame();
}

function draw() {
    // background(color(0,0,0));
    // game.show();
}

async function startGame() {
    let startingTime = millis();

    while(!game.ended) {
        await sleep(delay);
        game.nextFrame();
        game.show();
    }

    let endingTime = millis();
    
    let result = {
        score: game.score,
        time: (endingTime - startingTime) / 1000
    }

    console.log(result);
}

async function sleep(ms) {
    if (ms === 0) return;
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// function keyPressed() {
//     if(keyCode === 65 || keyCode === 37) { // pressed a or left arrow
//         game.takeInput("left");
//     } else if(keyCode === 87 || keyCode === 38) { // pressed w or up arrow
//         game.takeInput("up");
//     } else if(keyCode === 68 || keyCode === 39) { // pressed d or right arrow
//         game.takeInput("right");
//     } else if(keyCode === 83 || keyCode === 40) { // pressed s or down arrow
//         game.takeInput("down");
//     }

//     return false;
// }