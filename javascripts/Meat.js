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