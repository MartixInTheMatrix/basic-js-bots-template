const config = require('../../util/config');
const { deploySlashCommands } = require('../../startup')
module.exports = async (Client) => {
    const statuses = [`statut 1`, 'statut 2'];
	var i = 0;

    setInterval(() => {
        Client.user.setActivity(statuses[i], {type:"PLAYING"});
        i = ++i % statuses.length
    }, 30000)
    

	console.log(`BotLog : Connecté en tant que ${Client.user.tag}`);
    deploySlashCommands(Client)
    console.log('BotLog : Commandes slash correctement enregistrées !')

}
