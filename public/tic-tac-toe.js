/* eslint-disable @typescript-eslint/no-unused-vars */
function startTicTacToe() {
    const container = document.querySelector('.container');
    container.innerHTML = `
      <h1>Tic Tac Toe</h1>
      <div id="board" style="display: grid; grid-template-columns: repeat(3, 100px); gap: 5px;">
        ${Array(9).fill().map((_, i) => `<div class="cell" data-index="${i}" style="width: 100px; height: 100px; background-color: #ddd; display: flex; justify-content: center; align-items: center; font-size: 40px; cursor: pointer;"></div>`).join('')}
      </div>
      <p id="status"></p>
      <button onclick="resetGame()">Reset Game</button>
    `;
  
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    document.querySelectorAll('.cell').forEach(cell => {
      cell.addEventListener('click', () => handleCellClick(cell));
    });
  
    function handleCellClick(cell) {
      const index = parseInt(cell.getAttribute('data-index'));
  
      if (gameState[index] !== '' || !gameActive) return;
  
      gameState[index] = currentPlayer;
      cell.textContent = currentPlayer;
  
      checkForWin();
      checkForDraw();
  
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  
    function checkForWin() {
      for (let condition of winningConditions) {
        let [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
          gameActive = false;
          document.getElementById('status').textContent = `Player ${gameState[a]} wins!`;
          return;
        }
      }
    }
  
    function checkForDraw() {
      if (!gameState.includes('') && gameActive) {
        gameActive = false;
        document.getElementById('status').textContent = "It's a draw!";
      }
    }
  }
  
  function resetGame() {
    startTicTacToe();
  }
  
  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, err => {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  
  