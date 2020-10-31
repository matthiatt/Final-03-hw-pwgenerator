// Didn't like the layout or the functionality of these so I knocked them out to try something new.
// var specialCharacters;
// var numCharacters;
// var upperCase;
// var lowerCase;
// var idNewPw = "";
const minPassLength = 8;
const maxPassLength = 128;
var password = " ";
const characterNormal = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
const characterCaps = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q,, R, S, T, U, V, W, X, Y, Z";
const characterNums = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
const characterSpecial = "!, @, #, $, %, ^, &, *, -,  =, +, _, ?";

// Grabbing the elements I put into the HTML file.  In this case I am telling the system to grab the check-box ID's I created so the user can have a choice of which characters they desire when the user executes the action.
var pwBox = document.getElementById("password");
var spCheckBox = document.getElementsById("special");
var numsCheckbox = document.getElementsById("nums");
var lowerCheckbox = document.getElementsById("lower");
var upprCheckbox = document.getElementsById("upper");
// var pwBtn = document.querySelector("password");
// const button = document.getElementById('generate');

var newPwLength = prompt("Please enter the length of your desired password. (Must be within 8 to 128 characters long.)");

// What if no checkbox's are checked in the process of this? I will need to put in some sort of prompt for the user to alert them to fill out information that's needed to execute the job correcty.

// I used '&&' becuase I needed to prompt the computer/program to recognize the parameters needed to throw this error to the user. Plus its easier to write this than 4 different individual steps.

if(lower == false && upper == false && nums == false && special == false) {
    alert("Please enter a valid response. You must click one or more boxs.");
}

// Next what I want to do is to try and define the logic on how the password will be generated based on the users input with the checkboxes that are selected.  Going from top to bottom from my defined list I am defining right below. And then after that, I am going to go grab the variable I defined based on the type of characters being defined.
specialChar = document.getElementsById("special");
nums =  document.getElementsById("nums");
lowerChar = document.getElementsById("lower");
upperChar = document.getElementsById("upper");

function newGeneratedPw() {
    for(i = 0; i < newPwLength; i++) {
        if(specialChar && newPw.length < pwLength) {
            pw = password += characterSpecial.charAt(math.floor(math.random()* characterSpecial.length));
        }
        if(nums && newPw.length < pwLength) {
            pw = password += characterNums.charAt(math.floor(math.random()* characterNums.length));
        }
        if(lowerChar && newPw.length < pwLength) {
            pw = password += characterNormal.charAt(math.floor(math.random()*characterNormal.length));
        }
        if(upperChar && newPw.length > pwLength) {
            pw = password += characterCaps.charAt(math.floor(math.random()*characterCaps.length));
        }
    }
}

pwBox.value = password();

function passwordCoppied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("You successfully copied the password to your clipboard.");

var charCopy = document.getElementById("copy");
    charCopy.addEventListener("click", function () {
        copyPassword();
});
}
// function butnListenEvent() {
//     button.addEventListener('click', event => {
//     button.innerHTML = `${event.detail}`;
//     userInput();
//     userChoicesArrayGenerator();
//     newGeneratedPw();
//     userChoicesArr = [];
//     });
// }

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


// function hidePass() {
  // Thanks again to Sathanus, on discord, for the suggestion of keeping
  // **NOTE** I am Sathanus on Discord. 
//   var currentDisplayText=document.querySelector("#password");
//   if(currentDisplayText.value.split(" ")[1]!="password")
//     document.querySelector("#password").value = id;
// }
//   document.querySelector("#password").value=id;
//   copyToClipboard();
// Creating a function to add extra security to the password.
// Adding a feature to show and hide the password generated.
// function clickActionDisplay() {
//     var actionDisplayPw = document.getElementById("card-body");
//         if (actionDisplayPw.style.display === "none") {
//             actionDisplayPw.style.display = "block";
//         } else {
//             actionDisplayPw.style.display = "none";
//         } 


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