const card = document.querySelector('.card');
const startGame = document.querySelector('.btn-start')
const modal = document.querySelector('.modal')
const remodal = document.querySelector('.re-modal')
const startGameModal = document.querySelector('.start-game')
const restartGameModal = document.querySelector('.restart-game')
const restartBtn = document.querySelector('.btn-restart')
const highScoreElement = document.querySelector('#high-score')
const scoreElement = document.querySelector('#score')
const timeElement = document.querySelector('#time')



const width = 50;
const height = 50;

let direction = "right"
let intervalId = null
let timerInterval = null

let highScore = Number(localStorage.getItem("highscore")) || 0;
highScoreElement.innerText = highScore;
let score = 0
let time = `00-00`

const row = Math.floor(card.clientHeight / height);
const col = Math.floor(card.clientWidth / width);
console.log(row, col)

let blocks = {}
let snake = [{ x: 4, y: 3 }]
let food;


for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        const block = document.createElement('div');
        block.classList.add('block');
        card.appendChild(block)
        blocks[`${i}-${j}`] = block
    }
}

function generateFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * row),
            y: Math.floor(Math.random() * col)
        };
    } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
    return newFood;
}
food = generateFood();


function render() {

    let head = null;
    blocks[`${food.x}-${food.y}`].classList.add('food')


    if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    }
    else if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    }
    else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y }
    }
    else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y }
    }

    if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
    remodal.style.display = "block";
    clearInterval(intervalId);
    clearInterval(timerInterval);
    return;
}


    if (food.x === head.x && food.y === head.y) {
        blocks[`${food.x}-${food.y}`].classList.remove('food')
        food = generateFood()
        blocks[`${food.x}-${food.y}`].classList.add('food')
        snake.unshift(head)
        score = score + 10;
        scoreElement.innerText = score


        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highscore', highScore)
            highScoreElement.innerText = highScore
        }
    }
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })


    if (head.x < 0 || head.x >= row || head.y < 0 || head.y >= col) {
        remodal.style.display = "block"
        clearInterval(intervalId)
        clearInterval(timerInterval)
        
        return
    }
    snake.unshift(head)
    snake.pop()

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add('fill')
    })
}


addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    else if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    else if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    else if (event.key === "ArrowRight" && direction !== "left") direction = "right";
});


startGame.addEventListener('click', () => {
    modal.style.display = "none"
    intervalId = setInterval(() => {
        render()
    }, 100)
    timerInterval = setInterval(() => {
        let [min, sec] = time.split('-').map(Number);
         sec++;
    if (sec === 60) {
        min++;
        sec = 0;
    }

        time = `${min}-${sec}`;
        timeElement.innerText = time

    }, 1000)
})

restartBtn.addEventListener('click', () => {

    clearInterval(intervalId);
    clearInterval(timerInterval);

    snake.forEach(seg => {
        blocks[`${seg.x}-${seg.y}`].classList.remove('fill');
    });
    blocks[`${food.x}-${food.y}`].classList.remove('food');

    direction = "right";
    score = 0;
    scoreElement.innerText = "0";

    time = "00-00";
    timeElement.innerText = time;

    snake = [{ x: 4, y: 3 }];
    food = generateFood();

    remodal.style.display = "none";

    intervalId = setInterval(render, 120);

    timerInterval = setInterval(() => {
        let [min, sec] = time.split('-').map(Number);
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        time = `${String(min).padStart(2, '0')}-${String(sec).padStart(2, '0')}`;
        timeElement.innerText = time;
    }, 1000);
});
