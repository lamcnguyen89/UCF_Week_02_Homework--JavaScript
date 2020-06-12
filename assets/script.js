// Assignment Code:

// Arrays and string containing the characters that the Password Generator function will draw from and concatenate to create password:

    var arrayLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",  "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var arrayUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var arraySymbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "_", "-", "/" ];

    
    // Initialize random functions array.
    let password = [];
    let randomChar = "";
    let totalPassword;


// Generator Functions (Functions that generate the random lower case letters, upper case letters, numbers and symbols):

         /*
            * Math.Random creates a number between 0 and 1.
            * Math.floor rounds a decimal number down to the nearest whole number. 
            * The reason we multiply Math.random by 26 or the arrayLowerChar.length is because there are 26 lower case characters in the lower case array name arrayLowerChar.
            * The function below returns a random string from arrayLowerChar:
          */ 

        // Function for when the user wants lower case letters in the password:
            function lowerCaseGenerator() {
              return arrayLowerChar;
            }

        // Function for when the user wants Upper Case letters in the password:
            function upperCaseGenerator() {
              return arrayUpperChar;  
            } 
        

        // Function for when the user wants numbers in the password:
            function numberGenerator() { 
              return arrayNumber;  
            } 
          

        // Function for when the user wants symbols in the password:   
            function symbolGenerator() {   
              return arraySymbol;  
            } 
           

        

 // Function that is triggered that generates the password:

      function generatePassword(){

            // First, ask the user to input information on what kind of password is desired:

                var lengthOfPassword = prompt("Enter the number of characters between 8-128 that you want in your password.");

                    // This if statement controls the range of the character length that the user can input between 8-128 characters:
                    lengthOfPassword = parseInt(lengthOfPassword, 10);
                
                    if (lengthOfPassword < 8) {
                      alert("You cannot have a password below 8 characters in length!");
                      return;
                    } else if(lengthOfPassword > 128) {
                      alert("You cannot have a password above 128 characters in length!");
                      return;
                    }

                const hasLower = confirm("Do you want lower case letters in your password?");
                const hasUpper = confirm("Do you want upper case letters in your password?");
                const hasNumber = confirm("Do you want numbers in your password?");
                const hasSymbol = confirm("Do you want symbols in your password?");
            
            // Second, initialize the password variable. This variable will contain a string that we continuously build on to create the password. Also we will initialize an empty array that will house the Random Character Generation Functions.

            // Third, filter out false variables. If any of the four variables hasLower, hasUpper, hasNumber and/or hasSymbol is unchecked, then we won't use the Random Character generator for that particular type of character

                if (hasLower === true){
                  var lower = lowerCaseGenerator();
                  console.log(lower)
                  totalPassword += password.concat(lower);
                }
                if (hasUpper === true){
                  var upper = upperCaseGenerator()
                  totalPassword += password.concat(upper);
                }
                if (hasNumber === true){
                  var number = numberGenerator()
                  totalPassword += password.concat(number);
                }
                if (hasSymbol === true) {
                  var symbol =symbolGenerator()
                  totalPassword += password.concat(symbol);
                }

                

                // Create a function that randomly chooses from the randomFunc array:

                

               totalPassword = totalPassword.replace(/,/g, "") 
               console.log("This is our password so far: " + totalPassword);
            // Fifth, we loop over the length of characters that the user has chosen and call a random generator function for each type:
            console.log("Password Length: " + lengthOfPassword)
            for (let i=0; i < lengthOfPassword; i++) {
                 console.log(totalPassword[Math.floor(Math.random() * totalPassword.length)])
                 randomChar += totalPassword[Math.floor(Math.random() * totalPassword.length)];


            }

            console.log("Random= " + randomChar)

                 
            // Sixth Add the final password to the password variable and then return the result into the text box on the webpage:

            return randomChar;

       }

// DOM (Document Object Model) Elements that link javascript to elements on the webpage:

        // This DOM links any element on the webpage with the ID "generate" with the variable generateBtn 
          var generateBtn = document.querySelector("#generate");

        // These Doms add a properties to the variable generateBtn where if a "button click" is sensed on any webpage element with the ID "generate", the functions promptInput and writePassword are triggered.
          generateBtn.addEventListener("click", writePassword);

        // When triggered by a button click, the writePassword function will then trigger the generatePassword function which will then generate a password. That password will then be displayed in the text area element which has the id = "password".
          function writePassword() {
            var password = "";
            password = generatePassword();
            var passwordText = document.querySelector("#password");
              
            passwordText.value = password;
          };

    




   
  



