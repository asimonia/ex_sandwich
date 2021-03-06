let condimentsPrices = {"ketchup": 0.20, "mustard": 0.45, "mayo": 0.75, "none": 0};

// Augment the original object with another method
let addCondiments = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = condimentsPrices[choice];
    console.log("condiments price", price);
    output += price;
    return output;
};

// Get condiments prices
let getCondimentsPrice = function(choice) {
    return condimentsPrices[choice];
};

module.exports = {addCondiments, getCondimentsPrice};


