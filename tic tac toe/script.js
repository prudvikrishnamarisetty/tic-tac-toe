let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

document.querySelectorAll('.cell').forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (gameOver || cell.textContent !== '') return;
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    checkWinner();
    switchPlayer();
  });
});

document.getElementById('reset').addEventListener('click', () => {
  resetGame();
});

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
 for (const combination of winningCombinations) {
    if (
      gameBoard[combination[0]] === gameBoard[combination[1]] &&
      gameBoard[combination[1]] === gameBoard[combination[2]] &&
      gameBoard[combination[0]] !== ''
    ) {
      gameOver = true;
      document.getElementById('turn').textContent = `Player ${gameBoard[combination[0]]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameOver = true;
    document.getElementById('turn').textContent = 'It\'s a draw!';
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  if (!gameOver) {
    document.getElementById('turn').textContent = `Player ${currentPlayer}'s turn`;
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.textContent = '';
  });
  document.getElementById('turn').textContent = `Player X's turn`;
}


