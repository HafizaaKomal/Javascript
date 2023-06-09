// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10
document.write("The value of a is: " + a + '</br>')
document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,," + '</br>');

var val = 10+1
document.write("The value of ++a is: " +val + '</br>'+ "Now the value of a " +" is: " + val + '</br>');
var val2 = val+1
document.write("The value of a++ is: " +val + '</br>'+ "Now the value of a " +" is: " + val2 + '</br>');


var val3 = --a+2
document.write("The value of --a is: " + val + '</br>' + "Now the value of a " +" is: " + val3 + '</br>')
var val4 = a-- +1
document.write("The value of a-- is: " + val + '</br>' + "Now the value of a " +" is: " + val4+ '</br>')



//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

var a =2, b=1
var a1 = --a - --b
document.write("a is: "+a1 + '</br>')
var a2 = --a - --b + ++b;
document.write("b is: "+a2 + '</br>')
var a3 = --a - --b + ++b + b--;
document.write("result: "+a3 + '</br>')

// 3. Write a program that takes input a name from user & 
// greet the user
// Prompt the user to enter their name
var username = prompt("Enter your name:");

// Greet the user with their name
alert("Hello, " + username + "! Welcome!");

// Output the greeting to the console
console.log("Hello, " + username + "! Welcome!");

// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
var inputNum = prompt("Enter a number");
var inputNum = +inputNum;
for (i = 1; i < 11; i++) {
    multi = i * inputNum;
    document.write(inputNum + '*' + i + '=' + multi + '<br>');
}

// 6. Take
    var subject1 = prompt("Enter name for subject 1:");
    var subject2 = prompt("Enter name for subject 2:");
    var subject3 = prompt("Enter name for subject 3:");

    // Define total marks for each subject
    var totalMarks = 100;

    // Prompt the user to enter obtained marks for each subject
    var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
    var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
    var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

    // Calculate total marks and percentage
    var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    // Display the result in a table on the web page
    document.write("<table>");
    document.write("<h1>question 6</h1>")
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
    document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
    document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
    document.write("</table>");
