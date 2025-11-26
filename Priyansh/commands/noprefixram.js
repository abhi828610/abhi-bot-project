const fs = require("fs");
module.exports.config = {
	name: "mahadev",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mahadev",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mahadev")==0 || event.body.indexOf("Har har")==0 || event.body.indexOf("Bhole")==0 || event.body.indexOf("Shiv")==0) {
		var msg = {
				body: "──────────────────
꧁🚩जय श्री राम🚩꧂
──────────────────*",
				attachment: fs.createReadStream(__dirname + `/noprefix/ram.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
