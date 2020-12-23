// array storing variables
var PickFromThis = 
[
    "r",
    "p",
    "s"
];

// variables that will hold the scores
var wins = 0;
var losses = 0;
var ties = 0;

// variables targeting the point of reference in the html
var TargetDirections = document.getElementById("Directions");
var TargetPlayersChoice = document.getElementById("Players_Choice");
var TargetAIChoice = document.getElementById("Comp_Choice");
var TargetWins = document.getElementById("Win");
var TargetLosses = document.getElementById("Losses");
var TargetTies = document.getElementById("Ties");

// Function runs when the user presses a key

document.onkeyup - function (event) {
    // determines what key is being pressed
    var UserGuess = event.key;

    // Randomizing a choice from the array option
    var CompGuess = PickFromThis[Math.floor(Math.random() * PickFromThis.length)];

    // if else statement 
    if((UserGuess === "r") || (UserGuess === "p") || (UserGuess === "s")){
        
        if (
            (UserGuess === "r" && CompGuess === "s") || 
            (UserGuess === "s" && CompGuess === "p") ||
            (UserGuess === "p" && CompGuess === "r")
            ) {
            wins++;
        } else if (UserGuess === CompGuess) {
            ties++;
        } else {
            losses++;
        }

        // hide the directions
        TargetDirections.textContent = "";

        // displaying the user and computer stats

        TargetPlayersChoice.textContent = "you chose" + UserGuess;
        TargetAIChoice.textContent = " computer chose" + CompGuess;
        TargetWins.textContent = " Win:" + wins;
        TargetLosses.textContent = " Losses:" + losses;
        TargetTies.textContent = " Ties:" + ties;
    }
};