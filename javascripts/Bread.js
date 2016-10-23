console.log("Bread up in here!");

var SandwichMaker = (function(maker) {

  
  var breadPrices = {"white": 4.00, "wheat": 5.00, "rye": 6.00, "none": 0};

  // Augment the original object with another method
  maker.addBread = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = breadPrices[choice];
    console.log("bread price", price);
    output += price;
    return output;
  };

  // Get bread prices
  maker.getBreadPrice = function(choice) {
  	return breadPrices[choice];
  };

  return maker;
})(SandwichMaker);