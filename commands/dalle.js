import fetch from 'node-fetch';

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
        const response = await fetch('https://api.github.com/users/github');
        const data = await response.json();

        console.log(data);
        // let requestURL = 'https://backend.craiyon.com/generate';
        // let request = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: '{"prompt": "'+ prompt +'"}'
        // }
        // fetch(requestURL, request).then(response => {
        //     response.json();
        // }).then(data => {
        //     console.log(data);
        //     message.channel.send('The response was successful!');
        // }).catch(error =>{
        //     console.error(error);
        //     message.channel.send('There was an error.');
        // });
	},
};