module.exports = {
	name: 'insult',
	aliases: ['diss'],
	description: 'Generates a random insult directed at a user of your choice.',
	args: true,
	usage: '<user> <insult>',
	guildOnly: false,
	cooldown: 0,
	execute(message, args) {
        let insultList = ['is peepee poopoo']
        let user = args[0];
        let newInsult;
        if (args.length() > 1) {
            newInsult = args.unshift().join(' ');
            insultList.push(newInsult);
            message.channel.send(user + ' ' + randomNum);
        } else {
            let randomInsult = insultList[Math.floor((Math.random() * insultList.length()) + 1)];
            message.channel.send(user + ' ' + randomInsult);
        }
	},
};