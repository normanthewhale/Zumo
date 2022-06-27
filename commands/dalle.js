const { request } = require('undici');

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
        const catResult = await request('https://aws.random.cat/meow');
        const { file } = await getJSONResponse(catResult.body);
        message.channel.send('Executed.');
        async function getJSONResponse(body) {
            let fullBody = '';
        
            for await (const data of body) {
                fullBody += data.toString();
            }
        
            return JSON.parse(fullBody);
        }
	},
};