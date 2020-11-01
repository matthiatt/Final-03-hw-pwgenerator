const minPassLength = 8;
const maxPassLength = 128;
var generateButton = document.querySelector("generate");
var specialCharacters;
var numCharacters;
var upperCharacters;
var lowerCharacters;
const characterNormal = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
const characterCaps = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q,, R, S, T, U, V, W, X, Y, Z";
const characterNums = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
const characterSpecial = "!, @, #, $, %, ^, &, *, -,  =, +, _, ?";
// Grabbing the elements I put into the HTML file.  In this case I am telling the system to grab the check-box ID's I created so the user can have a choice of which characters they desire when the user executes the action.

function inputPassword() {
    var pw = randomPwGenerator();
    var generatedPwTxt = document.querySelector("#password");
    generatedPwTxt.value = pw;
    generateButton.addEventListener("click", inputPassword);
}

var pwBox = document.getElementById("password");
var spCheckBox = document.getElementsById("special");
var numsCheckbox = document.getElementsById("nums");
var lowerCheckbox = document.getElementsById("lower");
var upperCheckbox = document.getElementsById("upper");
var generate = document.getElementById("generate");
var copyPw = document.getElementById("copy");
var lengthVal = document.getElementById("length");
// What if no checkbox's are checked in the process of this? I will need to put in some sort of prompt for the user to alert them to fill out information that's needed to execute the job correcty.

// Next what I want to do is to try and define the logic on how the password will be generated based on the users input with the checkboxes that are selected.  Going from top to bottom from my defined list I am defining right below. And then after that, I am going to go grab the variable I defined based on the type of characters being defined.

generate.addEventListener("click", () => {
    const length = lengthVal.value;
    const upperCase = upperCheckbox.checked;
    const lowerCase = lowerCheckbox.checked;
    const numbers = nums.checked;
    const symbolMark = spCheckBox.checked;

pwBox.innerText = inputPassword(upperCase, length, lowerCase, numbers, symbolMark);
});

var newPwLength = prompt("Please enter the length of your desired password. (Must be within 8 to 128 characters long.)");

function randomPwGenerator() {
    // var passwordLength = prompt("Please enter between 8 - 128 characters.");
    // while (passwordLength < 8 || passwordLength > 128) {
    //     passwordLength = prompt("Please enter between 8 - 128 characters.");
    // }
    // var upperCharacters = confirm("Would you like to include uppercase characters in your password? (A - Z)");
    // var lowerCharacters = confirm ("Would you like to include lowercase characters in your password? (a - z)");
    // var numCharacters = confirm ("Would you like to include numbers in your password? (0-9)");
    // var specialCharacters = confirm ("Would you like to include special characters in your password?");
    // upperCharacters = confirm("Would you like to include uppercase characters in your password? (A - Z)");
    // lowerCharacters = confirm ("Would you like to include lowercase characters in your password? (a - z)");
    // numCharacters = confirm ("Would you like to include numbers in your password? (0-9)");
    // specialCharacters = confirm ("Would you like to include special characters in your password?");

    if(lowerCharacters == false && upperCharacters == false && numCharacters == false && specialCharacters == false) {
    alert("Please enter a valid response. You must click one or more boxs.");
}

const characterNormal = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
const characterCaps = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q,, R, S, T, U, V, W, X, Y, Z";
const characterNums = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
const characterSpecial = "!, @, #, $, %, ^, &, *, -,  =, +, _, ?";
var password = "";

    if(characterNormal) {
        password += "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
    }
    if(characterCaps) {
        password += "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q,, R, S, T, U, V, W, X, Y, Z";
    }
    if(characterNums) {
        password += "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
    }
    if(characterSpecial) {
        password += "!, @, #, $, %, ^, &, *, -,  =, +, _, ?";
    }

    for(var i = 0; i < length; i++) {
        if(characterSpecial.length || characterNums.length || characterNormal.length || characterCaps.length > length) {
            password += characterSpecial(math.floor(math.random()*characterSpecial.length));
            password += characterNums(math.floor(math.random()* characterNums.length));
            password += characterNormal(math.floor(math.random()*characterNormal.length));
            password += characterCaps(math.floor(math.random()*characterCaps.length));
        }
    }   
    return randomPwGenerator();
    }



// I used '&&' becuase I needed to prompt the computer/program to recognize the parameters needed to throw this error to the user. Plus its easier to write this than 4 different individual steps.

function passwordCoppied() {
    document.getElementById("password").select();
    document.getElementById("copy");
    alert("You successfully copied the password to your clipboard.");

var charCopy = document.getElementById("copy");
    charCopy.addEventListener("click", function () {
        copyPassword();
});
}

// User clicks button, then to expect a string of random variables based on thier decisions(settings).
// Calling the variable from line 8.
// function tempPasswordGenerator(id) {
//     for (var i = 0; i < minCharLength; i++) {
//         var pwvVriables = 
//     }
//     return id;
//     }

// function newGeneratedPw() {
//     for(i = 0; i<newPwLength; i++) {

//     }
    // if (userChoicesArr.length < characterNums.length || getPwLength < 8) {
    //     alert("You did not meet the min requirments. Please try again!");
    // } else {
    //     for (i = 0; i < getPwlength; i++) {
    //         newPw += userChoicesArr[Math.floor(Math.random() * (userChoicesArr.length - 1))];
    //     }
    //     pwBtn.textContent = newPw;
    // }
    // newPw = [];
// } 



// function userInput() {
//     getPwlength = prompt("Please select the length of your password - 8 - 50 characters");
// }

// $(document).ready(function(){
//   $("#card-body").click(function(clickActionDisplay) {
//     $("p").append(id);
//     return clickActionDisplay();
//   });
//   console.log(clickDisplay);
//   console.log(clickActionDisplay);
//   console.log(display);
//   console.log(document);
  
// })}

// Add in dbClick feature to copy to clipboard and a button