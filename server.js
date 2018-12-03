// require modules

const 
    express = require('express'),
    app = express();
    // bodyParser = require('body-parser'),
    // db = require('./models');
    // ctrl = require('./controllers');

// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// HTML ENDPOINTS //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.listen(3000);