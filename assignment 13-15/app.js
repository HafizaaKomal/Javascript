                        // ARRAYS
// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var studentNames = new Array();
    console.log(studentNames);

// 3. Declare and initialize a strings array.

var stringsArray = ["apple", "banana", "cherry", "date"];
    console.log(stringsArray);

// 4. Declare and initialize a numbers array.

var numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false, true, false];
    console.log(booleanArray);

// 6. Declare and initialize a mixed array.

var mixedArray = ["Komal", 21, true, "Mango", false];
console.log(mixedArray);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var educationalQualification = []
educationalQualification= ["1) SSC"+ '</br>'+"2) HSC"+'</br>'+ "3) BCS" +'</br>'+ "4) BS"+ '</br>'+ "5) BCOM"+ '</br>'+ "6) MS"+ '</br>'+"7) M.PHILL"+ '</br>'+ "8) PHD"]
document.write('<h2>QUALIFICATION</h2>' + educationalQualification+ '</br>');

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var studentNames = ["Aliza", "Nashwa", "Shakeeba"];
var scores = [420, 380, 450];
 
var totalMarks = 500;

// Displaying scores and percentages
for (let i = 0; i < studentNames.length; i++) {
  var studName = studentNames[i];
  var score = scores[i];
  var percentage = (score / totalMarks) * 100;

  console.log("Student Name: " + studName);
  console.log("Score: " + score);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log();
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colors = ["red", "green", "blue", "yellow", "orange"];
console.log(colors);
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var newColor = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(newColor);
console.log(colors);
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
var newColor = prompt("Enter a color to add to the end of the array:");
colors.push(newColor);
console.log(colors);
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
colors.unshift("pink", "purple");
console.log(colors);
// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
console.log(colors);
// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
console.log(colors);
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
var index = parseInt(prompt("Enter an index to add a color:"));
var newColor = prompt("Enter a color name:");
colors.splice(index, 0, newColor);
console.log(colors);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var index = parseInt(prompt("Enter an index to delete colors:"));
var count = parseInt(prompt("Enter how many colors to delete:"));
colors.splice(index, count);
console.log(colors);

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

function sortStudentScores(scores) {
  scores.sort(function (a, b) {
    return a - b;
  });
}
var studentScores = [80, 95, 75, 85, 90];
console.log("Before sorting:", studentScores);
sortStudentScores(studentScores);
console.log("After sorting:", studentScores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Initialize array with city names
let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Initialize selectedCities array
let selectedCities = [];

// Copy three array elements from cities to selectedCities
selectedCities = cities.slice(1, 4);

// Display the selectedCities array
console.log("Selected Cities:", selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:

var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
console.log("Single String:", singleString);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
var first = queue.shift();
var second = queue.shift();
var third = queue.shift();

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var stack = [];
stack.push("first");
stack.push("second");
stack.push("third");
var third = stack.pop();
var second = stack.pop();
var first = stack.pop();


// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:


var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='phoneList'>");
for (var i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");