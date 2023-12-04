const handleFormSubmit = (e) => {
  debugger;
  console.log();
};

//e ->contains information about the evnt happened
const handleChange = (e) => {
  if (e.target.type == "checkbox") {
    console.log(
      `value of ${e.target.value} is ${
        e.target.checked ? "Checked" : "UnChecked"
      }`
    );
  } else {
    console.log(`value of ${e.target.name} is ${e.target.value}`);
  }
};
const form = document.getElementById("add-car-form");
const titleInput = document.getElementsByName("title")[0];
const priceInput = document.getElementsByName("price")[0];
const fuelInputs = document.getElementsByName("fuel");
const typeInput = document.getElementsByName("type")[0];
const kindInputs = document.getElementsByName("kind");
for (let kindInput of kindInputs) {
  kindInput.addEventListener("change", handleChange);
}
typeInput.addEventListener("change", handleChange);
for (let fuelInput of fuelInputs) {
  fuelInput.addEventListener("change", handleChange);
}
titleInput.addEventListener("change", handleChange);
priceInput.addEventListener("change", handleChange);

form.addEventListener("submit", handleFormSubmit);
