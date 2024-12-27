module.exports = {
 config: {
	 name: "😥",
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
 if (event.body && event.body.toLowerCase() === "😥") {
 return message.reply({
 body: "     「 😅🌺\n\n\nআমি এতটা খারাপ না যততা সবাই বলে।\nআমার ভাগ্যই খারাপ.....☺️\n\n তাই সবজায়গা থেকে দুরে ঠেলে দেওয়া হয় 🥲🙂\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐬𝐡𝐢𝐚𝐦★~(◠‿◕✿)☆\n\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/xZD2FL3.mp4")
 });
 }
 }
}
