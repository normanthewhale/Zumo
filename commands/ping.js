module.exports = {
	name: 'ping',
	aliases: [],
	description: 'Ping!',
	args: false,
	usage: '',
	guildOnly: false,
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};