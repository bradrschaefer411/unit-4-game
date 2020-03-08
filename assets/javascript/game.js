//id's in html to link to js:
//<div id="winningScore">Score to Match:</div>
//<div id="winsTotal">Wins:</p>
//<div id="lossesTotal">Losses:</p>
//<div id="ruby">Ruby</div>
//<div id="diamond">Diamond</div>
//<div id="gold">Gold</div>
//<div id="emerald">Emerald</div>
//<div id="totalScore">Your Total Score Is:</div>
//<div id="scoreDisplay">" "</div>

//pseudocode:
//At start of game, there are: 4 minerals displayed on page, 
//Each representing a different point total to add to user score.
//player will click the gems in order to raise their score in hopes of
//matching the winningScore. If player matches their score (totalScore) to
//the winningScore, wins + 1. If player's totalScore goes over winningScore
//total, losses + 1.  Game resets after win/loss is determined, new winningScore
//picked, each gem takes on a different/random value.

//variables to use:
var winsTotal = 0;
var lossesTotal = 0;
var winningScore = 0;
var totalScore = 0;
var rubyPoints = " ";
var diamondPoints = " ";
var goldPoints = " ";
var emeraldPoints = " ";

//calls start Game function
startGame();

//function for starting game: display random winningScore, sets all player totals to 0, chooses
//random points for gems to be added to scoreDisplay
function startGame() {
    winningScore = generateWinningScore(75, 150);
    updateWinningScore();
    updateTotalScore();
    updateWinsTotal();
    updateLossesTotal();
    mineralPoints(1, 12);
    totalScore = 0;
}

//function to generate winningScore 
function generateWinningScore(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
//function to display winningScore
function updateWinningScore() {
    document.getElementById("winningScore").innerHTML = "Score to Match: " + winningScore;
}
//function to display current player score (scoreDisplay)
function updateTotalScore() {
    document.getElementById("totalScore").innerHTML = " " + totalScore;
}
//function to display winsTotal
function updateWinsTotal() {
    document.getElementById("winsTotal").innerHTML = "Wins: " + winsTotal;
}
//function to display lossesTotal
function updateLossesTotal() {
    document.getElementById("lossesTotal").innerHTML = "Losses: " + lossesTotal;
}
function compare() {
    updateTotalScore();
    if (totalScore === winningScore) {
        winsTotal++;
        updateWinsTotal();
        alert("You win!");
        startGame();
        
    }
    if (totalScore > winningScore) {
        lossesTotal++;
        updateLossesTotal();
        alert("You lose!");
        startGame();
    }
}

//functions to set up values of minerals, random values from 1 to 12 to each mineral
function mineralPoints(min, max) {
    rubyPoints = Math.floor(Math.random() * (max - min + 1) + min);
    diamondPoints = Math.floor(Math.random() * (max - min + 1) + min);
    goldPoints = Math.floor(Math.random() * (max - min + 1) + min);
    emeraldPoints = Math.floor(Math.random() * (max - min + 1) + min);
    //logs each gem value to console during each round
    console.log("Ruby: " + rubyPoints + ", Diamond: " + diamondPoints + ", Gold: " + goldPoints + ", Emerald: " + emeraldPoints);
}

//jquery for on click events/button clicks
$(document).ready(function() {
    $("#ruby").on("click", function()  {
        totalScore = totalScore + rubyPoints;
        compare();
    });
    $("#diamond").on("click", function() {
        totalScore = totalScore + diamondPoints;
        compare();
    });
    $("#gold").on("click", function() {
        totalScore = totalScore + goldPoints;
        compare();
    });
    $("#emerald").on("click", function() {
        totalScore = totalScore + emeraldPoints;
        compare();
    });
});s