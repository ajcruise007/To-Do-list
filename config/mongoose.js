//Require the mongoose library
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost/todo_db');

//Verify the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to db'));
db.once('open', function () {
  console.log('Successfully connected to the database');
});
