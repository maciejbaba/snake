window.onload = function() {
  canvas = document.getElementById("game-board")
  context = canvas.getContext("2d")
  document.addEventListener("keydown", keyPush)
  setInterval(game,1000 / 10)
}

let playerX = 10
let playerY = 10
let gridSize = 20
let tileCount = 20
let appleX = 15
let appleY = 15
let xVelocity = 0
let yVelocity = 0
let trail = []
let tail = 5

function game() {
  playerX += xVelocity
  playerY += yVelocity

  if(playerX < 0) playerX = tileCount - 1
  if(playerX > tileCount - 1) playerX = 0
  if(playerY < 0) playerY = tileCount - 1
  if(playerY > tileCount - 1) playerY = 0

  drawCanvas()
  drawSnake()

  trail.push({x: playerX, y:playerY})
  while(trail.length > tail) {
    trail.shift()
  }

  if (appleX == playerX && appleY == playerY) {
    eatAppleAndCreateNewOne()
  }
  drawApple()  
}

function drawCanvas() {
  context.fillStyle = "black"
  context.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnake() {
  context.fillStyle = "lime"
  for (let i = 0; i < trail.length; i++) {
    context.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2)
    if (trail[i].x == playerX && trail[i].y == [playerY]) {
      tail = 5
    }
  }
}

function eatAppleAndCreateNewOne() {
  tail++
  appleX = Math.floor(Math.random() * tileCount)
  appleY = Math.floor(Math.random() * tileCount)
}

function drawApple() {
  context.fillStyle = "red"
  context.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2)
}

function keyPush(event) {
  switch(event.keyCode) {
    case 37:
      xVelocity = -1
      yVelocity = 0
      break
    case 38:
      xVelocity = 0
      yVelocity = -1
      break
    case 39:
      xVelocity = 1
      yVelocity = 0
      break
    case 40:
      xVelocity = 0
      yVelocity = 1
      break
  }
}