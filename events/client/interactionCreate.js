const Discord = require('discord.js');

module.exports = async (Client, interaction) => {
    if(!interaction.isCommand())return;
	
	let date = new Date()

	const command = Client.commands.get(interaction.commandName);
	const today = Client.convertDate(date)

	if (!command) return;

	try {
		await command.interaction(Client, interaction, dbGuild, today, dbUser);
		console.log('BotLog : ' + interaction.user.tag + ' a éxectué la commande ' + interaction.commandName)

	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'Il y a eu une erreur !' });
	}

}