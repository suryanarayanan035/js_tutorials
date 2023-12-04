"use strict";
let element = document.getElementById("container");
function addPaddingToContainer() {
  console.log("Container", element);
  element.style.padding = "1rem";
}

function initialActions() {
  let numberOfItems = parseInt(prompt("Number of items you want to see"));
  let i = 1;
  while (i <= numberOfItems) {
    let item = document.createElement("span");
    item.innerHTML = "Item " + i;
    item.classList.add("item");
    item.classList.add("item-extended");
    element.appendChild(item);
    i++;
  }
}

addPaddingToContainer();
initialActions();
