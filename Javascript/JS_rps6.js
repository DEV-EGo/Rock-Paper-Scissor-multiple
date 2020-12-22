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
var TextForChoice = document.getElementById("UsersChoice");
var TextForAiChoice = document.getElementById("ChoiceByComputer");
var TextForWins = document.getElementById("RecordOfWins");
var TextForLosses = document.getElementById("RecordOfLosses");
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

    // if we choose paper and AI chose rock, wins increases
    if((UGuess === "p") && (CompGuess === "r")){
        wins++;
    }

    // if we choose paper and trhe AI chose rock, losses increase
    if((UGuess === "p") && (CompGuess === "r")){
        losses++;
    }

    // if we chose the same choice as the computer , ties increases
    if(UGuess === CompGuess) {
        ties++
    }

    // hide the directions
    TextForDirections.textContent = "";

    // display the user and AI guess-wins-losses-ties
    TextForChoice.textContent = " tester chose:" + UGuess;
    TextForAiChoice.textContent = " AI chose:" + CompGuess;
    TextForWins.textContent = " Wins :" + wins;
    TextForLosses.textContent = "Lost :" + losses;
    TextForTies.textContent = " Ties :" + ties;
    }
};