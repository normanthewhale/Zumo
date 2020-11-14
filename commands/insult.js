module.exports = {
	name: 'insult',
	aliases: ['diss'],
	description: 'Generates a random insult directed at a user of your choice.',
	args: true,
	usage: '<user> <insult>',
	guildOnly: false,
	cooldown: 0,
	execute(message, args) {
        let insultList = ['is peepee poopoo!', 'has bad breath.', 'doesn\'t shower.'];
        let user = args[0];
        let insult;
        if (args.length > 1) {
            let insultArray = args.unshift();
            insult = insultArray.join(' ');
            let insultExists = insultList.some(i => i === insult);
            if (!insultExists) {
                insultList.push(insult);
            }
        } else {
            let index = Math.floor(Math.random() * insultList.length + 1)
            insult = insultList[index];
        }
        try {
            message.channel.send(user + ' ' + randomInsult);
        } catch (error) {
            message.channel.send(error);
        }  
	},
};