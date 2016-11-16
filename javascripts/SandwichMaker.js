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