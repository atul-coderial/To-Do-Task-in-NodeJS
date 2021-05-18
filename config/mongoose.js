//load the mongoose library
const mongoose = require('mongoose');

//connect the database
mongoose.connect('mongodb://localhost/todo_tasks_db');

//aquire the connection
const db = mongoose.connection;

//check it is successfully connected to database
db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function(){
    console.log('Successfully connected to the database');
});