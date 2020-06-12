// Assignment Code:

// Arrays and string containing the characters that the Password Generator function will draw from and concatenate to create password:

    var arrayLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",  "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var arrayUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var arraySymbol = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "_", "-", "/" ];


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

            // First, ask the user to input information on what kind of password is desired:

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
            
            // Second, initialize the password variable. This variable will contain a string that we continuously build on to create the password.

                // Initialize empty password variable. (Already initialized)
                    let passwordContainer = "";
                

                // Initialize variable that count the types of characters(lowercase, uppercase, numbers, symbols) selected by the user"
                const typesCount = lower + upper + number + symbol;

                console.log('typesCount: ', typesCount);


            // Third, filter out false variables. If any of the four variables hasLower, hasUpper, hasNumber and/or hasSymbol is unchecked, that variable will not be used in the password generator.

                // What we need is to build later is an array of objects with the below array as keys.
                // In order to do that we wrap each variable in curly braces.
                // This allows the console to display a more informative array that shows the type of characters available for the password and whether or not the user wants them in the password.
                // This array of true and false values for each type can then be used to filter out the types that are false or not desired by the user
                // To filter out the false types, we use the filter method:

                const typesArray =[{lower}, {upper}, {number}, {symbol}].filter
                ( // I'll have to research this section more to understand.
                  item => Object.values(item)[0]
                );

                console.log('typesArray: ', typesArray);

                // The following if else statement was inserted for the condition if the user didn't want any lower case letters, upper case letters, numbers, or symbols.
                if (typesCount === 0) {
                  return " You have chosen to have no types of characters in your password. Therefore a password cannot be generated. Why did you do that???"
                }

            // Fourth, we loop over the length of characters that the user has chosen and call a random generator function for each type.

                for(let i = 0; i < length; i += typesCount) {
                  // We are going to loop through the types array using the forEach high order array method?! for each type of character and then use the random generators stored in the randomFunctions array. We only want the first value, so we set the Object.keys to 0.
                  typesArray.forEach(type=> {
                    const functName = Object.keys(type)[0];
                    // Console log it so I can understand what this shit is...
                    // The console log will show that we are iterating over the chosen character types in order and generating a random value chosen from the arrays we created earlier.
                    console.log('functName: ', functName);

                    // Now we append values into the empty password container using the random characters generators stored in the random functions array: 
                    passwordContainer += randomFunctions[functName]();
                  });
                }

            // Fifth Add the final password to the password variable and then return the result into the text box on the webpage.

        

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

    




   
  



