module.exports = {
	name: 'rng',
	aliases: [],
	description: 'Random number generator. Sends a random number between 1 and whatever number you input.',
	args: true,
	usage: '<number>',
	guildOnly: false,
	cooldown: 0,
	execute(message, args) {
        let randomNum = Math.floor((Math.random() * args[0]) + 1);
		message.channel.send(randomNum);
	},
};