Question # 1
/*
Object Property Access
•
Question: Create an object named car with properties make, model, and year. How would you access and print the model of the car?

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
  };
  console.log(car.model);
  console.log(car["model"]);*/

Question # 2
/*
Array Iteration
•
Question: Given an array of numbers, write a for loop that prints each number in the array.




let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
 
    console.log(numbers[i]);
}*/

 Question# 3

/*
 Array Sum Function
•
Question: Write a function that takes an array of numbers as an argument and returns the sum of all elements in the array.

 function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  

  let numbers = [10, 20, 30, 40];
  let result = sumArray(numbers);
  
  console.log(result); */ 

  Question # 4

 /*
 Date Manipulation
•
Question: How would you create a new Date object in JavaScript and extract the current year from it?
 
 
 let currentDate = new Date();  
let currentYear = currentDate.getFullYear();  

console.log(currentYear); */ 


Question # 5

/*
If-Else Statement
•
Question: Write a function that takes a number as an argument and returns "Positive" if the number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is 0.


function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
 
  console.log(checkNumber(5)); 
  console.log(checkNumber(-3)); 
  console.log(checkNumber(0)); */ 

Question # 6

/*
While Loop
•
Question: Write a while loop that prints numbers from 1 to 5.



While Loop
•
Question: Write a while loop that prints numbers from 1 to 5.





let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}*/

Question # 7

/* Math Operations
•
Question: Write a function that calculates the square root of a number using JavaScript's Math object.


function calculateSquareRoot(num) {
    return Math.sqrt(num);
  }
  
  
  console.log(calculateSquareRoot(25)); 
  console.log(calculateSquareRoot(9));   */

  Question # 8

  /*Array Filtering
•
Question: Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    return numbers.filter(function(num) {
      return num % 2 === 0;
    });
  }
  
  
  let numbers = [1, 2, 3, 4, 5, 6];
  let evenNumbers = filterEvenNumbers(numbers);
  
  console.log(evenNumbers);  */

 
 
  Question # 9

  /* Function with Default Parameters
•
Question: Create a function that multiplies two numbers. If the second number is not provided, it should default to 10.

function multiply(num1, num2 = 10) {
    return num1 * num2;
  }
  

  console.log(multiply(5));    
  console.log(multiply(5, 3));   */
  
Question # 10
/*

Object Methods
•
Question: Create an object calculator with methods add, subtract, multiply, and divide. Each method should take two numbers as arguments and return the result of the corresponding operation.

let calculator = {
    add: function(num1, num2) {
      return num1 + num2;
    },
    subtract: function(num1, num2) {
      return num1 - num2;
    },
    multiply: function(num1, num2) {
      return num1 * num2;
    },
    divide: function(num1, num2) {
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    }
  };
  
  
  console.log(calculator.add(5, 3));       
  console.log(calculator.subtract(5, 3));   
  console.log(calculator.multiply(5, 3));   
  console.log(calculator.divide(5, 0));   
  console.log(calculator.divide(5, 2));  */ 


  Question # 11
  
/*
  Nested If-Else
•
Question: Write a function that checks a student's grade and returns "A" for marks above 90, "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below 70.

function checkGrade(marks) {
    if (marks > 90) {
      return "A";
    } else if (marks >= 80 && marks <= 90) {
      return "B";
    } else if (marks >= 70 && marks < 80) {
      return "C";
    } else {
      return "F";
    }
  }
    */
      Question # 12

      /*
      Array Length
      •
      Question: How do you find the length of an array in JavaScript?



      let fruits = ['apple', 'banana', 'orange', 'grape'];
let length = fruits.length;

console.log(length)  */

Question # 13

/*
13. For Loop with Break
•
Question: Write a for loop that iterates through an array of numbers and breaks the loop when it encounters the number 5.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    break;  
  }
  console.log(numbers[i]);
*/
Question # 14
/*

Date Comparison
•
Question: Write a function that takes two dates as arguments and returns true if the first date is earlier than the second date.



let dateA = new Date('2024-01-01');
let dateB = new Date('2024-12-31');

console.log(isFirstDateEarlier(dateA, dateB));  
console.log(isFirstDateEarlier(dateB, dateA)); */

Question # 15

/*
Switch Statement
•
Question: Write a switch statement that takes a day of the week (1 for Monday, 2 for Tuesday, etc.) and returns the name of the day.


function getDayName(day) {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid day";

console.log(getDayName(1)); 
console.log(getDayName(5));  
console.log(getDayName(8));*/


Question # 1
/*
Sum of Two Numbers
Write a function sum(a, b) that takes two numbers as arguments and returns their sum.
Example: sum(3, 4) should return 7.


function sum(a, b) {
    return a + b;
  }
  
  console.log(sum(3, 4));  
  console.log(sum(10, 5)) */

  Question # 2

  
/*
  Check Even or Odd
Write a function isEven(n) that returns true if the number n is even, and false if it's odd.
Example: isEven(5) should return false.
  
function isEven(n) {
    return n % 2 === 0; 
  }
  
  
  console.log(isEven(5));
  console.log(isEven(4));  
  console.log(isEven(0)); 
  console.log(isEven(-2))

  */
  Question # 3
/*
  Maximum of Three Numbers
Write a function maxOfThree(a, b, c) that takes three numbers and returns the largest of the three.
Example: maxOfThree(5, 8, 3) should return 8.


function maxOfThree(a, b, c) {
    
    return Math.max(a, b, c);
  }
  
  
  console.log(maxOfThree(5, 8, 3));   
  console.log(maxOfThree(10, 15, 7));  
  console.log(maxOfThree(-1, -5, -3)); */

  Question # 4

/*
  function reverseArray(arr) {
    let reversed = [];  
  

    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);  /
    
  
    return reversed;  
  }
  
  
  console.log(reverseArray([1, 2, 3]));   
  console.log(reverseArray(['a', 'b', 'c']));

  */






