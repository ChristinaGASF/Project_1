const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/associations', { useNewUrlParser: true } );

module.exports = {
    User : require('./user'),
    Restaurant : require('./restaurant'),
}