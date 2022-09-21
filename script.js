const gameBoard = document.getElementById("game-board")

const SIZE_OF_BOARD = 600 * 600
const SIZE_OF_BLOCK = 40 * 40
const numberOfBlocks = SIZE_OF_BOARD / SIZE_OF_BLOCK
const widthInBlocks = Math.sqrt(numberOfBlocks)
const heightInBlocks = Math.sqrt(numberOfBlocks)

let isApple = false

document.addEventListener("keydown", keyPushed)

let snake = [{
  x:7,
  y:7
},{
  x:6,
  y:7
},{
  x:5,
  y:7
}]

createGameBoard()

function keyPushed(event) {
  switch(event) {
    case 37:
      
  }
}

function createGameBoard() {
  gameBoard.style.setProperty("--board-width", widthInBlocks)
  gameBoard.style.setProperty("--board-height", heightInBlocks)
  for (let i = 0; i < numberOfBlocks; i++) {
    let block = document.createElement("div")
    block.id = String(Math.floor(i / heightInBlocks)) + " " + String(i % widthInBlocks)
    gameBoard.appendChild(block).className = "board-block"
  }
}

function createApple() {
  if (isApple) return
  let x = Math.floor(Math.random() * widthInBlocks)
  let y = Math.floor(Math.random() * heightInBlocks)

  let appleBlockId = x + " " + y
  let appleBlock = document.getElementById(appleBlockId)
  if (appleBlock.style.backgroundColor == "white") {
    // add one to snake if renders inside
  }
  appleBlock.style.backgroundColor = "red"
}

drawSnake()
createApple()

function createSnake() {
  snake.forEach(bodyPart => {
    let idOfBlock = bodyPart.y + " " + bodyPart.x
    let blockUnderBodyPart = document.getElementById(idOfBlock)
    blockUnderBodyPart.style.backgroundColor = "white"
  })
}