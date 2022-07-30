// Assignment code here
// Global variables 
let userOptions = {};
let optionsArray = [];
let passwordArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  userOptions = {}; 
  optionsArray = [];
  passwordArray = [];

  userPromptLength();
  userPrompts();
  generatePassword();
  
  var password = passwordArray.join('');
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//User Prompts
const userPromptLength = () => {
  userOptions.length = prompt('How long would you like your password to be? Must be between 8 and 128 characaters.');

  if (isNaN(userOptions.length) || !userOptions.length || userOptions.length < 8 || userOptions.length > 128) {
    alert('Must input a number between 8 and 128.')
    userPromptLength();
  };
};

const userPrompts = () => {
  userOptions.uppercase = confirm('Would you like your password to include uppercase letters?');
  userOptions.lowercase = confirm('Would you like your password to include lowercase letters?');
  userOptions.numeric = confirm('Would you like your password to include any numbers?');
  userOptions.specialCharacter = confirm('Would you like your password to include special characters?');

  if (!userOptions.uppercase && !userOptions.lowercase && !userOptions.numeric && !userOptions.specialCharacter) {
    alert('At least one character type muct be chosen.')
    userPrompts();
  };
};

//Character Arrays
const uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialCharacterArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "/", "]", '^', '_', '`', '{', '|', '}', '~'];

//Generate Password
const generatePassword = () => {
  if (userOptions.uppercase) {
    for (let i = 0; i < uppercaseArray.length; i++) {
      optionsArray.push(uppercaseArray[i])
    }
  };

  if (userOptions.lowercase) {
    for (let i = 0; i < lowercaseArray.length; i++) {
      optionsArray.push(lowercaseArray[i])
    }
  };

  if (userOptions.numeric) {
    for (let i = 0; i < numericArray.length; i++) {
      optionsArray.push(numericArray[i])
    }
  };

  if (userOptions.specialCharacter) {
    for (let i = 0; i < specialCharacterArray.length; i++) {
      optionsArray.push(specialCharacterArray[i])
    }
  };

  for (let y = 0; y < userOptions.length; y++) {
    passwordArray.push(optionsArray[Math.floor(Math.random()*optionsArray.length)]);
  };
  
  if (userOptions.uppercase) {
    const validateUppercase = passwordArray.some(r=> uppercaseArray.indexOf(r) >= 0)
    if (validateUppercase === false) {
      generatePassword()
    }
  };

  if (userOptions.lowercase) {
    const validateLowercase = passwordArray.some(r=> lowercaseArray.indexOf(r) >= 0)
    if (validateLowercase === false) {
      generatePassword()
    }
  };

  if (userOptions.numeric) {
    const validateNumeric = passwordArray.some(r=> numericArray.indexOf(r) >= 0)
    if (validateNumeric === false) {
      generatePassword()
    }
  };

  if (userOptions.specialCharacter) {
    const validateSpecialCharacter = passwordArray.some(r=> specialCharacterArray.indexOf(r) >= 0)
    if (validateSpecialCharacter === false) {
      generatePassword()
    }
  };
};











  






