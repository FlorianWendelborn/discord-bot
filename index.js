var credentials = require('./credentials.json');

var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on('message', function (message){
    if(message.content === 'cyka') {
        bot.reply(message, ':horse:');
	}
});

bot.on('ready', function () {
	bot.setPlayingGame('League of Legends');
	for (var i = 0; i < bot.channels.length; i++) {
		if (bot.channels[i].name === 'general') {
			bot.sendMessage(bot.channels[i], ':horse:', {}, function (err, message) {
				setInterval(function () {
					bot.updateMessage(message, new Date().toTimeString(), {}, function () {});
				}, 1000);
			});
		}
	}
});

bot.on('userTypingStart', function (user, channel) {
	bot.sendMessage(channel, 'type faster, you fool @' + user.username, {});
});

bot.login(credentials.email, credentials.password);
