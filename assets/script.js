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

 // Function that is triggered that generates the password:

      function generatePassword(){

            // Asks the user to input information on what kind of password is desired:
                var length = prompt("Enter the number of characters between 8-128 that you want in your password.");
                    length = parseInt(length, 10);
                
                if (length < 8) {
                  alert("You cannot have a password below 8 characters in length!");
                  return;
                } else if(length > 128) {
                  alert("You cannot have a password above 128 characters in length!");
                  return;
                }

                var hasLower = confirm("Do you want lower case letters in your password?");
                var hasUpper = confirm("Do you want upper case letters in your password?");
                var hasNumber = confirm("Do you want numbers in your password?");
                var hasSymbol = confirm("Do you want symbols in your password?");

        

       }

          

        
    
    
    
 


// DOM (Document Object Model) Elements that link javascript to elements on the webpage:

        // This DOM links any element on the webpage with the ID "generate" with the variable generateBtn 
          var generateBtn = document.querySelector("#generate");

        // These Doms add a properties to the variable generateBtn where if a "button click" is sensed on any webpage element with the ID "generate", the functions promptInput and writePassword are triggered.
          generateBtn.addEventListener("click", writePassword);

        // When triggered by a button click, the writePassword function will then trigger the generatePassword function which will then generate a password. That password will then be displayed in the text area element which has the id = "password".
          function writePassword() {
            var password = generatePassword();
            var passwordText = document.querySelector("#password");
              
            passwordText.value = password;
          };

    




   
  



