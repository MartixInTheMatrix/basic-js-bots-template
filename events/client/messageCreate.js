const Discord = require("discord.js");
const config = require('../../util/config')

module.exports = async (Client, message) => {
 // Début
 if(!message.content.startsWith(config.prefix) || message.author.bot || message.channel.type == "dm") return;

 //Séparation et traitment messages
 var args = message.content.slice(config.prefix.length).split(' ');
 var args = args.filter(a => !!a);
 const commandName = args.shift();
 const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
 if(!command) {
     return;
 } else console.log(`BotLog : Commande ${commandName} par ${message.author.tag}`);
 
 // Exportation des différentes constants.
 command.message(Client, message, args);
}
