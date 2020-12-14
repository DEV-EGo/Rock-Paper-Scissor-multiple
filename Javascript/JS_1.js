// array that will hold the options for user to choose
var C_Choices = [
    'r',
    'p',
    's'
];

//function runs when ever a key is pressed by the user
document.onkeyup = function (event) {

    // Determines what key is being used
    var GuessByUser = event.key;

    //Chooses a choice from the options array, this will be computer guessed
    var ComputerGuess = C_Choices[Math.floor(Math.random() * C_Choices.length)];

    //These lines of code will run ONLY if these keys are pressed 'r' or 'p' or 's'
    if((GuessByUser === 'r') || (GuessByUser === 'p') || (GuessByUser === 's')) {

        // ALERT  the User guess and computer guess
        alert(" User Guessed : " + GuessByUser);
        alert(" Computer Guessed : " + ComputerGuess);
    }
}