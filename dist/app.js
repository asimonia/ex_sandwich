(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let breadPrices = {"white": 4.00, "wheat": 5.00, "rye": 6.00, "none": 0};

// Augment the original object with another method
let addBread = function(choice) {
	console.log('Choice', choice);
	var output = 0;
	var price = breadPrices[choice];
	console.log("bread price", price);
	output += price;
	return output;
};

// Get bread prices
let getBreadPrice = function(choice) {
	return breadPrices[choice];
};


module.exports = {addBread, getBreadPrice};


},{}],2:[function(require,module,exports){
let cheesePrices = {"american": 2.50, "cheddar": 3.70, "provolone": 3.10, "none": 0};


let addCheese = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = cheesePrices[choice];
    console.log("cheese price", price);
    output += price;
    return output;
};


let getCheesePrice = function(choice) {
    return cheesePrices[choice];
};


module.exports = {addCheese, getCheesePrice};


},{}],3:[function(require,module,exports){
let condimentsPrices = {"ketchup": 0.20, "mustard": 0.45, "mayo": 0.75, "none": 0};

// Augment the original object with another method
let addCondiments = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = condimentsPrices[choice];
    console.log("condiments price", price);
    output += price;
    return output;
};

// Get condiments prices
let getCondimentsPrice = function(choice) {
    return condimentsPrices[choice];
};

module.exports = {addCondiments, getCondimentsPrice};



},{}],4:[function(require,module,exports){
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
},{"./Bread":1,"./Cheese":2,"./Condiments":3,"./Meat":5,"./Veggies":7,"./sandwichmaker":6}],5:[function(require,module,exports){
let meatPrices = {"turkey": 2.25, "bacon": 4.50, "salami": 3.75, "none": 0};


let addMeat = function(choice) {
  console.log('Choice', choice);
  var output = 0;
  var price = meatPrices[choice];
  console.log("meat price", price);
  output += price;
  return output;
};

// Get bread prices
let getMeatPrice = function(choice) {
	return meatPrices[choice];
};


module.exports = {addMeat, getMeatPrice};
},{}],6:[function(require,module,exports){
let totalPrice = 0;


let addTopping = function(toppingPrice) {
  	totalPrice += toppingPrice;
};

let removeTopping = function(toppingPrice) {
  	totalPrice -= toppingPrice;
};

let getTotalPrice = function() {
  	return totalPrice;
};


module.exports = {addTopping, removeTopping, getTotalPrice};
},{}],7:[function(require,module,exports){
let VeggiesPrices = {"lettuce": 0.50, "tomato": 0.75, "pickle": 0.60, "none": 0};

// Augment the original object with another method
let addVeggies = function(choice) {
  console.log('Choice', choice);
  var output = 0;
  var price = VeggiesPrices[choice];
  console.log("Veggies price", price);
  output += price;
  return output;
};

// Get Veggies prices
let getVeggiesPrice = function(choice) {
	return VeggiesPrices[choice];
};


module.exports = {addVeggies, getVeggiesPrice};

},{}]},{},[4]);
