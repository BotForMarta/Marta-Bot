const Discord = require ('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const mongo = require('./mongo.js');
const fs = require("fs");
const addSchema = require('./models/add_schema.js');
const add = require('./commands/add.js');
const mongoose = require('mongoose');
const { Mongoose } = require('mongoose');

//When bot run
bot.on('ready', async () => {

    //Logs
    console.log('Gucci Discord Bot v1.0');
    console.log('Started with sucess!');
    console.log(`Logged as ${bot.user.tag}`);
    console.log('-------------------------');
    console.log('|           LOGS        |');
    console.log('-------------------------');

    await mongo().then(mongoose => {
        try {
            console.log('Mongo = OK.')
        } catch(err) { console.log(err); }
        })

    //Bot Visual Config
    bot.user.setStatus('dnd');
    setTimeout(() => {
        bot.user.setActivity('!help for commands list.');
    }, 100)
});

//Commands
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");

    if (jsfile.length <= 0) {
        return console.log("No command found!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);

        bot.commands.set(pull.config.name, pull);
    });
});
bot.on("message", async message => {

    if (message.author.bot || message.channel.type === "dm") return;
    
    let prefix = "!";
    let messagearray = message.content.split(" ")
    let cmd = messagearray[0];
    let args = message.content.trim().split(/ +/g);

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if (commandfile) commandfile.run(bot, message, args);
});

bot.on("message", message => {

    target_low = message.content.toLowerCase();

    if(message.author.bot) return;
    if(message.content.startsWith("!")) return;
        var target_val = target_low.split(" ")[0];
        addSchema.findOne({target:target_val}, function(err, result) {
            if(result)
            if(target_val == result.target) {
                message.channel.send(result.msg)
                console.log("A custom reply has been used.");
                console.log(target_low);
            }
          });
    });

bot.on("message", message => {
    if(message.author.bot) return;
        if(message.content.startsWith("!clear")) {

            message.delete();

                if(message.member.hasPermission('MANAGE_MESSAGES')) {

                    let args = message.content.trim().split(/ +/g);

                    if(args[1]) {

                        if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){
                        
                            message.channel.bulkDelete(args[1]);
                            console.log(`${args[1]} messages has been deleted.`);
                        }
                    }
                }
            }
        })
bot.login(process.env.token)