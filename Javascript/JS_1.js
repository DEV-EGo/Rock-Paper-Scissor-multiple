// array that will hold the options for user to choose
// var C_Choices = [
//     'r',
//     'p',
//     's'
// ];

//function runs when ever a key is pressed by the user
// document.onkeyup = function (event) {

    // Determines what key is being used
    // var GuessByUser = event.key;

    //Chooses a choice from the options array, this will be computer guessed
    // var ComputerGuess = C_Choices[Math.floor(Math.random() * C_Choices.length)];

    //These lines of code will run ONLY if these keys are pressed 'r' or 'p' or 's'
    // if((GuessByUser === 'r') || (GuessByUser === 'p') || (GuessByUser === 's')) {

        // ALERT  the User guess and computer guess
//         alert(" User Guessed : " + GuessByUser);
//         alert(" Computer Guessed : " + ComputerGuess);
//     }
// }

// =================== P R A C T I C E ========================

// var LettersToChoose =
// [
//     "p",
//     "r",
//     "s"
// ];

// document.onkeyup = function ( event) 
// {
//     var UserPicked = event.key;

//     var AIGuess = LettersToChoose[Math.floor(Math.random() * LettersToChoose.length)];

//     if((UserPicked === 'r') || (UserPicked === "p") || (UserPicked === "s")){

//         alert(" you chose:" + UserPicked);
//         alert(" the computer chose:"  + AIGuess);
//     }
// }
// =================== P R A C T I C E ========================

var Pickthis = 
[
    "p",
    "s",
    "r"
];

document.onkeyup = function ( event){
    var ichose = event.key;
    var C_Chose = Pickthis[Math.floor(Math.random() * Pickthis.length)];
    if(
        (ichose === "p") || (ichose === "r") || (ichose === "s")
    )
    {
        alert(" User Pressed: " + ichose);
        alert(" computer chose:" + C_Chose);
    }
}