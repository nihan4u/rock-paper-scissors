function getComputerChoice() {
    const choices = [`rock`, `paper`, `scissor`];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection ? playerSelection.toLowerCase() : '';
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return `Aw shucks, it's a tie!`;
    }

    if ((playerChoice === `rock` && computerChoice === `scissor`) ||
        (playerChoice === `paper` && computerChoice === `rock`) ||
        (playerChoice === `scissor` && computerChoice === `paper`)) {
        return `Whoopie, you win mate`;
    }

    if (![`rock`, `paper`, `scissor`].includes(playerChoice) || ![`rock`, `paper`, `scissor`].includes(computerChoice)) {
        return `Invalid input mate`;
    }

    return `Uh-oh, you lost mate`;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerInput = prompt(`Pick your poison: rock, paper, or scissor`);
        if (!playerInput) {
            console.log('Game canceled or invalid input.');
            return;
        }

        let roundResult = playRound(playerInput, getComputerChoice());
        if (roundResult.includes(`win`)) {
            playerScore++;
        } else if (roundResult.includes(`lost`)) {
            computerScore++;
        }
        console.log(`Round ${i}: ${roundResult}`);
    }

    console.log(`Final results:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);

    if (playerScore > computerScore) {
        return 'Ayo you won the game';
    } else if (computerScore > playerScore) {
        return 'Yikes the computer beat you';
    } else {
        return 'No-way, you tied with the bot';
    }
}
