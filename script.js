let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]              
];

const handleMove = (cellIndex) => {
  if (gameBoard[cellIndex] === '' && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    document.getElementById('gameBoard').children[cellIndex].innerText = currentPlayer;
    checkWin();
    checkDraw();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

const checkWin = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      document.getElementById('winnerMessage').innerText = `${currentPlayer} wins!`;
      gameActive = false;
      return;
    }
  }
};

const checkDraw = () => {
  if (!gameBoard.includes('') && gameActive) {
    document.getElementById('winnerMessage').innerText = "It's a draw!";
    gameActive = false;
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('winnerMessage').innerText = '';
  Array.from(document.getElementsByClassName('cell')).forEach(cell => {
    cell.innerText = '';
  });
};
