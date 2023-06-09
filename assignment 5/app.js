//MATH EXPRESSIONS 
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var mess = "sum of 5 and sum of 3 is "
var num1 = 5 ;
var num2 =  3 ;
var ner = num1 + num2
document.write( mess + ner), '<br>';

//2. Repeat task1 for subtraction, multiplication, division & modulus.

// Prompt user to enter the first number
var num1 = parseFloat(prompt("Enter the first number:"));

// Prompt user to enter the second number
var num2 = parseFloat(prompt("Enter the second number:"));

// Perform subtraction and store the result in a new variable
var subtraction = num1 - num2;

// Perform multiplication and store the result in a new variable
var multiplication = num1 * num2;

// Perform division and store the result in a new variable
var division = num1 / num2;

// Perform modulus and store the result in a new variable
var modulus = num1 % num2;

// Display the results in the browser
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is:  ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

 var variable = "value after decleration is: "

 var initial = 8;
 document.write('<br>', "Initial value:" + initial)

var increment = "Value after increment is:";
var num = 9;
document.write('<br>', increment + num);

var addition = "Value after addition is:"
var num1 = num + 7;
document.write('<br>', addition + num1);

var decrement = "Value after decrement is:"
var num2 = num1 - 1;
document.write('<br>', decrement + num2);

var reaminder = "The reaminder is:";
var remain = num2 % 3
document.write('<br>', reaminder + remain, '<br>' )

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output

var ticketPrice = "600"
var cost = ticketPrice * 5;
document.write('<br>', "Total cost to buy a 5 tickets to a movie is " + cost + "PKR")

//5. Write a script to display multiplication table of any number in your browser.
 
document.write('<br>', "<h3>Table = 6</h3>"); 
let table = 6
  for (let i = 1; i <= 10; i++) {
    document.write(  '<br>', table+" X " + i + " = " +  table*i, '<br>' );
  }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

document.write('<br>', "<h4>Celsius to Fahrenheit</h4>"); 
var Celsius = 75
var Fahrenheit = (Celsius*9/5) + 32
document.write(Celsius + " °C is " + Fahrenheit + " ℉" + '</br>')

document.write('<br>', "<h4> Fahrenheit to Celsius</h4>"); 

var Fahrenheit = 56
var Celsius = (Fahrenheit-32)*5/9
document.write(Fahrenheit + " ℉ is " +Celsius + '</br>'  )

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables

// // Store the price of item 1
var item1Price = 500;

// Store the price of item 2
var item2Price = 750;

// Store the ordered quantity of item 1
var item1Quantity = 2;

// Store the ordered quantity of item 2
var item2Quantity = 3;

// Store the shipping charges
var shippingCharges = 100;

// Compute the total cost
var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
var totalCost = subtotal + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: " + item1Price + " PKR</p>");
document.write("<p>Price of Item 2: " + item2Price + " PKR</p>");
document.write("<p>Ordered Quantity of Item 1: " + item1Quantity + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<p>Subtotal: " + subtotal + " PKR</p>");
document.write("<p>Total Cost: " + totalCost + " PKR</p>");
//8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
document.write('<br>', "<h3>Marks Sheet</h3>"); 

var totalMark = 980
document.write("Total Marks = " + totalMark, '<br>')

var marksObta = 804
document.write("Marks Obtained = " + marksObta, '<br>')

var per = (marksObta / totalMark)*100
document.write("Percentage = " + per+ "%", '<br>')


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write('<h2>Curreny in PKR</h2>' + '</br>');
var totalcurreny= 1048+700;
document.write('Total Currency in PKR: ' + totalcurreny  + '</br>');


// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write('<h2>Arithmatic of the sequence</h2>' + '</br>');

var numb = 15+5*10/2
document.write(numb)

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write('<h2>Age Calculator</h2>' + '</br>');
var currentYear =2023
 var DOB = 2007
 var differenceAge =currentYear-DOB
 document.write(differenceAge)

//  12. The Geometrizer: Calculate properties of a circle.
//  a. Store a radius into a variable.
//  MATH EXPRESSIONS | JAVASCRIPT
//  Page 8 of 9
//  b. Calculate the circumference based on the radius, and
//  output “The circumference is NN”.
//  (Hint : Circumference of a circle = 2 π r , π = 3.142)
//  Calculate the area based on the radius, and output “The 
//  area is NN”. (Hint : Area of a circle = π r2, π = 3.142
document.write('<h2>The Geometrizer</h2>' + '</br>');

var rad = 20
document.write("Radius of a circle: " +rad + '</br>')
rad = 2*3.142*20
document.write(rad + '</br>')
rad = 3.142*20**2
document.write("The Area is: "+ rad)


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// // Store your favorite snack into a variable
var favoriteSnack = "Chocolate";

// Store your current age into a variable
var currentAge = 30;

// Store a maximum age into a variable
var maximumAge = 80;

// Store an estimated amount per day (as a number)
var amountPerDay = 2;

// Calculate how many snacks you would eat total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacks = daysRemaining * amountPerDay;

// Output the result to the screen
console.log("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");