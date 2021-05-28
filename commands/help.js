const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    message.channel.send(`This is all the commands available :
    **!add <Something> <Bot Reply>** - Add a new reply from the bot.
    **!info** - General Stat about the bot.`);

    console.log('Commands !' + this.config.name + ' has been used by ' + message.author.username);
}

module.exports.config = {
    name: "help",
    description: "All the commands avaible"
}