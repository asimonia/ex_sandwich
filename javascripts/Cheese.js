let cheesePrices = {"american": 2.50, "cheddar": 3.70, "provolone": 3.10, "none": 0};


let addCheese = function(choice) {
    console.log('Choice', choice);
    var output = 0;
    var price = cheesePrices[choice];
    console.log("cheese price", price);
    output += price;
    return output;
};


let getCheesePrice = function(choice) {
    return cheesePrices[choice];
};


module.exports = {addCheese, getCheesePrice};

