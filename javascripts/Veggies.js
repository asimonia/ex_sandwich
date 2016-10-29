console.log("Veggies up in here!");

var SandwichMaker = (function(maker) {

  
  var VeggiesPrices = {"lettuce": 0.50, "tomato": 0.75, "pickle": 0.60, "none": 0};

  // Augment the original object with another method
  maker.addVeggies = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = VeggiesPrices[choice];
    console.log("Veggies price", price);
    output += price;
    return output;
  };

  // Get Veggies prices
  maker.getVeggiesPrice = function(choice) {
  	return VeggiesPrices[choice];
  }

  return maker;
})(SandwichMaker || {});