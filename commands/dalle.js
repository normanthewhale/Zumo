module.exports = {
	name: 'dalle',
	aliases: [],
	description: 'Generates images using the DALL-E AI model.',
	args: true,
	usage: '<prompt>',
	guildOnly: false,
	cooldown: 0,
	execute(message, args) {
		let prompt = args.join(' ');
		message.channel.send('The prompt is: ' + prompt);
	},
};