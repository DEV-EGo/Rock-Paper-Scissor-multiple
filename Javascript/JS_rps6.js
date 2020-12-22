// creating array of choices
var ChoiceToChooseFrom = [
    "r",
    "p",
    "s"
];

// creating variables to hold record of wins-losses-ties
var wins = 0;
var losses = 0;
var ties = 0;

// variables that will target the htmnl that will display info

var TextForDirections = document.getElementById("Direction-text");
var TextForChoice = document.getElementById("UserChoice");
var TextForAiChoice = document.getElementById("ChoiceByComputer");
var TextForWins = document.getElementById("RecordOfWins");
var TextForLosses = document.getElementById("RecordOFLosses");
var TextForTies = document.getElementById("RecordOfTies");

// function will run whenever user presses a target key

document.onkeyup = function (event) {
    // determines what key was used
    var UGuess = event.key;

    // random chooses a choice from the option array. this is the computer guess

    var CompGuess = ChoiceToChooseFrom[Math.floor(Math.random() * ChoiceToChooseFrom.length)];

    // code will execute guess for each key r,p,s

    if((UGuess==="r") || (UGuess === "p") || (UGuess === "s")){
    
    //  if we choose Rock & AI guess  scissors , the win variable increases
        if((UGuess === "r") && (CompGuess === "s")){
            wins++;
        }
    
    // if we choose rock & AI choose paper, losses will increase
        if((UGuess === "r") && (CompGuess === "p")){
            losses++;
        }

    // if we choose scissors & AI chose rock, losses increases
    if((UGuess === "s") && (CompGuess === "r")){
        losses++;
    }

    // if we choose scissors and AI chose rock, wins increase
    if((UGuess ==="s") && (CompGuess === "r")){
        wins++;
    }
    }
}