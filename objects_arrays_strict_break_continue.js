"use strict"; //run code in strict mode in browsers
/**
 *Objects -> key value pair
 * format -> key: value
 */

let person = {
  name: "Ragul",
  age: 26,
  gender: "Male",
  name: "Surya",
};

/* Dot notation to access  values in an object
    syntax: obj.key
    it will return value for corresponding key from the object
*/

console.log("Accessed using Dot(.) Notation");
console.log("Person Name: " + person.name);
console.log("Person Age: " + person.age);

/*  Bracket Notation to access a key's value in Object
    syntax: object[key]
    it will return value for corresponding key from the object
    
*/
console.log("Accessed using Bracket([]) Notation");

console.log("Person Name: " + person.name);
console.log("Person Age: " + person["age"]);

/**
 * Array -> is a datatype to store list of values
 */

let favorite_dishes = [
  { name: "Briyani", isFavorite: false },
  { name: "Naan", isFavorite: false },
  { name: "Coke", isFavorite: true },
];

console.log("Favorite Dish: ", favorite_dishes);
console.log("My favorite food is ", favorite_dishes[0]); // arrays always start with 0 in JS

/**
 * Array.length -> length is a property avilable in array
 * the length property holds the size of given array.
 * Array size refers to number of items in an array
 * Maximum index of an array can be calculated using the
 * formula: array size - 1
 *
 * continue -> is a keyword in JS to skip to next iteration of loop
 * without executing the code block further
 * break -> is a keyword used to stop / brake the execution of the loop
 */
for (let i = 0; i < favorite_dishes.length; i++) {
  if (!favorite_dishes[i].isFavorite) {
    console.log(favorite_dishes[i].name + " is not my favorite food");
    continue;
  }
  console.log(favorite_dishes[i].name + " is my favorite food");
}

console.log("Loop completed");
