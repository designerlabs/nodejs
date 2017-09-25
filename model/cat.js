var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
    name: {
        type:String,
        unique: true
    },
    age: Number,
    type: String
});

module.exports = mongoose.model('Cat', catSchema);