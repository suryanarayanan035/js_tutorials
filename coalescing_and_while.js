console.log("Nullish Coalescing");

/*prompts
  description:
    it prompts a user to input a value in a pop-up like modal
  returns:
    null -> if a user clicks null or left the input field empty
    value -> returns the string enterd by user if the uuser clicks on OK after entering a value in input feld.
*/
let billAmount = prompt("Enter your bill amount"); //return null if cancel is clicked
let promoCode = prompt("Promocode"); //promoCode -> '50off' || ''
/*
  OR(||) -> It is an operator used to perform or logic on given operands
  it returns the first truthy value it finds in a given expression
  parseInt:
    it is a function to convert string to integer
    returns:
      value -> returns he integer value of given string
*/
billAmount = parseInt(billAmount || 100);
const discountPercentage = promoCode ? 0.5 : 0.1;
const finalAmount = billAmount - billAmount * discountPercentage;
console.log(billAmount, discountPercentage, finalAmount);
alert("Your total bill amount is: " + finalAmount);

// While Loop
let i = 11;
do {
  console.log(`Looped for ${i} time`);
  i = i + 1;
} while (i <= 10);

// i++ -> post increment
// ++i -> pre increment
for (i = 0; i <= 10; ++i) {
  console.log("I value is: ", i);
}
