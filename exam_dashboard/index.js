console.log("DOM is loaded");

/*
Classes - Classes can be considered as blueprints in real life
In javascript classes are blueprints for objects

Object - Object is an instance of a class.
This is very similar to real word objects
This will have properties and can perform functions.
*/
class User {
  constructor(name, mark) {
    // this = {}
    this.name = name;
    // this = {name: name}
    this.mark = mark;
  }
  getResult = () => {
    return this.mark > 40 ? "Passed" : "Failed";
  };
}

/**
 * to create an object of a class, we need to use the
 * new keyword followed by classname and parantheses
 * initialize or create an empty object = {}
 * set the value of this keyword to empty object
 *
 */

let user1 = new User("Surya", 70);
let user2 = new User("Ragul", 90);
let user3 = new User("Binushya", 50);
let user4 = new User("Pritam", 40);
let user5 = new User("Sathish", 60);
let user6 = new User("Kishore", 60);
let user7 = new User("Divya", 70);
let user8 = new User("Preethi", 80);
let user9 = new User("Krishna", 90);
let user10 = new User("Paramesh", 80);
let user11 = new User("Haritha", 70);
let user12 = new User("Mukesh", 60);
let user13 = new User("Narayanan", 50);
let user14 = new User("Vishal", 0);
let user15 = new User("Vijay", 10);
let user16 = new User("Vimal", 100);
let user17 = new User("Viji", 30);
let user18 = new User("Kamal", 40);
let user19 = new User("Rajini", 50);
let user20 = new User("SK", 70);

function getCardHTML(user) {
  const { name, mark, getResult } = user;
  return `
<div class="card">
        <img src="./user-avatar.png" class="profile-pic"/>
        <div class="card-header">${name}</div>

        <div class="card-body">
            <div> Mark: ${mark}</div>
            <div> Result: <span class="${
              getResult() == "Passed" ? "pass" : "fail"
            }">${getResult()}</span></div>
        </div>
    </div>
`;
}
let users = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
  user11,
  user12,
  user13,
  user14,
  user15,
  user16,
  user17,
  user18,
  user19,
  user20,
];

let container = document.getElementsByClassName("container")[0];
for (let user of users) {
  console.log(user);
  container.insertAdjacentHTML("beforeend", getCardHTML(user));
}

function addNewUser(event) {
  // event.preventDefault();
  let name = document.getElementById("name");
  let marks = document.getElementById("marks");
  // alert("name value " + name.value);
  // alert("marks value " + marks.value);
  container.insertAdjacentHTML(
    "afterbegin",
    getCardHTML(new User(name.value, marks.value))
  );
}

document.getElementById("user-form").addEventListener("submit", addNewUser);
