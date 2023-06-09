// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("<h3>Welcome, " + fullName + "!</h3>");

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
var userInput = prompt("Enter your favorite mobile phone model:");
var inputLength = userInput.length;
document.write("<h3>The length of your input is: " + inputLength + "</h3>");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser 
var word = "Pakistani";
var index = word.indexOf("n");
document.write("<h3>The index of the letter 'n' in the word 'Pakistani' is: " + index + "</h3>");

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("<h3>The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex + "</h3>");


// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
var word = "Pakistani";
var character = word.charAt(3);
document.write("<h3>The character at the 3rd index in the word 'Pakistani' is: " + character + "</h3>");

// 6. Repeat Q1 using string concat() method
var firstName = prompt("Enter your Mother name")
var lastName = prompt("Enter your Father name")
document.write( '</br>'+"Hello "+firstName.concat(" "+lastName));

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
var city = "Hyderabad"
document.write("City: " +city +'</br>')
document.write("After replacement: "+ city.replace("Hyder", "Islam"));

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”; 
var replace = "Hassan and Samad are best friends. They play cricket and football together"
document.write(replace +'<br>'+ '<b>After replacement of and: </b>' +replace.replace(/and/g, "&" )+'<br>');

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser
var nuumb = "472"
document.write('<b>String:</b>'+ " "+nuumb +'<br>'+'<b>Type:</b>' +" String"+ '<br>'+'<b>value:</b>'+ (+nuumb)+'<br>'+'<b>Type:</b>'+ "number" );

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters
document.write('<br>', "<h3>Capital letters</h3>"); 
var userIn= prompt("Enter any word in small letters")
document.write('<br>'+"User input: "+userIn +'<br>' +"Upper Case: "+ userIn.toUpperCase("userIn") +'<br>' )

// 11. Write a program that takes user input. Convert and 
// show the input in title case.
var userInput = prompt("Enter a string:");
var words = userInput.split(' ');
var titleCase = '';
for (i = 0; i < words.length; i++) {
  var word = words[i];
  var firstLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  var capitalizedWord = firstLetter + restOfWord;
  titleCase += capitalizedWord + ' ';
}
document.write("Converted input: " + titleCase);

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Converted string: " + str);

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var username = prompt("Enter your username:");
var specialSymbols = ["@", ".", ",", "!"];

function isSpecialSymbol(char) {
  var charCode = char.charCodeAt(0);
  return (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64);
}

var containsSpecialSymbol = false;
for (var i = 0; i < username.length; i++) {
  if (isSpecialSymbol(username[i])) {
    containsSpecialSymbol = true;
    break;
  }
}

if (containsSpecialSymbol) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  // Valid username
  alert("Username: " + username);
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var userInputLowercase = userInput.toLowerCase();
var isItemFound = false;
for (var i = 0; i < A.length; i++) {
  var currentItem = A[i].toLowerCase();
  if (currentItem === userInputLowercase) {
    isItemFound = true;
    break;
  }
}
if (isItemFound) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// Take user input for the password
var password = prompt("Enter a password:");
var alphabetRegex = /[a-zA-Z]/;
var numberRegex = /[0-9]/;
if (
  password.length >= 6 &&
  alphabetRegex.test(password) &&
  numberRegex.test(password) &&
  !numberRegex.test(password.charAt(0))
) {
  alert("Password is valid!");
} else {
  alert("Please enter a valid password that meets the requirements.");
}
// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = "University of Karachi";
var array = university.split(" ");
document.write("Array elements: " + array);

// 17. Write a program to display the last character of a user 
// input.
var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
// Define the string
var sentence = "The quick brown fox jumps over the lazy dog";
var lowercaseSentence = sentence.toLowerCase();
var wordToSearch = "the";
var regex = new RegExp("\\b" + wordToSearch + "\\b", "g");
var count = (lowercaseSentence.match(regex) || []).length;
document.write("Number of occurrences of the word 'the': " + count);