// Grabbing the elements I put into the HTML file.  In this case I am telling the system to grab the check-box ID's I created so the user can have a choice of which characters they desire when the user executes the action.
const minPassLength = 8;
const maxPassLength = 128;
var specialCharacters;
var numCharacters;
var upperCharacters;
var lowerCharacters;
const characterNormal = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const characterCaps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const characterNums = ["0","1","2","3","4","5","6","7","8","9"];
const characterSpecial = ["!","@","#","$","%","^","&","*","-","=","+","_","?"];
var pwBox = document.getElementById("password");
var spCheckBox = document.getElementById("special");
var numsCheckbox = document.getElementById("nums");
var lowerCheckbox = document.getElementById("lower");
var upperCheckbox = document.getElementById("upper");
var generate = document.getElementById("generate");
var copyPw = document.getElementById("copy");
var lengthVal = document.getElementById("length");


// What if no checkbox's are checked in the process of this? I will need to put in some sort of prompt for the user to alert them to fill out information that's needed to execute the job correcty.

// Next what I want to do is to try and define the logic on how the password will be generated based on the users input with the checkboxes that are selected.  Going from top to bottom from my defined list I am defining right below. And then after that,I am going to go grab the variable I defined based on the type of characters being defined.

function inputPassword() {
    var pw = randomPwGenerator();
    pwBox.value = pw;
}
// var newPwLength = prompt("Please enter the length of your desired password. (Must be within 8 to 128 characters long.)");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomPwGenerator() {
    var length = lengthVal.value;
    var upperCase = upperCheckbox.checked;
    var lowerCase = lowerCheckbox.checked;
    var numbers = numsCheckbox.checked;
    var symbolMark = spCheckBox.checked;
    var password = "";
    var maxChoices = 0;
    
    if(!lowerCase && !upperCase && !numbers && !symbolMark && (length < minPassLength || length > maxPassLength)) {
        password = "Please enter a valid response. You need select at least one box and set your character length between 8 - 128.";
        return password;
    } 
    if(lowerCase) {
        maxChoices++;
    }
    if(upperCase) {
        maxChoices++;
    }
    if(numbers) {
        maxChoices++;
    }
    if(symbolMark) {
        maxChoices++;
    }
    for(var i = 0; i < length; i++) {
        var choice = getRandomInt(maxChoices);
        var randomChar = "";
        switch(choice) {
            case 0: randomChar = characterNormal[getRandomInt(characterNormal.length)];
                break;
            case 1: randomChar = characterCaps[getRandomInt(characterCaps.length)];
                break;
            case 2: randomChar = characterNums[getRandomInt(characterNums.length)];
                break;
            case 3: randomChar = characterSpecial[getRandomInt(characterSpecial.length)];
                break;
        }
        password += randomChar;
    }   

    return password;
}