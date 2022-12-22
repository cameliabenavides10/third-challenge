
var generateBtn = document.querySelector("button");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
var lengthPassword = window.prompt("For the length of the password please inpute a number between 8 and 128.");
var lowerCase = window.confirm("Would you like to add lowercase letters: please select if yes");
var upperCase = window.prompt ("Would you like to add uppercase letters: please respond yes or no.");
var numbers = window.prompt("Would you like to add numbers: please respond yes or no.");
var specialCharacters = window.prompt("Would you like to add special characters: please respond yes or no.");
}
 



//  part of the code i havent gotten to that was given in the starter.
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

