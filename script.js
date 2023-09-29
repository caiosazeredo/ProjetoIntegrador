let currentPlayer = 'X';
let winner = '';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function handleClick(row, col) {
  if (!board[row][col] && !winner) {
    board[row][col] = currentPlayer;
    
    if (checkWinner()) {
      winner = currentPlayer;
      document.getElementById('winnerPlayer').textContent = winner;
      document.getElementById('winner').classList.remove('d-none');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    renderBoard();
  }
}

function checkWinner() {
  const lines = [
    ...board,
    ...board[0].map((_, col) => board.map(row => row[col])),
    board.map((_, i) => board[i][i]),
    board.map((_, i) => board[i][2 - i])
  ];

  return lines.some(line => line.every(cell => cell === currentPlayer));
}

function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  winner = '';
  document.getElementById('winner').classList.add('d-none');
  renderBoard();
}

function renderBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.querySelector(`table tr:nth-child(${i + 1}) td:nth-child(${j + 1})`).textContent = board[i][j];
    }
  }
}

renderBoard();
