"use strict";
/**
 * Function: is something that performs a task
 */

//declaring and defining a function
function add(num1, num2 = 2) {
  console.log("num1 : ", num1);
  console.log("num2 : ", num2);
  console.log(`${num1} + ${num2} = `, num1 + num2);
  return num1 + num2;
}

//assigning anonymous function to an variable
let sub = function (num1, num2) {
  return num1 - num2;
};

//Arrow functions
let multiply = (num1, num2) => {
  let result = num1 * num2;
  console.log("multiplication result: ", result);
  return result;
};

// add();
// add(5); // invoking a function
// sub();
// multiply(5, 5);

console.log("Welcome to calendar application");
console.log("Press 1 to perform addition");
console.log("Press 2 to perform subtraction");
console.log("Press 3 to perform multiplication");
console.log("Press 4 to perform division");

while (true) {
  const option = parseInt(prompt("Please enter an input") ?? 0);
  if (option == -1) {
    break;
  }
  const num1 = parseInt(prompt("Enter first number"));
  const num2 = parseInt(prompt("Enter second number"));
  if (option == 1) {
    alert("The result of addition is " + add(num1, num2));
  }
  if (option == 2) {
    alert("The result of subtraction is " + sub(num1, num2));
  }
}

//complete this calculator application
// use switch case to handle conditions
// keep on asking the user for input for infinite number of time
// stop asking the user for input if the input is -1
