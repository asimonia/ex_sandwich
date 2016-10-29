var SandwichMaker = (function() {

  var totalPrice = 0;

  return {
    addTopping: function(toppingPrice) {
    	totalPrice += toppingPrice;
    },
    removeTopping: function(toppingPrice) {
    	totalPrice -= toppingPrice;
    },
    getTotalPrice: function() {
    	return totalPrice;
    }
  };
})();