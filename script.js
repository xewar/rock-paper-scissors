const options = ['rock', 'paper', 'scissors']

// The computer chooses an option at random. Math floor rounds down
// so it's picking from position 0, 1, or 2 in the options array.
function computerPlay() {
    const chosen = Math.floor(Math.random() * options.length);
    return options[chosen]
}
let playerSelection;
let computerSelection;
let roundNumber = 0
let finalMessage = ''
let score = 0
let message = ''

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerPlay();
    let result;
        if (playerSelection == computerSelection){
        result = [0,'Tie, try again'];
    } else if (playerSelection == 'rock') {
        computerSelection == 'paper'?
        result = [-1,'You lose! Paper beats Rock']:
        result = [1,'Congrats! Rock beats Scissors'];
    } else if (playerSelection == 'scissors') {
        computerSelection == 'rock'?
        result = [-1, 'You lose! Rock beats Scissors'] :
        result = [1, 'Congrats! Scissors beats Paper'];
    } else if (playerSelection == 'paper') {
        computerSelection == 'scissors'?
        result = [-1,'You lose! Scissors beats Paper'] : 
        result = [1, 'Congrats! Paper beats Rock'];
    } 
    roundNumber += 1
    score += result[0]
    if (roundNumber === 5) {
        if (score > 0){
            finalMessage = 'You won.'
        }
        else if (score === 0) {
            finalMessage = 'It was a tie.'
        }
        else {
            finalMessage = 'You lost.'
        } 
        message = `${result[1]}. \n
        This is game over! ${finalMessage} The final score is ${score}.`;
    }
    else {
        message = `${result[1]}. Running Score is: ${score}.`
    }
    console.log(`message is "${message}""`)
    return message
    }


function clickToPlay(e){
    const round = document.querySelector('.round')
    const runningScore = document.querySelector('.runningScore')
    const log = document.querySelector('.message')

    playerSelection = `${e.target.id}`
    if (roundNumber < 5){
        log.textContent = playRound(playerSelection,);
        const updateScore = document.createElement('p');
        const updateRound = document.createElement('p');
        updateRound.textContent = roundNumber;
        updateScore.textContent = score;
        runningScore.appendChild(updateScore);
        round.appendChild(updateRound);
    }
}

const btns = document.querySelectorAll(`.btn`);
btns.forEach(btn => {btn.addEventListener('click', clickToPlay)});
const reset = document.querySelector(`#reset`);
reset.addEventListener('click',function(){location.reload()})
