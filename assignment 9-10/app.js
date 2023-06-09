                    // USER INPUT & CONDITIONAL 
                            // STATEMENT

                // USER INPUT & CONDITIONAL STATEMENT
// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
var city = prompt("Enter your city");
if (city == 'Karachi') {
    alert("Welcome to the city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender");
if (gender == 'male') {
    alert("Good morning Sir");
}
if (gender == 'female') {
    alert("Good Morning Ma'am.");
}

// 3.Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
var color = prompt("Enter the color of the traffic signal (Red, Yellow, Green): ");

  if (color.toLowerCase() === "red") {
    console.log("Must stop");
  } else if (color.toLowerCase() === "yellow") {
    console.log("Ready to move");
  } else if (color.toLowerCase() === "green") {
    console.log("Move now");
  } else {
    console.log("Invalid input. Please enter Red, Yellow, or Green.");
  }

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
    
  var fuel = prompt("Enter the remaining fuel in your car (in litres): ");

  if (parseFloat(fuel) < 0.25) {
    console.log("Please refill the fuel in your car");
  } else {
    console.log("You have enough fuel in your car");
  }

  // 5. Run this script, & check whether alert message would be
// displayed or not. Record the output.
// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e.
 if (true){
alert("True");
}
if (false){
alert("False");
}

// f.
 if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
var sub1Marks = prompt("Enter subject 1 Marks");
var sub2Marks = prompt("Enter subject 2 Marks");
var sub3Marks = prompt("Enter subject 3 Marks");

var sub1Marks = parseInt(sub1Marks);
var sub2Marks = parseInt(sub2Marks);
var sub3Marks = parseInt(sub3Marks);
var marks_obt = sub1Marks + sub2Marks + sub3Marks;

var per = (marks_obt / 300) * 100;

document.write('Total marks : ' + 300);
document.write('<br>Marks obtained : ' + marks_obt);
document.write('<br><br>Percentage : ' + per);
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
if (80 > per) {
    document.write('<br>Grade:  A-one');
    document.write('<br>Reamrks : Excellent');
}
else
    if (70 > per) {
        document.write('<br>Grade: A');
        document.write('<br>Reamrks : Good');
    }
    else
        if (60 > per) {
            document.write('<br>Grade:  B');
            document.write('<br>Reamrks : You need to improve');
        }
        else
            if (60 < per) {
                document.write('<br>Grade:  Fail');
                document.write('<br>Remarks : Sorry');
            }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
var secretNum = 7;
// Prompt user to guess the secret number.
var guessNum = prompt("Enter a number along the lines of 1-10");
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
if (guessNum == secretNum) {
    alert("Bingo! Correctanswer");
}
else
    // b. If the guessed number +1 is the secret number, show
    // “Close enough to the correct answer”.
    if (guessNum == secretNum + 1 || guessNum == secretNum - 1) {
        alert("Close enough to the correct answer");
    }
// 8.Write a program to check whether the given number isdivisible by 3. Show the message to the user if the number 
// is divisible by 3.
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
console.log(number + " is divisible by 3");
} else {
console.log(number + " is not divisible by 3");
}

// 9. Write a program that checks whether the given input is aneven number or an odd number.
var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
console.log(number + " is an even number");
} else {
console.log(number + " is an odd number");
}


// 10. Write a program that takes temperature as input and 
//     shows a message based on following criteria
//     a. T > 40 then “It is too hot outside.”
//     b. T > 30 then “The Weather today is Normal.”
//     c. T > 20 then “Today’s Weather is cool.”
//     d. T > 10 then “OMG! Today’s weather is so Cool.”
var temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
console.log("It is too hot outside.");
} else if (temperature > 30) {
console.log("The weather today is Normal.");
} else if (temperature > 20) {
console.log("Today's weather is cool.");
} else if (temperature > 10) {
console.log("OMG! Today's weather is so Cool.");
} else {
console.log("Invalid temperature.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//     a. First number
//     b. Second number
//     c. Operation (+, -, *, /, %)
//     Compute & show the calculated result to user
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
result = num1 + num2;
} else if (operation === "-") {
result = num1 - num2;
} else if (operation === "*") {
result = num1 * num2;
} else if (operation === "/") {
result = num1 / num2;
} else if (operation === "%") {
result = num1 % num2;
} else {
console.log("Invalid operation.");
}

if (result !== undefined) {
console.log("Result: " + result);
}





