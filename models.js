// Set up Mongoose and the Category model
var mongoose = require('mongoose');
var _ = require('underscore');

// Connects to MongoDB
module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/test');

  // Creates a Mongoose model by including the schema
  var Category = 
    mongoose.model('Category', require('./category'), 'categories');
  var Product = 
    mongoose.model('Product', require('./product'), 'products');
  
  var models = {
    Category: Category,
    Product: Product
  };

  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key,function() {
      return value;
    });
  // Register the Category service with Wagner
  // wagner.factory('Category', function() {
  //   return Category;
  // });
  
  return {
    Category: Category
  };
};
