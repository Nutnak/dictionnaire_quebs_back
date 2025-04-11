const mongoose = require('mongoose')

const { Schema } = mongoose;

const schema = new Schema({
    name: {type: String, required: true},
    explication: {type: String, required: true},
    exemple: {type: String, required: true},
    pseudonyme: {type: String, required: true},
    isvisible: {
        type: Boolean,
        default: false
    },
})

const definition = mongoose.model('definition', schema);


module.exports = definition