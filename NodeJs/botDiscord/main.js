const discord = require('discord.js');
const taverneiro = require('./bob/taverneiro');
const roller = require("./utils/roller");
const help = require("./help");

const bot = new discord.Client();
const bob = new taverneiro.Taverneiro();
const roll = new roller.Roller();

bot.on("message", msg => {
    if(msg.content === "!ping"){
        msg.channel.send("Pong!");
    }
    else if(msg.content.match(/[bB]ob,? um copo de/) && msg.author.username != "Taverneiro"){
        msg.channel.send(bob.bebida(msg));
    }
    else if(msg.content === "!ajuda"){
        msg.channel.send(help);
    }
    else if(msg.content.startsWith("!roll")){
        msg.channel.send(roll.getRoll(msg));
    }
});

bot.login("NjcxMTg1NjU0NDYxMjM1MjAx.Xi5R5A.GnGmS0f1FDuxSglVC7vj9fn-foY");