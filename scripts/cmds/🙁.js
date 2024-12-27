module.exports = {
 config: {
	 name: "🙁",
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
 if (event.body && event.body.toLowerCase() === "🙁") {
 return message.reply({
 body: "     「 পুরুষ হয়ে জন্মাইয়া দেখলাম\n\n মায়ের ভালোবাসা ছাড়া বাকি সব কিছুতেই \n\nটাকা দরকার...!!💶🙂\n\n\n 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐬𝐡𝐢𝐚𝐦★~(◠‿◕✿)☆\n\nᑘᒪᒪᗩSᕼ ッ」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/l7o0Ttf.mp4")
 });
 }
 }
}
