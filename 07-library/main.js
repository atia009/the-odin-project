// constructor
function Drink(name, size, temperature, category, tried) {
    this.name = name;
    this.size = size;
    this.temperature = temperature;
    this.category = category;
    this.hasTried = tried;
}

// prototypes
Drink.prototype.setComment = function(comment) {
    this.comment = comment;
}
