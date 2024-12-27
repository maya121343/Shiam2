module.exports = {
 config: {
	 name: "🌚",
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
 if (event.body && event.body.toLowerCase() === "🌚") {
 return message.reply({
 body: "     「শূন্যতা আছে বলেই পূর্ণতার এতো কদর,সব যদি পূর্ণতা পায় তাহলে শূন্যতার গল্পঃ লিখবে কে..!😅💔🥀♥️\n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝕤𝕙𝕚𝕒𝕞★~(◠‿◕✿)☆\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/AmEnCxi.mp4")
 });
 }
 }
}
