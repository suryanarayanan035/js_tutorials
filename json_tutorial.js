"use strict";
// JSON -> Javascript Object Notation

//WHY JSON / XML?
/**
 * Data Exchange Format - A Format in which data is shared between two systems.
 */

let obj = {
  name: "value",
  key: "value",
};

// Stringify - Converts JSON to JSON String
JSON.stringify();

async function getData() {
  return await fetch("https://jsonplaceholder.typicode.com/posts");
}

let data = 123;
let response = getData().then(async (response) => {
  data = await response.json(); // Object
  console.log("Keys in data", Object.keys(data));

  for (let key in data) {
    console.log("Post id: " + data[key].id);
    console.log("Post title: " + data[key].title);
  }

//optional chaining operator -> ?.
//   console.log("Post 1 Title", data[200]?.title.toUpperCase());
});

//Parse -> Converts JSON String to JSON

//Object.keys will return a list of keys in the object

// console.log("Keys In Object:", Object.keys(obj));
// console.log("Values In Object:", Object.values(obj));
// console.log("Entries In Object", Object.entries(obj));

// let arr = ["1", "2", "3"];
// let arr = undefined;
let arr = ["1", "2", "3"];

console.log("value at 3", arr?.[3]?.toUpperCase());


// Assessment 
// Fetch Data from an API
async function getData() {
  return await fetch("https://jsonplaceholder.typicode.com/posts");
}
let data = 123;
let response = getData().then(async (response) => {
  data = await response.json();
    /**
     * Students code
     */

}// Object
//Create ellement for each post
// get the stringfied json
// make use of for in loop