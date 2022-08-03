// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generator functions
function getRanUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26+65));
} console.log(getRanUpper());

function getRanLower() {
  return String.fromCharCode(Math.floor(Math.random()*26+97));
} console.log(getRanLower());

function getRanNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10+48));
} console.log(getRanNumber());

function getRanSymbol() {
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random()*10)]
} console.log(getRanSymbol());
//