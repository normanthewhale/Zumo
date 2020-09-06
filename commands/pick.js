module.exports = {
	name: 'pick',
	aliases: ['pag', 'game?', 'bored'],
	description: 'Picks a random game to play.',
	args: false,
	usage: '',
	guildOnly: false,
	cooldown: 0,
	execute(message, args) {
		const games = ['OSRS', 'Grounded', 'Rocket League', 'Stardew Valley', 'Fall Guys', 'Go to bed!', 'Valorant', 'Among Us', 'Fortnite', 'Trailmakers', 
					   'Sea of Thieves', 'Minecraft', 'Coding'];
        let theGame = games[Math.floor((Math.random() * games.length))];
		message.channel.send('You should play: ' + theGame);
	},
};