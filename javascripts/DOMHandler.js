let bread = require('./Bread');
let cheese = require('./Cheese');
let condiments = require('./Condiments');
let meat = require('./Meat');
let sandwichmaker = require('./sandwichmaker');
let veggies = require('./Veggies');
 

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
  var price = bread.getBreadPrice(selectedTopping);

  // If checked, add the topping to the sandwichmaker to increase the total price
  if (selectedChecked) {
    sandwichmaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the sandwichmaker to decrease the total price
  if (!selectedChecked) {
  	sandwichmaker.removeTopping(price);
  }
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = cheese.getCheesePrice(selectedTopping);


  // If checked, add the topping to the sandwichmaker to increase the total price
  if (selectedChecked) {
    sandwichmaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the sandwichmaker to decrease the total price
  if (!selectedChecked) {
  	sandwichmaker.removeTopping(price);
  }
});

condimentsChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = condiments.getCondimentsPrice(selectedTopping);


  // If checked, add the topping to the sandwichmaker to increase the total price
  if (selectedChecked) {
    sandwichmaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the sandwichmaker to decrease the total price
  if (!selectedChecked) {
  	sandwichmaker.removeTopping(price);
  }
});

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = meat.getMeatPrice(selectedTopping);
  console.log("price", price);
  console.log("topping", selectedTopping);
  console.log("checked", selectedChecked);

  // If checked, add the topping to the sandwichmaker to increase the total price
  if (selectedChecked) {
    sandwichmaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the sandwichmaker to decrease the total price
  if (!selectedChecked) {
  	sandwichmaker.removeTopping(price);
  }
});

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.name;
  selectedChecked = event.target.checked;

  // Determine the price of the topping chosen
  var price = veggies.getVeggiesPrice(selectedTopping);

  // If checked, add the topping to the sandwichmaker to increase the total price
  if (selectedChecked) {
    sandwichmaker.addTopping(price);
  }

  // If unchecked, subtract the topping to the sandwichmaker to decrease the total price
  if (!selectedChecked) {
  	sandwichmaker.removeTopping(price);
  }
});


makeSandwich.addEventListener("click", function() {
	// Calculate the final sandwich price
	finalSandwichPrice = sandwichmaker.getTotalPrice();
	document.getElementById("cost").innerHTML = finalSandwichPrice.toFixed(2);

});