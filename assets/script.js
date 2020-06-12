// Assignment Code:

// Arrays and string containing the characters that the Password Generator function will draw from and concatenate to create password:

    var arrayLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",  "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var arrayUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var arraySymbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "_", "-", "/" ];

    // Array that will house the randomly generated characters to be compiled into the final password:

        var arrayPassword = []; 


// Generator Functions (Functions that generate the random lower case letters, upper case letters, numbers and symbols):

        // Function for when the user wants lower case letters in the password:
            function lowerCaseGenerator() {
              /*
                * Math.floor rounds a decimal number down to the nearest whole number. 
                * The reason we multiply Math.random by 26 or the arrayLowerChar.length is because there are 26 lower case characters in the lower case array name arrayLowerChar.
                * The function below returns a random string from arrayLowerChar:
              */ 
              const randomLower = arrayLowerChar[Math.floor(Math.random() * arrayLowerChar.length)];
              return randomLower;
            }
            console.log(lowerCaseGenerator())

        // Function for when the user wants Upper Case letters in the password:

            function upperCaseGenerator() {
              const randomUpper = arrayUpperChar[Math.floor(Math.random() * arrayUpperChar.length)];
              return randomUpper;  
            } 
            console.log(upperCaseGenerator())

        // Function for when the user wants numbers in the password:

            function numberGenerator() {
              const randomNumb= arrayNumber[Math.floor(Math.random() * arrayNumber.length)];
              return randomNumb;  
            } 
            console.log(numberGenerator())

        // Function for when the user wants symbols in the password:
        
            function symbolGenerator() {

              const randomSymbol= arraySymbol[Math.floor(Math.random() * arraySymbol.length)];
              return randomSymbol;  
            } 
            console.log(symbolGenerator())


// Object that contains all the Random Character Generator Functions:

      const randomFunctions = {
          lower: lowerCaseGenerator,
          upper: upperCaseGenerator,
          number: numberGenerator,
          symbol: symbolGenerator
          };

// DOM(Document Object Model) Elements:
          /*
            1. 
          */

            




function generatePassword(){
    // The password generation function goes here.

    // First create an alert that asks "How many characters do you want the password to be?." Then store this integer as a var
    var numOfChar = prompt("What is the number of characters you want in your password?");
    // Convert string to Integer:
    var numOfChar = parseInt(numOfChar, 10); 


  return numOfChar
  //return means that same data value is created and then can be stored in a variable. In this case, the variable = password.
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// The writePassword() function is fired when the generateBtn is clicked as shown in line 16
function writePassword() {
  var password = generatePassword();
    //the generatePassword() function has not been created  as of 10Jun2020. We have to make it.
    //Once the generatePassword() function is triggered. A password is created and stored in the variable   password
  var passwordText = document.querySelector("#password");
    //This variable grabs the password variable and displays it on the webpage. 
    //It's hooking up onto an element on the webpage.

  passwordText.value = password;
    //This function hooks passwordText to the password variable which is then displayed.

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*  
    * Research Concatenate!!! Works great on this homework
    * Research Push
    * You might have to create a variable for all your characters.
    * For all your characters, you might have to create a variable for each character in the password. Then convert each variable to a string and then combine the string into the password. Maybe produce an array.
    * You want to have a string or array containing all uppercase letters, one for all lower case letters, one for all special characters, one for all numbers so that you can take values from the array and use them.
    * Google "how do I get an array of all upper case letters?" You don't have to do it manually.
    * So think of different containers each comtaining different things. so you have 4 different variables.
        * Depending on what the user chooses, you can pull from these containers and push or combine them into one big container. And then you can build a password from that big container.  
*/ 
    
   
  



