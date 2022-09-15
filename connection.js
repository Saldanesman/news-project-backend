const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/newsserver');

const objectdb = mongoose.connection;

objectdb.on('connected', () => { console.log('Correct connection to MongoDB') });
objectdb.on('error', () => { console.log('Error connecting to MongoDB') });

module.exports = mongoose;