module.exports = {
 config: {
	 name: "🤲",
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
 if (event.body && event.body.toLowerCase() === "🤲") {
 return message.reply({
 body: "     「°-۵༎-💚🌸\n\n━༊༎ ক্ষণিকের বিনোদনের জন্য নিজের অজান্তে༎۵༎࿐ 🍁🌼\n\n❥━༊༎ আমরা দিন দিন নিজেদেরকে অমানুষে পরিণত করতেছি।۵࿐\n\nআল্লাহ সবাইকে সঠিক বুঝ দান করুক। 🌸🍁\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n\n\n☆𝐚𝐡𝐢𝐚𝐦★~(◠‿◕✿)☆\n____ᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/vdIJnoJ.mp4")
 });
 }
 }
}
