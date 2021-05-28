const mongoose = require('mongoose')

const addSchema = mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        target: String,
        msg: String,
});

module.exports = mongoose.model('Customs', addSchema)