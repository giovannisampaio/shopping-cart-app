var express = require('express');
var wagner = require('wagner-core');

// Bootstrap the Mongoose models using the models.js file
require('./models')(wagner);

var app = express();


// Bootstrap the application using the api.js file
// api.js will return an Express subrouter
// Express app will redirect to this router everytime URL starts with /api/v1
app.use('/api/v1', require('./api')(wagner));

// Start the HTTP server on port 3000
app.listen(3000);
console.log('Listening on port 3000!');
