// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible character choices for the password 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var digits = "1234567890";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

//Questions to be asked to the user for the best password they need 
function inquiries(){
  var allChars = [];
  var resultPass = ""; 
  
  var isValid = false;
  do {
    var askNumbers = confirm("Does your password need numbers?");
    var askLowerCase = confirm("Does your password need lower case letters?");
    var askUpperCase = confirm("Does your password need Upper Case letters?");
    var length = prompt("Choose password length between 8 and 128 characters");
    var askSpecial = confirm("Does your password need special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
