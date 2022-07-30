// Assignment code here
const userOptions = {};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//User Prompts
const userPrompts = () => {
  userOptions.length = prompt('How long would you like your password to be? Must be between 8 and 128 characaters.');

  if (isNaN(userOptions.length) || !userOptions.length || userOptions.length < 8 || userOptions.length > 128) {
    alert('Must input a number between 8 and 128')
    userPrompts();
  };

  userOptions.uppercase = confirm('Would you like your password to include uppercase letters?');
  userOptions.lowercase = confirm('Would you like your password to include lowercase letters?');
  userOptions.numeric = confirm('Would you like your password to include any numbers?');
  userOptions.specialCharacters = confirm('Would you like your password to include special characters?');

  console.log(userOptions)

  if (!userOptions.uppercase && !userOptions.lowercase && !userOptions.numeric && !userOptions.specialCharacters) {
    alert('At least one character type muct be chosen.')
    userPrompts();
  };

};

//Character Arrays
const upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacterArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "/", "]", '^', '_', '`', '{', '|', '}', '~'];

//Generate Password
const generatePassword = () => {
  if (userOptions.uppercase) {
  console.log(upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]);
  
  };
};




  






