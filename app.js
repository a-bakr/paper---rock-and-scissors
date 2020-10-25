const resetTheGameBtn = document.getElementById('resetTheGameBtn');
const paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');

const case_1 = document.getElementById('case_1');
const case_2 = document.getElementById('case_2');
const case_3 = document.getElementById('case_3');
const case_4 = document.getElementById('case_4');
const case_5 = document.getElementById('case_5');
const case_6 = document.getElementById('case_6');
const case_7 = document.getElementById('case_7');
const case_8 = document.getElementById('case_8');
const case_9 = document.getElementById('case_9');

const machinaChoiceList = ['PAPER', 'ROCK', 'SCISSSORS'];
const paper = machinaChoiceList[0];
const rock = machinaChoiceList[1];
const scissors = machinaChoiceList[2];

let gameIsRuning = false;

console.log(paper, rock, scissors);

case_1.style.display = 'none';
case_2.style.display = 'none';
case_3.style.display = 'none';
case_4.style.display = 'none';
case_5.style.display = 'none';
case_6.style.display = 'none';
case_7.style.display = 'none';
case_8.style.display = 'none';
case_9.style.display = 'none';

getMachineChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return machinaChoiceList[randomNum];
};

const getWiner = (ueserSelection) => {
  if (gameIsRuning) {
    resetTheGame();
    gameIsRuning = false;
  }

  gameIsRuning = true;
  const machinaChoice = getMachineChoice();

  if (ueserSelection === paper && machinaChoice === paper) {
    case_9.style.display = '';
  } else if (ueserSelection === rock && machinaChoice === rock) {
    case_8.style.display = '';
  } else if (ueserSelection === scissors && machinaChoice === scissors) {
    case_7.style.display = '';
  } else if (ueserSelection === paper && machinaChoice === rock) {
    case_1.style.display = '';
  } else if (ueserSelection === rock && machinaChoice === paper) {
    case_2.style.display = '';
  } else if (ueserSelection === paper && machinaChoice === scissors) {
    case_3.style.display = '';
  } else if (ueserSelection === scissors && machinaChoice === paper) {
    case_4.style.display = '';
  } else if (ueserSelection === scissors && machinaChoice === rock) {
    case_5.style.display = '';
  } else if (ueserSelection === rock && machinaChoice === scissors) {
    case_6.style.display = '';
  }
};

const resetTheGame = () => {
  case_1.style.display = 'none';
  case_2.style.display = 'none';
  case_3.style.display = 'none';
  case_4.style.display = 'none';
  case_5.style.display = 'none';
  case_6.style.display = 'none';
  case_7.style.display = 'none';
  case_8.style.display = 'none';
  case_9.style.display = 'none';
};

resetTheGameBtn.addEventListener('click', resetTheGame);
paperBtn.addEventListener('click', () => getWiner('PAPER'));
rockBtn.addEventListener('click', () => getWiner('ROCK'));
scissorsBtn.addEventListener('click', () => getWiner('SCISSSORS'));
