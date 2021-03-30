let playerButtons = document.querySelectorAll(".playerButton");
let numberOfGamesToWin = 5; //min number of games
let numberOfGamesSelect = document.getElementById("numberOfGames");

function setButtons(value) {
    console.log(playerButtons);
    for (let button of playerButtons) {
        button.disabled = value;
    }

}

numberOfGamesSelect.addEventListener('change', (e) => {
    //using the (e) here else this has global context of window since arrow function is being used
    numberOfGamesToWin = parseInt(e.target.value);
    reset();
})


let player1 = {
    button: document.getElementById("button1"),
    score: document.getElementById("p1Score")
}

let player2 = {
    button: document.getElementById("button2"),
    score: document.getElementById("p2Score")
}


function updateScores(player, opponent) {
    player.score.textContent = parseInt(player.score.textContent) + 1;
    if (parseInt(player.score.textContent) > (numberOfGamesToWin)/2) {
        player.score.classList.add("winner");
        opponent.score.classList.add("loser");
        setButtons(true);
    }

}

function reset() {
    player1.score.textContent = 0;
    player2.score.textContent = 0;
    player1.score.classList.remove("winner", "loser");
    player2.score.classList.remove("winner", "loser");
    setButtons(false)
}

//Update Score When Button for Player 1 is clicked
player1.button.addEventListener('click', function () {
    updateScores(player1, player2);
})

//Update Score When Button for Player 2 is clicked
player2.button.addEventListener('click', function () {
    updateScores(player2, player1);
})


//Reset Score when this button is clicked
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', reset);


