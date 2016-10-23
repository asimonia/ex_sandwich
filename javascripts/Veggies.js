console.log("Veggies up in here!");

var SandwichMaker = (function(maker) {

  
  var VeggiesPrices = {"white": 4.00, "wheat": 5.00, "rye": 6.00, "none": 0};

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
})(SandwichMaker);