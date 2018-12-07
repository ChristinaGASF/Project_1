const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/associations', { useNewUrlParser: true } );

module.exports = {
    Restaurant : require('./restaurant'),
}