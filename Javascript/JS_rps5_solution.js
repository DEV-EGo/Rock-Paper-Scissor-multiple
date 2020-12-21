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