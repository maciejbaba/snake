const gameBoard = document.getElementById("game-board")

const SIZE_OF_BOARD = 600 * 600
const SIZE_OF_BLOCK = 40 * 40
const numberOfBlocks = SIZE_OF_BOARD / SIZE_OF_BLOCK
const widthInBlocks = Math.sqrt(numberOfBlocks)
const heightInBlocks = Math.sqrt(numberOfBlocks)

createGameBoard()

function createGameBoard() {
  gameBoard.style.setProperty("--board-width", widthInBlocks)
  gameBoard.style.setProperty("--board-height", heightInBlocks)
  for (let i = 0; i < numberOfBlocks; i++) {
    let block = document.createElement("div")
    block.id = String(Math.floor(i / heightInBlocks)) + " " + String(i % widthInBlocks)
    gameBoard.appendChild(block).className = "board-block"
  }
}

function createSnake() {

}