function generatePassword() {
  //TODO: your code goes here
  // Assigning variables
  var generation = [];
  var piggybank = [];
  var alphaUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var alphaLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?", "-", "_", "=", "+"];
  // Randomly generate characters
  Math.floor(Math.random() * alphaUp.length)

  // Prompting user for password criteria
  var charLength = Number(prompt("Pick a character length between 8-128:"))
  // Generate password and activate alerts for false inputs
  if ( Number.isInteger(charLength)===false || charLength < 8 || charLength > 128) {
    alert("Please only choose a number between 8-128!")
    generatePassword()
  } else {
    var charType1 = confirm("Do you want upper case letter?")
    if (charType1) {
      piggybank.push(...alphaUp)
    }
    var charType2 = confirm("Do you want lower case letters?")
    if (charType2) {
      piggybank.push(...alphaLow)
    }
    var charType3 = confirm("Do you want numbers?")
    if (charType3) {
      piggybank.push(...numeral)
    }
    var charType4 = confirm("Do you want special characters?")
    if (charType4) {
      piggybank.push(...special)
    }
    if (piggybank.length==0) {
      alert("Piggybank empty!")
      generatePassword()
    }
    console.log(charLength, charType1, charType2, charType3, charType4, piggybank)
    // Generate string of random characters from 8-128 characters long
    function develop() {
      for (let i = 0; i < charLength; i++) {
        generation.push(piggybank[Math.floor(Math.random() * piggybank.length)]);
        console.log(generation)
      }
    };
    develop();
    
  }
  // Display new random password
  return generation.join("")
}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
