var mongoose = require('mongoose');

var categorySchema = {
  _id: {type: String},
  parente: {
    type: String,
    ref: 'Category'
  },
  ancestors: [{
    type: String,
    ref: 'Category'
  }]
};

module.exports  new mongoose.Schema(cateogrySchema);
module.exports.categorySchema = categorySchema;
	
