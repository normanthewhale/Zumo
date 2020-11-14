module.exports = {
	name: 'insult',
	aliases: ['diss'],
	description: 'Generates a random insult directed at a user of your choice.',
	args: true,
	usage: '<user> <insult>',
	guildOnly: false,
	cooldown: 0,
	execute(message, args) {
        let insultList = ['cockalorum', 'snollygoster', 'pillock', 'lickspittle', 'smellfungus', 
                          'ninnyhammer', 'mumpsimus', 'milksop', 'hobbledehoy', 'pettifogger', 
                          'mooncalf', 'saltimbanco', 'smell-feast'];
        let user = args[0];
        let insult;
        if (args.length > 1) {
            let insultArray = args.slice(1);
            insult = insultArray.join(' ');
        } else {
            let index = Math.floor(Math.random() * insultList.length);
            insult = 'is a ' + insultList[index];
        }
        try {
            message.delete();
            message.channel.send(user + ' ' + insult);
        } catch (error) {
            message.channel.send(error);
        }  
	},
};