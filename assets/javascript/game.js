
//Global vars

//Word bank array
var dictionary = [
    'parrot', 'cannon', 'jolly rodger', 'blackbeard', 
    'treasure', 'rum', 'walk the plank', 'scallywag', 'scurvy', 
    'swashbuckler', 'Nassau', 'shiver me timbers', 'poop deck', 
    'ahoy, matey', 'buccaneer', 'booty', 'anne bonny', 'charles vane', 
    'calico jack', 'seadog'
    ];
var wins = 0;
var losses = 0;
var guessLeft = 7;
var usedLetters = [];
var currentWord = dictionary[Math.floor(Math.random()*dictionary.length)];



