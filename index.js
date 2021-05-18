//Load library of express
const express = require('express');
//Assign the port no.
const port = 8000;
//Calling the database connection
const db = require('./config/mongoose');
//calling the models
const Tasks = require('./models/todo_tasks');
//calling the express functions in app 
const app = express();
//set views to render the home page in the browser
app.set('view engine', 'ejs');
app.set('views', 'views');
//Form data is URL encoded to read an attributes of form
app.use(express.urlencoded());
//Accessing the assets in the middleware with ejs
app.use(express.static('assets'));

//Responsing the home page to the browser
app.get('/', function(req, res){
    
    Tasks.find({}, function(err, tasks){
        if(err){
            console.log('Error to fetching the data', err);
            return;
        }
        return res.render('home', {
            title: "To-Do List",
            todo_task: tasks
        });
    });
});

//Form Submitting data is called
app.post('/submit_todo_tasks', function(req, res){
    console.log(req.body);

    //Create a task to insert in the database
    Tasks.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    }, function(error, newTask){
        if(error){
            console.log('Error to creating the task', error);
            return;
        }
        console.log('************', newTask);
        return res.redirect('back');
    });
});

//Deleting the tasks in the database
app.get('/delete_tasks', function(req, res){
    let id = req.query.value;
    console.log(id);
});

//listing the server
app.listen(port, function(err){
    if(err){
        console.log('Error is occured at running the server', err);
    }
    console.log('Server is successfully running on port:', port);
})