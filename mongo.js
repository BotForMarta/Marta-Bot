const mongoose = require('mongoose');
const { mongoPath } = require('./config.json');

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,

    })
    const db = mongoose.connection;
    return db;
}