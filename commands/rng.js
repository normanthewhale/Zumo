module.exports = {
	name: 'rng',
	description: 'Random number generator. Sends a random number between 1 and whatever number you input.',
	execute(message, args) {
        let randomNum = Math.floor((Math.random() * args[0]) + 1);;
		message.channel.send(randomNum);
	},
};