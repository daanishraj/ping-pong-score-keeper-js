// let numberOfGamesEl = document.getElementById("numberOfGames");
// console.log(numberOfGamesEl);

// let numberOfGames = parseInt(numberOfGamesEl.selectedIndex) + 5;
// console.log(numberOfGames);



function getNumberOfGamesValue() {
    // let el = document.getElementById("numberOfGames");
    // return parseInt(el.selectedIndex) + 5;

    const winningScoreSelect = document.getElementById("numberOfGames");
    let winningScore = winningScoreSelect.addEventListener('change', (e) => {
        //using the (e) here else this has global context of window since arrow function is being used
        return parseInt(e.value);
    })
    return winningScore;
}


let numberOfGames = getNumberOfGamesValue();

let playerButtons = document.querySelectorAll(".playerButton");
let p1Score = document.getElementById("p1Score");
let p2Score = document.getElementById("p2Score");



/*

//TODO: 
reset the game when numberOfGames is changed? - not required
change the class list of the winner and loser using css
refactor the code to use objects for p1 and p2
*/


//Update Score When Button for Player 1 is clicked
const btn1 = document.getElementById("button1");
btn1.addEventListener('click', function () {
    let p1Score = document.getElementById("p1Score");
    numberOfGames = getNumberOfGamesValue();
    p1Score.textContent = parseInt(p1Score.textContent) + 1;
    if (parseInt(p1Score.textContent) === numberOfGames) {
        for (let btn of playerButtons) {
            btn.disabled = true;
        }
    }

});

//Update Score When Button for Player 2 is clicked
const btn2 = document.getElementById("button2");
btn2.addEventListener('click', function () {
    let p2Score = document.getElementById("p2Score");
    numberOfGames = getNumberOfGamesValue();

    p2Score.textContent = parseInt(p2Score.textContent) + 1;
    if (parseInt(p2Score.textContent) === numberOfGames) {
        for (let btn of playerButtons) {
            btn.disabled = true;
        }
    }
});

//Reset Score when this button is clicked
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', function () {
    for (let btn of playerButtons) {
        btn.disabled = false;
    }
    p1Score.textContent = 0;
    console.log(p1Score.textContent)
    p2Score.textContent = 0;
    console.log(p2Score.textContent)


})


