
// STEP 1
// Convert the following highlighted identifiers to Camel Case notation:
// let some_month
// function the Month()
// let current-month
// let summer_month
// let MyLibrary-function

// Here are the identifiers in camel case:
// someMonth
// theMonth
// currentMonth
// summerMonth
// myLibraryFunction

// STEP 2
// Give me an example of:
// - a numeric literal expression
// 5
// - a string literal expression
// "hi"
// - a Boolean literal expression
// true
// - a null literal expression
// null

// STEP 3
// Give me two examples of complex / variable expressions.
// x = 5
// 5 + 3

// STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: 
// First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
// Use Camel Casing and Hungarian Notation when naming your identifiers.

// Using camel case notation:
// let firstName;
// let lastName;
// let address;
// let city;
// let state;
// let zipCode;
// let yourAge;
// let referralSource;
// let mayWeContactYou;

// Using Hungarian notation:
// let strFirstName;
// let strLastName;
// let strAddress;
// let strCity;
// let strState;
// let strZipCode;
// let intYourAge;
// let strReferralSource;
// let boolMayWeContactYou;


// STEP 5
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways 
// for declaring and assigning values to those variables.

// declared using let:
// let firstName = "Bob";

// declared using const:
// const yourAge = 29;

// declared automatically:
// strLastName = "Smith";

// STEP 6
// Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.

// let myVar = 99 + "bottles_of_beer";
// console.log(myVar);

// STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

// let myVar1 = true + "Dat";
// console.log(myVar1);
// let myVar2 = 99 + true;
// console.log(myVar2);

// STEP 8
// Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString);

// No, it is not valid. It needs a backslash before the embedded single quote
// in I'm.  The following corrected version is valid:
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString);


// STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
// let myNullVar = null;
// console.log(myNullVar);
// let myUndefVar;
// console.log(myUndefVar);

// STEP 10
// Use the unary typeof operator on various literals to return the following types
// within the console window: string, number, Boolean, object, and undefined.

// // string
// console.log(typeof("five"));
// // number
// console.log(typeof(5));
// // Boolean
// console.log(typeof(true));
// // object
// console.log(typeof([]));
// // undefined
// console.log(typeof(aPreviouslyUnassignedVar));

// STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the
// alert box that appears as follows:

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// Substitute my name for your name. Although not necessary in practice, I want 
// you to use 2 concatenation operators to construct this string of text. One after 
// the text “Hello” and a second one after your name and before the comma.

// alert("Hello" + " Carol Sniegoski" + ", welcome to the JavaScript class!");

// STEP 12
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.

// let name = "Carol Sniegoski";
// alert("Hello " + name + ", welcome to the JavaScript class!");

// STEP 13
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but 
// using the variables as opposed to hard coded text.

// let name = "Carol Sniegoski";
// let course = "JavaScript";
// alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 14
// Rework the above string so that a line break is added right before
// the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

// let name = "Carol Sniegoski";
// let course = "JavaScript";
// alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user 
// for their name. The prompt’s response will now be captured in the name variable.

// let course = "JavaScript";
// let name = prompt("Please enter your full name: ");
// alert("Hello " + name + ".\nWelcome to the " + course + " class!");


// STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that 
// asks the user for the class they are taking. The prompt’s response will now be 
// captured in the course variable.

// let name = prompt("Please enter your full name: ");
// let course = prompt("Please enter the name of your course: ");
// alert("Hello " + name + ".\nWelcome to the " + course + " class!");


// STEP 17
// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.

// let x = 10;
// let y = 20;
// console.log(x + y);

// STEP 18
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

// let x = 20;
// x += 20;
// console.log(x);

// STEP 19
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.

// let x = 20;
// x *= 5;
// console.log(x);

// STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.

// let x = 20%3;
// x /= 1;
// console.log(x);

// STEP 21
// Using a set of Comparison and Logical operators, write an application that 
// evaluates to true and displays the result within the console window.

// console.log((5>4) || (4>=5));

// STEP 22
// Using a set of Comparison and Logical operators, write an application that 
// evaluates to false and displays the result within the console window. 
// The application cannot use the same operators used in the previous application.

//console.log(!(3==3));


