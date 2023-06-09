                    // ARRAYS AND LOOP
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var emptyArray = [];

// // 2. Declare and initialize a multidimensional array 
// // representing the following matrix:
// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];
// console.log(matrix);

// // 3. Write a program to print numeric counting from 1 to 10.
// for (i = 1; i < 11; i++) {
//   document.write(i + "<br>")
// }

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user

// Get the table number and length from the user
var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

// Print the multiplication table
document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");

for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  document.write(tableNumber + " * " + i + " = " + result + "<br>");
}

// 5. Write a program to print items of the following array 
// using for loop:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h3>Fruits:</h3>");

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser.

document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h3>Reverse counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var input = prompt('Welcome to ABC bakery,what do you want to order Sir/Madam ?');

if (arr.includes(input)) {
    var index = arr.indexOf(input);
    alert(input + ' is available at index ' + index + ' in our bakery.');
  } else {
    alert('We are Sorry ' + input + ' is not available in our bakery.');
  }
// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

var A = [24,53,78,91,12]
var largestNumber = A[0]
document.write('<h3>Array items</h3>'+ A+'</br>');

for (var i=0; i<A.length; i++) {
if (A[i] > largestNumber){
largestNumber = A[i];
}
}
document.write('<h3>Largest Number</h3>' + '</br>')
document.write("The largest Number in the array is " + largestNumber)

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var smallest = Math.min.apply(null, A);
console.log(smallest);


// 10.Write a program to print multiples of 5 ranging 1 to 
// 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }