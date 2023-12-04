// spead operator(...)

let items = [1, 2, 3, 4, 5];
console.log("Before Spreading List", items);
items = [6, 7, ...items, 9, 10];
console.log("After spreading List", items);
let object = {
  name: "Surya narayanan",
  Age: 54,
};
console.log("Before spreading Object", object);
object = { gender: "Male", name: "Ragul", ...object };
console.log("After spreading Object", object);

//new Date and toLocaleString
let today = new Date();
console.log(today.toLocaleString());

let dateString = "11/24/2023";
console.log("Today's Date: ", today.getDate());
console.log("Current Month: ", today.getMonth());
console.log("Current Year: ", today.getFullYear());

let customDate = new Date(2023, 9, 31, 14, 27, 38, 0, 90); //JS Month starts from 0 and ends in 11
console.log("Custom Date Created: ", customDate.toLocaleString());

let customStringDate = new Date("2023/10/25 13:20:35:89"); //JS Month starts from 0 and ends in 11
console.log("Custom String Date Created: ", customStringDate.toLocaleString());

console.log("Extracting Time Data");
console.log("Hours: ", customStringDate.getHours());
console.log("Minnutes: ", customStringDate.getMinutes());
console.log("Seconds: ", customStringDate.getSeconds());
console.log("Milli Seconds: ", customStringDate.getMilliseconds());

console.log(
  "Indian Time:",
  customStringDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
);

console.log(
  "Indonesian Time:",
  customStringDate.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
);

// Age calculator
//user enters date of birth.
// We need to display the age of user and the number of days he lived in an alert box.
