const defRangeNumber = 8;
const defPrize = 100;
const maxAttempt = 3;
const utilPlus = 4;
const utilMultDiv = 2;
const utilMinus = 1;
let randomNumber, guessNumber, levelPrize, gamePrize, attemptsLeft, userPrize, levelRangeNumber;
let gamePlay = confirm('Do you want to play a game?');
let startGame = true;

if (!gamePlay) {
  alert('You did not become a billionaire, but can.' );
}

while (gamePlay) {
  if (startGame) {
    levelPrize = defPrize;
    gamePrize = levelPrize;
    attemptsLeft = maxAttempt;
    levelRangeNumber = defRangeNumber;
    userPrize = 0;
    randomNumber = Math.round(Math.random() * defRangeNumber);
    console.log(randomNumber);
    startGame = false;
  }
  
  guessNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${levelRangeNumber}
  Attempts left: ${attemptsLeft}
  Total prize: ${userPrize}$
  Possible prize on current attempt: ${gamePrize}$`));

  if (guessNumber === randomNumber) {
    userPrize += gamePrize;
    if (confirm(`Congratulation, you won!   Your prize is: ${userPrize}$. Do you want to continue?`)) {
      levelPrize *= utilMultDiv;
      gamePrize = levelPrize;
      levelRangeNumber += utilPlus; 
      randomNumber = Math.round(Math.random() * levelRangeNumber);
      console.log(randomNumber);
    } else {
      attemptsLeft = 0;
    } 

  } else {
    attemptsLeft -= utilMinus;
    gamePrize /= utilMultDiv;
  }

  if (attemptsLeft === 0) {
    alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
    startGame = confirm('Do you want to play a game again?');
    if (!startGame) {
      break;
    }
  }
  
} 