// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;

// Setup Server
const server = app.listen(port, function () {
    console.log(`server running on port: http://localhost:${port}`);
})

// a GET route that returns the projectData object 
app.get('/all', function (req, res) {
    res.send(projectData)
    console.log('rquested data are retrived');
})

//a POST route that adds incoming data to projectData object
app.post('/addIncomingData', function (req, res) {

    let incominDdata = req.body;

    projectData = {
        temprature: incominDdata.temprature,
        date: incominDdata.date,
        userResponse: incominDdata.userResponse
    }
    console.log('incoming data are received');
})
