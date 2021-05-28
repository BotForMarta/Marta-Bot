const Discord = require('discord.js');
const mongoose = require('mongoose');
const db  = require('../mongo.js');
const addSchema = require('../models/add_schema.js');
const { ObjectID } = require('bson');
const result = ('../index.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    const { author } = message
    const { id } = author
    targetuser = message.content.split(" ")[1];
    msguser = message.content.substr(message.content.indexOf(" ") + 1);
    msguser2 = msguser.substr(msguser.indexOf(" ") + 1);

    const item = new addSchema(
        {
                _id: mongoose.Types.ObjectId(), 
                target: targetuser,
                msg: msguser2,
        },
    )
    //if(targetuser == item.target) { message.channel.send('This word is already used! Do you want to delete it?')}
    //else {
    item.save(function (err) {
        if (err) return handleError(err);

        console.log('A custom reply has been added.')
    });
//}

}

module.exports.config = {
    name: "add"
}