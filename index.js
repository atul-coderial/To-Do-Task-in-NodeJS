//Load library of express
const express = require('express');
//Assign the port no.
const port = 8000;
//calling the express functions in app 
const app = express();

//set views to render the home page in the browser
app.set('view engine', 'ejs');
app.set('views', 'views');

//Accessing the assets in the middleware with ejs
app.use(express.static('assets'));
//Responsing the home page to the browser
app.get('/', function(req, res){
    return res.render('home', {
        title: "To-Do List",
    })
})

//listing the server
app.listen(port, function(err){
    if(err){
        console.log('Error is occured at running the server', err);
    }
    console.log('Server is successfully running on port:', port);
})