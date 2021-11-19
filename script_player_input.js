const options = ['rock', 'paper', 'scissors']

// The computer chooses an option at random. Math floor rounds down
// so it's picking from position 0, 1, or 2 in the options array.
function computerPlay() {
    const chosen = Math.floor(Math.random() * options.length);
    return options[chosen]
}

let playerSelection;
let computerSelection;


function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerPlay();
    let result;
    // If someone types something that isn't a variant of rock, paper, or scissors,
    // they need to try again
            // while (!options.includes(playerSelection)){
            //     alert('Please enter a valid value - either Rock, Paper, or Scissors');
            //     playerSelection = prompt("Rock, Paper, or Scissors?");
            //     playerSelection = playerSelection.toLowerCase();
            //     }
    // Otherwise, compare their selection to the computer's and
    // return an array with the value and a message
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
    console.log(result)
    return result
    }


function game(){
    let score = 0
    const container = document.querySelector('#container')
    const div = document.createElement('div')
    div.setAttribute('id','score')
    container.appendChild(div)
    for (let i = 0; i<5;i++){
        let winner = playRound(playerSelection, computerSelection);
        let val = winner[0];
        let message = winner[1];
        score += val;
        div.textContent = `Running Score is: ${score}`;
        container.appendChild(div);
        console.log(`Round ${i+1}: ${message}\nScore is ${score}`)
    }
    return score
}
function clickToPlay(e){
    playerSelection = `${e.target.id}`
    game()
}
// function clickToPlay(e){
//     choice = `${e.target.id}`
//     return choice
// }


const btns = document.querySelectorAll(`.btn`);
btns.forEach(btn => {btn.addEventListener('click', clickToPlay)});

// console.log(clickToPlay())
// console.log(game())
