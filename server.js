const express = require('express');
const app = express();
var bodyParser=require('body-parser');
const port = 3000;
var opn= require('opn');
var routeSignUp = require('./Routes/SignUp');
var routeLogin=require('./Routes/Login');
var routeCompany=require('./Routes/Company');
var routeAddCompany=require('./Routes/AddCompany')
var routeAddDepartment=require('./Routes/AddNewDepartment')

// Setting up the public directory
// Configuration

app.use(bodyParser.urlencoded({    //obligatoire 
    extended: true
 }));                 
 
app.use(bodyParser.json());

app.use(express.static('public'))



// API'S
app.use(routeSignUp);
app.use(routeLogin);
app.use(routeCompany);
app.use(routeAddCompany);
app.use(routeAddDepartment);

app.listen(port, () => {console.log(`listening on port ${port}!`);
//opn("http://localhost:3000/vue/login.html")
});