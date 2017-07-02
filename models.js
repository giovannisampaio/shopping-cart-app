// Set up Mongoose and the Category model
var mongoose = require('mongoose');

// Connects to MongoDB
module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/test');

  // Creates a Mongoose model by including the schema
  var Category = mongoose.model('Category', require('./category'), 'categories');
  
  // Register the Category service with Wagner
  wagner.factory('Category', function() {
    return Category;
  });
  
  return {
    Category: Category
  };
};
