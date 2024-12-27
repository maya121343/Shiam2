module.exports = {
 config: {
	 name: "😘",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "😘") {
 return message.reply({
 body: "     「কিরে 𝐥𝐮𝐜𝐡𝐮★~(◡﹏◕✿) \n এত 𝐜𝐡𝐮𝐦𝐮 𝐜𝐡𝐮𝐦𝐢 করিস কেনো 🐸 \n\n ভালো হয়ে যাও মাসুদ ভালো হইতে পয়সা লাগে না 😒💔🥹\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆shiam🥱🤧☆-----ᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/2kaxerV.mp4")
 });
 }
 }
}
