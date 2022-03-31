/*
Author: Priyanka Chawla
Date:  20 March 2022
*/

var diceNumbers = ["1", "2", "3", "4", "5", "6"];
var round = 0,
    randomDice1Player, randomDice2Player, randomDice1Computer, randomDice2Computer, thisRoundScore, totalScore;
var playerdice1 = document.getElementById("playerdice1");
var playerdice2 = document.getElementById("playerdice2");
var computerdice1 = document.getElementById("computerdice1");
var computerdice2 = document.getElementById("computerdice2");
var thisRoundScorePlayer = document.getElementById("thisRoundScorePlayer");
var totalScorePlayer = document.getElementById("totalScorePlayer");
var thisRoundScoreComputer = document.getElementById("thisRoundScoreComputer");
var totalScoreComputer = document.getElementById("totalScoreComputer");
var newGameBtn = document.getElementById("newGameBtn");
var rollDiceBtn = document.getElementById("rollDiceBtn");
var result = document.getElementById("result");
newGameBtn.disabled = true;
rollDiceBtn.addEventListener('click', function() {
    newGameBtn.disabled = true;
    if (round < 3) {
        round++;
        randomDice1Player = diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
        playerdice1.innerHTML = "<img src='images/" + randomDice1Player + ".png' />";
        randomDice2Player = diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
        playerdice2.innerHTML = "<img src='images/" + randomDice2Player + ".png' />";

        randomDice1Computer = diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
        computerdice1.innerHTML = "<img src='images/" + randomDice1Computer + ".png' />";
        randomDice2Computer = diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
        computerdice2.innerHTML = "<img src='images/" + randomDice2Computer + ".png' />";

        if (randomDice1Player != "1" && randomDice2Player != "1" && (randomDice1Player != randomDice2Player)) {
            thisRoundScore = parseInt(randomDice1Player) + parseInt(randomDice2Player);
            thisRoundScorePlayer.innerHTML = thisRoundScore;
            totalScore = parseInt(totalScorePlayer.innerHTML);
            totalScorePlayer.innerHTML = totalScore + thisRoundScore;
        } else if (randomDice1Player != "1" && randomDice2Player != "1" && (randomDice1Player == randomDice2Player)) {
            thisRoundScore = parseInt(randomDice1Player) + parseInt(randomDice2Player);
            thisRoundScore = thisRoundScore * 2;
            thisRoundScorePlayer.innerHTML = thisRoundScore;
            totalScore = parseInt(totalScorePlayer.innerHTML);
            totalScorePlayer.innerHTML = totalScore + thisRoundScore;
        } else if (randomDice1Player == "1" || randomDice2Player == "1")
            thisRoundScorePlayer.innerHTML = 0;

        if (randomDice1Computer != "1" && randomDice2Computer != "1" && (randomDice1Computer != randomDice2Computer)) {
            var thisRoundScore = parseInt(randomDice1Computer) + parseInt(randomDice2Computer);
            thisRoundScoreComputer.innerHTML = thisRoundScore;
            var totalScore = parseInt(totalScoreComputer.innerHTML);
            totalScoreComputer.innerHTML = totalScore + thisRoundScore;
        } else if (randomDice1Computer != "1" && randomDice2Computer != "1" && (randomDice1Computer == randomDice2Computer)) {
            var thisRoundScore = parseInt(randomDice1Computer) + parseInt(randomDice2Computer);
            thisRoundScore = thisRoundScore * 2;
            thisRoundScoreComputer.innerHTML = thisRoundScore;
            var totalScore = parseInt(totalScoreComputer.innerHTML);
            totalScoreComputer.innerHTML = totalScore + thisRoundScore;
        } else if (randomDice1Computer == "1" || randomDice2Computer == "1")
            thisRoundScoreComputer.innerHTML = 0;
    }
    if (round == 3) {
        checkResult();
        newGameBtn.addEventListener('click', function() {
            resetGame();
        });
    }
});

function checkResult() {
    newGameBtn.disabled = false;
    rollDiceBtn.disabled = true;
    if (parseInt(totalScorePlayer.innerHTML) > parseInt(totalScoreComputer.innerHTML))
        result.innerHTML = "<h3>Congratulations! You WIN this game.</h3>";
    else if (parseInt(totalScorePlayer.innerHTML) < parseInt(totalScoreComputer.innerHTML))
        result.innerHTML = "<h3>You Lost. Better Luck Next Time!</h3>";
    else if (parseInt(totalScorePlayer.innerHTML) == parseInt(totalScoreComputer.innerHTML))
        result.innerHTML = "<h3>It's a Tie!</h3>";
}

function resetGame() {
    round = 0;
    newGameBtn.disabled = true;
    rollDiceBtn.disabled = false;
    result.innerHTML = "";
    playerdice1.innerHTML = "";
    playerdice2.innerHTML = "";
    computerdice1.innerHTML = "";
    computerdice2.innerHTML = "";
    thisRoundScorePlayer.innerHTML = 0;
    totalScorePlayer.innerHTML = 0;
    thisRoundScoreComputer.innerHTML = 0;
    totalScoreComputer.innerHTML = 0;
}