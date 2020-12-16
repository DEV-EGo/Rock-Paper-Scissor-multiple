// creating an array that list out all of the options 
var PickaWeapon = [
    "r",
    "s",
    "p"
];

// creating variables that hold references to the places in the html we 
// we want to display

var ChoiceofText = document.getElementById("UserChoice-text");
var ComputerChoiceText = document.getElementById("ComputerChoice-test");

// This function will run whenever the user presses a key

document.onkeyup = function ( event ) {

    // determines which key was pressed

    var GuessUser = event.key;

    // randomly choose a choice from the options array, this is the computer's guess.

    var ComputerGuess = PickaWeapon[Math.floor(Math.random() * PickaWeapon.length)];

    // this code block will run only if user presse "r","p","s"

    if((GuessUser === "r") || (GuessUser === "p") || (GuessUser === "s")) {

        // display the user and computer guess
    
        ChoiceofText.textContent = "you chose  " + GuessUser;
        ComputerChoiceText.textContent = "the computer chose:" + ComputerGuess;
    }
};
