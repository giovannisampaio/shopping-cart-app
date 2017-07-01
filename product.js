var mongoose = require('mongoose');
var Category = require('./category');

// this schema represents what will be displayed on a individual product view
// product's name, list of pictures, price and category

var productSchema = {
	name: {type: String, required: true},
	// Pictures must start with "http://"
	pictures: [{ type: String, match: /^http:\/\//i }],
	price: {
	  amount: {type: Number, required: true }.
	  // Only 3 supported currencies for now
	  currency: {
            type: String,
            enum: ['USD', 'EUR', 'GBP'], 
	    required: true
          }
	},
	category: Category.categorySchema
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;

