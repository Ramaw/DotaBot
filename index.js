// require the discord.js module
const { prefix, token } = require('./config.json');
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

//Message Listening
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content === (`${prefix}ping`)) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
	else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour Rank: ${message.author.id}`);
	}
	else if (command === 'rank') {
		// grab the "first" mentioned user from the message
		// this will return a `User` object, just like `message.author`
		if (args.length == 0) {
			return message.reply('You need to provide a link to a steam profile!');
		}
		else if(!args[0].startsWith("https://steamcommunity.com/id/")){
			return message.reply(`You must provide a valid steam link`)
		}
		const profile = args[0];
	
		message.channel.send(`You linked the profile: ${profile}`);
		//message.channel.send(`You wanted to rank: ${taggedUser.username}`);
	}
});

// login to Discord with your app's token
client.login(token);