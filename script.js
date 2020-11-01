const minPassLength = 8;
const maxPassLength = 128;
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
var lengthVal = document.getElementById("length");

function inputPassword() {
    var pw = randomPwGenerator();
    pwBox.value = pw;
}

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

    if(!lowerCase && !upperCase && !numbers && !symbolMark) {
        password = "Please enter a valid response. You need select at least one box and set your character length between 8 - 128.";
        return password;
    } 
    if(length < minPassLength || length > maxPassLength) {
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
        var choice = getRandomInt(maxChoices) % maxChoices;
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