let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    lose: 0,
    tie: 0
};

updateScore();

function PlayerMove(player_choice) {
    let random_choice = ComputerMove();
    let result = "";

    if (player_choice === 'scissor') {
        if (random_choice === 'paper') {
            result = 'You win!';
        } else if (random_choice === 'scissor') {
            result = 'Tie!';
        } else {
            result = 'Computer wins!';
        }
    } else if (player_choice === 'paper') {
        if (random_choice === 'paper') {
            result = 'Tie!';
        } else if (random_choice === 'scissor') {
            result = 'Computer wins!';
        } else {
            result = 'You win!';
        }
    } else {
        if (random_choice === 'paper') {
            result = 'Computer wins!';
        } else if (random_choice === 'scissor') {
            result = 'You win!';
        } else {
            result = 'Tie!';
        }
    }

    if (result === 'You win!') {
        score.wins++;
    } else if (result === 'Computer wins!') {
        score.lose++;
    } else {
        score.tie++;
    }

    localStorage.setItem("score", JSON.stringify(score));
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.choice').innerHTML = `You 
        <img class="symbol" src="/rock-paper-scissor-game/images/${player_choice}.png" alt="">
        <img class="symbol" src="/rock-paper-scissor-game/images/${random_choice}.png" alt="">
        Computer`;

    updateScore();
}

function updateScore() {
    document.querySelector('.display').innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

function ComputerMove() {
    const random_number = Math.random();
    if (random_number < 1 / 3) {
        return "rock";
    } else if (random_number < 2 / 3) {
        return "paper";
    } else {
        return "scissor";
    }
}

function resetScore() {
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    updateScore();
    localStorage.removeItem('score');
}
