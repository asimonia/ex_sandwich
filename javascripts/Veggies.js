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
