//MATH METHODS
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
var positiveInt = prompt("Enter a positive integer:");
// a. number
var number = parseInt(positiveInt);
// b. round off value of the number
var roundedValue = Math.round(number);
// c. floor value of the number
var floorValue = Math.floor(number);
// d. ceil value of the number
var ceilValue = Math.ceil(number);
document.write("Number: " + number + "<br>");
document.write("Rounded value: " + roundedValue + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>");

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
var negativeInt = prompt("Enter a negative floating-point number:");
// a. number
var number = parseFloat(userInput);
// b. round off value of the number
var roundedValue = Math.round(number);
// c. floor value of the number
var floorValue = Math.floor(number);
// d. ceil value of the number
var ceilValue = Math.ceil(number);

document.write("Number: " + number + "<br>");
document.write("Rounded value: " + roundedValue + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>");

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var abs = -6
var abs1 = 7
document.write('<br>'+"The absolute value of " + abs + " is " + Math.abs(abs)+ '<br>'+ "The absolute value of "+ abs1+ " is "+ Math.abs(abs1)+'<br>');

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.
var myNum= (Math.round(Math.random()*10))
document.write('<b>Random dice value: </b>'+myNum+ '<br>')


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var numb = (Math.round(Math.random()*10))
if (numb==2){
  document.write(numb+ '<br>'+"random coin value: Heads")
} else if (numb==1) {
document.write(numb +'<br>'+ "random coin value: Tails")
} else {
  document.write("TRY AGAIN UNTILL YOU SEE THE VALUE OF TAILS & HEADS")
}

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + randomNumber);

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var userInput = prompt("Enter your weight:");
var weight = parseFloat(userInput);
document.write("Your weight is: " + weight + " kilograms");

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.
// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess the secret number (between 1 and 10):");
var userGuess = parseInt(userInput);
if (userGuess === secretNumber) {
  document.write("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry, your guess is incorrect. The secret number was: " + secretNumber);
}