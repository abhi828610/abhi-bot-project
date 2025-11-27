const fs = require("fs");
module.exports.config = {
	name: "raam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "raam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("RAAM")==0 || event.body.indexOf("raam")==0 || event.body.indexOf("JAI SHREE RAAM")==0 || event.body.indexOf("jai shree raam")==0) {
		var msg = {
				body: "꧁🚩जय श्री राम🚩꧂*",
				attachment: fs.createReadStream(__dirname + `/noprefix/ram.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🚩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
