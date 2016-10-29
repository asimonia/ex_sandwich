console.log("Meat up in here!");

var SandwichMaker = (function(maker) {

  
  var meatPrices = {"turkey": 2.25, "bacon": 4.50, "salami": 3.75, "none": 0};

  // Augment the original object with another method
  maker.addMeat = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = meatPrices[choice];
    console.log("meat price", price);
    output += price;
    return output;
  };

  // Get bread prices
  maker.getMeatPrice = function(choice) {
  	return meatPrices[choice];
  }

  return maker;
})(SandwichMaker || {});