                        // IF…ELSE & ELSE IF STATEMENT, 
                        // TESTING SET OF CONDITIONS
// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
function isNumber(char) {
    return !isNaN(char);
  }
  
  // Function to check if the input is an uppercase letter
  function isUppercaseLetter(char) {
    var code = char.charCodeAt(0);
    return code >= 65 && code <= 90;
  }
  
  // Function to check if the input is a lowercase letter
  function isLowercaseLetter(char) {
    var code = char.charCodeAt(0);
    return code >= 97 && code <= 122;
  }
  
  // Prompt the user to enter a character
  var input = prompt("Enter a character:");
  
  // Check the type of the input character
  if (isNumber(input)) {
    console.log("The input is a number.");
  } else if (isUppercaseLetter(input)) {
    console.log("The input is an uppercase letter.");
  } else if (isLowercaseLetter(input)) {
    console.log("The input is a lowercase letter.");
  } else {
    console.log("The input is neither a number nor a letter.");
  }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = prompt("Enter the first integer");
num1 = parseInt(num1);
//get the second integer from the user
var num2 = prompt("Enter the second integer");
num2 = parseInt(num2);
if (num1 > num2) {
    document.write(num1 + "is greater than" + num2);
}
else
    if (num1 < num2) {
        document.write(num2 + "is greater than" + num1);
    }
    else {
        document.write(num1 + "and" + num2 + "are equal");
    }

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// Prompt the user to enter a number
var number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
var char = prompt("Enter a character");
//check if the character is a vowel using the indexOf method
if ("aeiou".indexOf(char) != -1) {
    var result = true;
}
else {
    var result = false;
}

// 5. Write a program that
// a. Store correct password in a JS variable.
var correctPass = "mypassword";
// b. Asks user to enter his/her password
var userPass = prompt("Enter password");
// c. Validate the two passwords:
if (userPassword === "") {
    // i. Check if user has entered password. If not, then 
    // give message “ Please enter your password”
    document.write("Please enter your password.");
} else if (userPassword === correctPassword) {
    // ii. Check if both passwords are same. If they are 
    // same, show message “Correct! The password you 
    // entered matches the original password”. Show 
    // “Incorrect password” otherwise.
    document.write("Correct! The password you entered matches the original password.");
} else {
    document.write("Incorrect password.");
}

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (time >= 0 && time < 1200) {
    document.write("Good morning!");
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    document.write("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good night!");
} else {
    document.write("Invalid time input.");
}
