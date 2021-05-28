const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.delete();
    message.channel.send(`**General Bot Stats**

    🌐 Servers: Serving **${bot.guilds.cache.size}** servers.
    📺 Channels: Serving **${bot.channels.cache.size}** channels.
    👥 Server Users: Serving **${bot.users.cache.size}**
    ⏳ Ping: **${Math.round(bot.ws.ping)}ms**
    :speech_balloon: Join Date: `+ bot.user.createdAt);

            console.log('Commands !' + this.config.name + ' has been used by ' + message.author.username);
    }

    module.exports.config = {
        name: "info"
    }