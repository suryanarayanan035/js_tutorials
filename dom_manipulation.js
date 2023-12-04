"use strict";

// list of elements iwth give class
let elements = document.getElementsByClassName("element");

console.log("elements", elements);
// elements[elements.length - 1].innerHTML = "Surya Narayanan";

let replacableElement = document.getElementById("replacable");
console.log("Inner HTML before replacement \n", replacableElement.innerHTML);
replacableElement.innerHTML = "NEw content";
console.log("Inner HTML after replacement \n", replacableElement.innerHTML);

// Put a heading html
//change the heading to show Javascript heading using JS
// log title is changed after changing the heading
