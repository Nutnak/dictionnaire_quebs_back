const mongoose = require('mongoose')

const { Schema } = mongoose;

const schema = new Schema({
    name: String,
    definition: String,
    exemple: String,
    pseudonyme: String,
    isvisible: {
        type: Boolean,
        default: false
    },
})

const definition = mongoose.model('definition', schema);


module.exports = definition