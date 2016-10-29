console.log("Cheese up in here!");

var SandwichMaker = (function(maker) {

  
  var cheesePrices = {"american": 2.50, "cheddar": 3.70, "provolone": 3.10, "none": 0};

  // Augment the original object with another method
  maker.addCheese = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = cheesePrices[choice];
    console.log("cheese price", price);
    output += price;
    return output;
  };

  // Get cheese prices
  maker.getCheesePrice = function(choice) {
  	return cheesePrices[choice];
  }

  return maker;
})(SandwichMaker || {});