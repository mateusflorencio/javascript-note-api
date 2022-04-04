const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/javascriptNote',
    err => {
        if (err) throw err;
        console.log('connected to MongoDB')
    });