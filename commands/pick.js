module.exports = {
	name: 'pick',
	description: 'Picks a random game to play.',
	execute(message, args) {
        const games = ['OSRS', 'Grounded', 'Rocket League', 'Stardew Valley', 'Fall Guys', 'Go to bed!', 'Valorant', 'Among Us', 'Fortnite', 'Trailmakers', 'Sea of Thieves', 'Minecraft', 'CodingD'];
        let theGame = games[Math.floor((Math.random() * games.length))];
		message.channel.send('You should play: ' + theGame);
	},
};