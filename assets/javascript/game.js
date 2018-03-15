//global variables
var dictionary = [
    'parrot', 'cannon', 'blackbeard', 
    'treasure', 'rum', 'scallywag', 'scurvy', 
    'swashbuckler', 'nassau',
    'matey', 'buccaneer', 'booty', 'ahoy', 'seadog'
];
var wins = 0;
var losses = 0;
var worongWord = document.getElementById('guesses');
var guessesLeft = 6;
var wrongLetters = [];
var previousGuesses = [];
var letter;
var answerArray = [];
var currentWord = dictionary[Math.floor(Math.random()*dictionary.length)];
var alphabet = ["abcdefghijklmnopqrstuvwxyz"]; 

//game function below
function game () {
    // replaces letters in the random word with an _
    for (var i = 0; i < currentWord.length; i++) {
        answerArray.push("_ ");
    }
    
    document.getElementById("gameplay").textContent = answerArray.join('');

    //user press a key
    document.onkeyup = function(event) {
        letter = String.fromCharCode(event.which).toLowerCase();

        if (!(event.which <= 90 && event.which >= 65)) return;
            var previouslyEntered = false;
            for (i=0;i<previousGuesses.length;i++) {
                if (letter === previousGuesses[i]) {
                    previouslyEntered = true;
                }
            }
            if(!previouslyEntered) {
                previousGuesses.push(letter);
                if (currentWord.indexOf(letter) > -1) { 
                    for (var j = 0; j < currentWord.length; j++) {
                        if (currentWord[j] === letter) {
                            answerArray[j] = letter;
                            document.getElementById("gameplay").textContent = answerArray.join('');
                            win();
                        }
                    }
                } 
                
                else {
                    wrongLetters.push(letter);
                    guessesLeft--;
                    loss();
                }
            }
        
        document.getElementById("guessed").textContent = "Guessed Left: " + wrongLetters;
        document.getElementById("lives").textContent = "Guesses Left: " + guessesLeft;
    }
}

//call the game to start
game();

//function that is called when the guess left go to 0
function loss () {
    if (guessesLeft === 0){
        alert("Ye be out of guesses!! Time to walk the plank! The word was: " + currentWord);
        losses ++;
        var playAgain = confirm("Dare ye try again??")
            if (playAgain === true) {
                reset();
            }
    }
document.getElementById("loss").textContent = "Losses: " + losses;
};

//function that is called when the user guesses the word correctly
function win () {
    if (answerArray.join('') === currentWord) {
        alert("Correct! Ye shall live another day! The word was: " + currentWord);
        wins ++;
        var playAgain = confirm("Dare ye try again??")
            if (playAgain === true) {
                reset();
            }
    }
document.getElementById("wins").textContent = "Wins: " + wins;
};

//resets the game
var reset = function() {
    guessesLeft = 6;
    wrongLetters = [];
    wrongLetters = [];
    previousGuesses = [];
    letter;
    answerArray = [];
    currentWord = dictionary[Math.floor(Math.random()*dictionary.length)];
    game();
};

