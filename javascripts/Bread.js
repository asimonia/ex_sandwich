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

