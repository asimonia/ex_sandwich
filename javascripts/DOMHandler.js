// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
var selectedChecked;

// Elements on page
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var meatChooser = document.getElementById("meat");
var veggiesChooser = document.getElementById("veggies");
var makeSandwich = document.getElementById("makeSandwich");


/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = SandwichMaker.getBreadPrice(selectedTopping);
  console.log("price", price);
  console.log("topping", selectedTopping);
  console.log("checked", selectedChecked);

  // If checked, add the topping to the SandwichMaker to increase the total price
  if (selectedChecked) {
    SandwichMaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the SandwichMaker to decrease the total price
  if (!selectedChecked) {
  	SandwichMaker.removeTopping(price);
  }
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = SandwichMaker.getCheesePrice(selectedTopping);
  console.log("price", price);
  console.log("topping", selectedTopping);
  console.log("checked", selectedChecked);

  // If checked, add the topping to the SandwichMaker to increase the total price
  if (selectedChecked) {
    SandwichMaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the SandwichMaker to decrease the total price
  if (!selectedChecked) {
  	SandwichMaker.removeTopping(price);
  }
});

condimentsChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = SandwichMaker.getCondimentsPrice(selectedTopping);
  console.log("price", price);
  console.log("topping", selectedTopping);
  console.log("checked", selectedChecked);

  // If checked, add the topping to the SandwichMaker to increase the total price
  if (selectedChecked) {
    SandwichMaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the SandwichMaker to decrease the total price
  if (!selectedChecked) {
  	SandwichMaker.removeTopping(price);
  }
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = SandwichMaker.getMeatPrice(selectedTopping);
  console.log("price", price);
  console.log("topping", selectedTopping);
  console.log("checked", selectedChecked);

  // If checked, add the topping to the SandwichMaker to increase the total price
  if (selectedChecked) {
    SandwichMaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the SandwichMaker to decrease the total price
  if (!selectedChecked) {
  	SandwichMaker.removeTopping(price);
  }
});

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = SandwichMaker.getVeggiesPrice(selectedTopping);
  console.log("price", price);
  console.log("topping", selectedTopping);
  console.log("checked", selectedChecked);

  // If checked, add the topping to the SandwichMaker to increase the total price
  if (selectedChecked) {
    SandwichMaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the SandwichMaker to decrease the total price
  if (!selectedChecked) {
  	SandwichMaker.removeTopping(price);
  }
});


makeSandwich.addEventListener("click", function() {
	// Calculate the final sandwich price
	finalSandwichPrice = SandwichMaker.getTotalPrice();
	document.getElementById("cost").innerHTML = finalSandwichPrice.toFixed(2);

});