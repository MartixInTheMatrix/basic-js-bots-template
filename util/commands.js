const { SlashCommandBuilder } = require('@discordjs/builders');

const COMMANDS = {
        HELP: {
            name: 'help',
            description: 'Donne des informations sur l\'utilisation du bot !',
            interaction: new SlashCommandBuilder()
            .setName('help')
            .setDescription('Donne des informations sur l\'utilisation du bot !'),
        },
        
    
}
module.exports = {
    COMMANDS
}