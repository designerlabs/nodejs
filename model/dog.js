var mongoose = require('mongoose');

var dogSchema = mongoose.Schema({
    name: {
        type:String,
        unique: true
    },
    age: Number,
    type: String
});

module.exports = mongoose.model('Dog', dogSchema);