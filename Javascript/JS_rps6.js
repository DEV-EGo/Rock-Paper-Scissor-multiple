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