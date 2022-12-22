
var generateBtn = document.querySelector("button");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
var lengthPassword = window.prompt("For the length of the password please inpute a number between 8 and 128.");
    if(lengthPassword < 8){
        return alert("Make sure password is longer than 8 characters.")

    }
    if(lengthPassword > 128){
        return alert("Make sure password is shorter than 128 characters.")
    }


var hasLowerCase = window.confirm("Would you like to add lowercase letters?");
var hasUpperCase = window.confirm ("Would you like to add uppercase letters?");
var hasNumbers = window.confirm("Would you like to add numbers?");
var specialCharacters = window.confirm("Would you like to add special characters?");

 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var characters = "!@#$%^&*()_|*+";

var chosenPassCharacters = ""; 
if(hasLowerCase){ 
 chosenPassCharacters += lowerCase;

}
if (hasUpperCase){
    chosenPassCharacters += upperCase;
}
if(hasNumbers){
    chosenPassCharacters += numbers;
}
if(specialCharacters){
    chosenPassCharacters += characters;
}

var result =""

for (let i = 0; i < lengthPassword; i++) {
    result += chosenPassCharacters.charAt(Math.floor(Math.random() * chosenPassCharacters.length));  
}







var passwordText = document.querySelector("#password");
passwordText.value = result;

}