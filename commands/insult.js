module.exports = {
	name: 'insult',
	aliases: ['diss'],
	description: 'If no insult parameter is present it will generate a random insult directed at a user of your choice. If you have any insults you would like to add please DM @normanthewhale with your suggestion.',
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