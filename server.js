// require express and other modules
const express = require('express');
const app = express();

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });   

// bodyParser = require('body-parser'),
const db = require('./models');
// ctrl = require('./controllers');

// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

// ROUTES
// serve static files from public folder
app.use(express.static(__dirname + '/public'));


// HTML ENDPOINTS //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

// JSON ENDPOINTS
app.get('./user', (req, res) => {
    res.json({
      name: "",
      message: "",
      githubUsername: "", 
      githubLink: "",
      personalSiteLink: "",
      githubProfileImage:"",
      currentCity: "San Francisco, California",
      homeTown: "",
    })
  });

//SERVER
// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
  });