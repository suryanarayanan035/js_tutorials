let string = "             1234567890 ";
let duplicate;
//string is also a type of array.
console.log("Length of given string is: ", string.length);

duplicate = string.trim(); //String.trim() does not modify original string

console.log(
  `Length of given string without spaces "${duplicate}" is: `,
  duplicate.length
);

console.table([string, duplicate]);

//removes space from the start of the string
console.log(
  `Length of given string without spaces in start "${string.trimStart()}" is: `,
  string.length
);

//removes space from end of the string
console.log(
  `Length of given string without spaces in end "${string.trimEnd()}" is: `,
  string.length
);

let str1 = "String 1";
let str2 = "String 2";

//concat - combines two strings
console.log("The concatenation of str1 + str2 is: ", str1.concat(" - ", str2));

//
let smallAlphabets = "zabcdefghijklmnopqrstuvwxyz368";
let capitalAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(
  "The uppercase value of smallAlphabets is: ",
  smallAlphabets.toUpperCase()
);

console.log(
  "The lowercase value of capitalAlphabets is: ",
  capitalAlphabets.toLowerCase()
);

let trimmedSmallAlphabets = smallAlphabets.trim();
let lastCharacter = trimmedSmallAlphabets.charAt(
  trimmedSmallAlphabets.length - 1
);
console.log("The character at position 25: ", lastCharacter);

let zIndex = trimmedSmallAlphabets.lastIndexOf("Z");
console.log(`The index of ${trimmedSmallAlphabets[zIndex]} is ${zIndex}`);

let statement = "Let's make it quick";
console.log(
  `Is the statement "${statement}"  begins with Let's?`,
  statement.startsWith("Let's")
);

console.log(
  `Is the statement "${statement}"  ends with quick?`,
  statement.endsWith("quick")
);

let mainString = "Lets have ablast";
console.log(
  "Substring from position 5 to 10 is: ",
  mainString.substring(-99, mainString.length)
);

console.log("The substring starting from 7 is", mainString.slice(-9, -5));
console.log("Is '1' == 1(Loose Equality): ", "1" == 1);
console.log("Is '1' === 1(Strict Equality): ", "1" === 1);

// from the given string find the index of given character -> create it as a function
// number of vowels and consonants present in a given string -> create it as a function
