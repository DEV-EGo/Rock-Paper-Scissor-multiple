// creating array of choices
var computerChoices = [
    "r",
    "p",
    "s"
];

// creating variables to hold the number of wins-losses-ties.
// they start at 0

var wins = 0;
var losses = 0;
var ties = 0;

// variables that hold the reference to the places in the html where we want to display
// things...

var directionsText = document.getElementById("directions_text");
var userchoiceText = document.getElementById("userchoice_text");
var copmuterchoiceText = document.getElementById("computerchoice_text");
var winsText= document.getElementById("wins_text");
var lossesText = document.getElementById("losses_text");
var tiesText = document.getElementById("ties_text");

// function runs when ever the user touches a key 

document.onkeyup = function(event) {

    // determines what key was pressed

    var userGuess = event.key;

    // Randomly chooses a choice from the array of options. 
    // T H I S IS THE COMPUTERS GUESS

    var comptuerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // the code below only runs once those specific keys are pressed

    if (
        (userGuess === "r") || (userGuess === "p") || (userGuess === "s")
    ) {
        // hides directions on the HTML
        directionsText.textContent = "";
    }
}