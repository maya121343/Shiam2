module.exports = {
 config: {
	 name: "🤗",
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
 if (event.body && event.body.toLowerCase() === "🤗") {
 return message.reply({
 body: "     「  আমি এ 2024 কখনো ভুলতে পারবো না🫠\n\n কারণ আমি এমন একজন মানুষ এর সাথে মিশেছিলাম \nযে আমাকে হাসতে শিক্ষায়ছে ❤️‍🩹🙂😅💔\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐬𝐡𝐢𝐚𝐦★~(◠‿◕✿)☆\n\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/PKTnfId.mp4")
 });
 }
 }
}
