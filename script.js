var specialCharacters;
var numCharacters;
var upperCase;
var lowerCase;
var idNewPw = "";
const characterNormal = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
const characterCaps = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q,, R, S, T, U, V, W, X, Y, Z"];
const characterNums = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9"];
const characterSpecial = ["!, @, #, $, %, ^, &, *, -,  =, +, _, ?"];
// Hoisting const throughout the process of showing and hiding the generated PW. //
var pwBtn = document.querySelector("password");
// const button = document.getElementById('generate');


function butnListenEvent() {
    button.addEventListener('click', event => {
    button.innerHTML = `${event.detail}`;
    userInput();
    userChoicesArrayGenerator();
    newGeneratedPw();
    userChoicesArr = [];
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

function newGeneratedPw() {
    if (userChoicesArr.length < characterNums.length || getPwLength < 8) {
        alert("You did not meet the min requirments. Please try again!");
    } else {
        for (i = 0; i < getPwlength; i++) {
            newPw += userChoicesArr[Math.floor(Math.random() * (userChoicesArr.length - 1))];
        }
        pwBtn.textContent = newPw;
    }
    newPw = [];
} 



// function userInput() {
//     getPwlength = prompt("Please select the length of your password - 8 - 50 characters");
// }

function passwordCoppied() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("You successfully copied the password to your clipboard.");

var charCopy = document.getElementById("copy");
    charCopy.addEventListener("click", function () {
        copyPassword();
});
}
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