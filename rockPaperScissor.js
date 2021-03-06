const getUserChoice = userInput => {
  userInput.toLowerCase();
  if(userInput === 'rock' || 'paper' || 'scissors' || 'bomb'){
    return userInput;
  }
  else{
    console.log('Error!!!');
  }
}

// console.log(getUserChoice('Paper')); // should print 'paper'
// console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`

const getComputerChoice = () => {
const randomNumber = (Math.floor(Math.random() * 3));
switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
  return 'scissor';
}
}


const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game was a tie!';
  }
 if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if(userChoice === 'bomb'){
  return "Congratulations! You won!";
}
}

// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
}
playGame();
