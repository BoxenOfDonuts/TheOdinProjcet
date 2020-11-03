/// new stuff for buttons
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const scoreboard = document.querySelector(".score");
const pscore = document.querySelector("#player-score");
const cscore = document.querySelector("#computer-score");

const buttons = document.querySelectorAll(".choice-button");
buttons.forEach((button) => button.addEventListener("click", game));

function updateScore() {
  pscore.textContent = `Player: ${playerScore}`;
  cscore.textContent = `Computer: ${computerScore}`;
  scoreboard.appendChild(pscore);
  scoreboard.appendChild(cscore);
}
/// end button stuff

function game(e) {
  const playerSelection = e.currentTarget.id;

  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);

  if (result) {
    playerScore++;
  } else if (isNaN(result)) {
    roundsPlayed--;
    console.log("Tie!");
  } else computerScore++;

  updateScore();

  if (roundsPlayed >= 5) {
    if (playerScore > computerScore) {
      alert("Player Wins!");
    } else {
      alert("Computer Wins!");
    }
  } else {
    roundsPlayed++;
  }

  console.log(`player score: ${playerScore}\ncomputer score: ${computerScore}`);
}

function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  let playerSelectionList = ["rock", "paper", "scissors"];

  return playerSelectionList[random];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return NaN;
  }
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        return false;
      } else {
        return true;
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        return false;
      } else {
        return true;
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        return false;
      } else {
        return true;
      }
      break;
  }
}

//
//button.addEventListener('click', (e) => {
//    console.log(e);
//})

//console.log(game());

/*

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)


    if(!audio) return; // stop the function from running
    audio.currentTime = 0; // rewind to the start 
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // kip if its not a transform
  console.log(e.propertyName)
  this.classList.remove('playing');
}


  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)

*/
