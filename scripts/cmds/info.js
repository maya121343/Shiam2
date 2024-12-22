const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "info",
		author: "ArYan 🤡",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "INFO",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ArYanInfo = {
				name: '𝗠𝗗 𝗦𝗵𝗶𝗮𝗺 𝘁𝗮𝗳𝗲𝗱𝗲𝗿  ♥︎‿♥︎',
				gender: '𝐌𝐚𝐥𝐞',
				age: '18',
				Tiktok: '𝘀𝗵𝗶𝗮𝗺',
				Relationship: '𝘀𝗶𝗻𝗴𝗹𝗲',
				religion: '𝐈𝐬𝐥𝐚𝐦',
				facebook: 'https://www.facebook.com/md.shiam.tafeder?mibextid=ZbWKwL',
			};

			const ArYan = 'https://i.imgur.com/8wzfwlV.jpeg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(ArYan, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│𝐍𝐚𝐦𝐞: ${ArYanInfo.name}
│𝐆𝐞𝐧𝐝𝐞𝐫 : ${ArYanInfo.gender}
│𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 :${ArYanInfo.Relationship}
│𝐀𝐠𝐞 :${ArYanInfo.age}
│𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧: ${ArYanInfo.religion}
│𝐓𝐢𝐤𝐭𝐨𝐤 : ${ArYanInfo.instagram}
│𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: ${ArYanInfo.facebook}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ArYaninfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
