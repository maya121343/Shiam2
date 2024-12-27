const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info2",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝕤𝕙𝕚𝕒𝕞 ッ ";
		const ownAge = "『 18 』";
		const messenger = "https://m.me/61567301076941";
		const authorFB = "https://www.facebook.com/ayat.chowdhury.936741";
		const authorNumber = "এইটা পার্সোনাল";
		const Status = "𝕤𝕚𝕟𝕘𝕝𝕖";
		const urls = [
"https://i.imgur.com/zLH9Akq.jpeg",
"https://i.imgur.com/yFGI6sF.jpeg",
"https://i.imgur.com/YIXBEo7.jpeg",
"https://i.imgur.com/Ny5fQOe.jpeg"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《 ⩸__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⩸ 》💫
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${authorName}
\📝彡𝐴𝑔𝑒  : ${ownAge}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Status}
\🌐彡𝑊𝑝 : ${authorNumber}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${authorFB}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 :⩸__${messenger}__⩸
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
    𝑻𝒈: https://t.me/কোনটার লিংক দিমু , ৯ টা আইড়ি
    𝑰𝒏𝒔𝒕𝒂: দিমু না 🥱 
    𝑪𝒂𝒑𝑪𝒖𝒕: কোনো আইড়ি নাই , এমনি এড়িট করার জন্য ব্যবহার করি।
    𝑻𝒊𝒌𝑻𝒐𝒌: আমি প্রতিবন্ধী না 🙂 
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: নিজের কোনো চ্যানেল নাই ☺️, এমনিতেই কারো YouTube premium লাগলে ইনবক্স করিও?
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
