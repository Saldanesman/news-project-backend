const express = require('express');
const app = express();


// Import MongoDB conexion
const fileDB = require('./connection');


// Import routes and news model
const routenew = require('./routes/new');



// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/new', routenew);

app.get('/', (req, res) => {
  res.end('Welcome to the backend server');

});

// Server Configuration 
app.listen(5000, function() {
  console.log("The server is running correctly");
});
