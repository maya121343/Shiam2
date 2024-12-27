module.exports = {
	config: {
		name: "shiamteach",
		version: "1.0",
		author: "shiam ッ",
		countDown: 5,
		role: 0,
		shortDescription: "sarcasm",
		longDescription: "sarcasm",
		category: "reply",
	},
	onStart: async function () { },
	onChat: async function ({ event, message }) {
		if (event.body) {
			const userMessage = event.body.toLowerCase().trim(); // Normalize the message
			switch (userMessage) {
				case "kamon aco":
					return message.reply("-আলহামদুলিল্লাহ \nআমি ভালো আছি🙂\n\n তুমি কেমন আছো...?");
				case "tumi ki khabar kheye boro hoiso?":
					return message.reply("না! আমি তো প্রশ্ন আর উত্তর খেয়ে বড় হয়েছি! 😄");
				case "tomar nam ki?":
					return message.reply("আমার নাম তোমার মন থেকে নেওয়া! 🤗");
				case "amar password vule gesi":
					return message.reply("তোমার পাসওয়ার্ড: '12345' চেষ্টা করো! 😂");
				case "bhalobasha ki ashol?":
					return message.reply("যখন তুমি হাসো, তখন সেটা সবচেয়ে সত্যি ভালোবাসা! 💕");
				case "tumi kothay thako?":
					return message.reply("তোমার মনে, আর কোথায়? 😍");
				case "amar moto keu ache?":
					return message.reply("না, তুমি একদম ইউনিক! 🌟");
				case "rat e kno vulbhasha ashe?":
					return message.reply("কারণ রাত হলো আবেগের সময়! 🌙");
				case "rainbow keno hoy?":
					return message.reply("প্রকৃতি তোমার হাসির মতো সুন্দর কিছু দেখাতে চায়! 🌈");
				case "cloud kothay jaye?":
					return message.reply("তোমার স্বপ্নের সাথে মিশে যায়! ☁️");
				case "amar jinis koi?":
					return message.reply("তোমার মনে খুঁজে দেখো, হয়তো সেখানে আছে! 🧐");
				case "bondhu kothay?":
					return message.reply("তোমার পাশে, শুধু মন দিয়ে তাকাও! 👫");
				case "bhalobashar dosh ki?":
					return message.reply("ভালোবাসা কখনো দোষ হতে পারে না, যদি সেটা সত্যি হয়! 💖");
				case "manush keno chena jay na?":
					return message.reply("কারণ মানুষকে মন দিয়ে বুঝতে হয়, চোখ দিয়ে নয়! 👀❤️");
				case "matha betha dur korbo kivabe?":
					return message.reply("এক কাপ চা খাও আর মিষ্টি করে হাসো! ☕😊");
				case "amar biye kobe?":
					return message.reply("যখন সময় হবে, তখন সব ঠিক হয়ে যাবে! ⏳");
				case "chokh kotha bole keno?":
					return message.reply("কারণ হৃদয়ের ভাষা চোখে প্রকাশ পায়! 👁️❤️");
				case "ranna kothay shikhbo?":
					return message.reply("তোমার মায়ের কাছ থেকে, সেরা শেফ তিনি! 🍳");
				case "amar chobi sundor naki?":
					return message.reply("তোমার চেহারা সুন্দর, তাই ছবিও সুন্দর! 📸");
				case "prem keno hoy?":
					return message.reply("কারণ হৃদয় একা থাকতে পারে না! 💕");
				case "sobai busy keno?":
					return message.reply("কারণ সবাই স্বপ্ন পূরণ করতে চায়! 🏃‍♂️💭");
				case "rat e ghum ashe na keno?":
					return message.reply("তোমার মন হয়তো নতুন স্বপ্ন নিয়ে ব্যস্ত! 🌌");
				case "bhalobasha na thakle ki hoy?":
					return message.reply("তাহলে জীবন হবে রঙহীন! 🎨");
				case "kharap din kobe sesh hobe?":
					return message.reply("যখন তুমি হাল ছাড়বে না, তখন! 💪");
				case "maya kothay?":
					return message.reply(" সিয়ামের হৃদয়ে🥹🫠 🌍❤️");
				case "maya":
					return message.reply(" attention everyone maya সিয়ামের লীগেল wife 😐😐 so সবাই ওর থেকে দূরত্ব বজায় রাখবেন নয়তো আইডি পোস্টার বানিয়ে আকাশে উড়াবো সোনামনি🙂🫂🌠");
				case "ami tomar best friend?":
					return message.reply("তুমি শুধু আমার বন্ধু না, তুমি আমার ফ্যামিলি! 🥰");
				case " maya namer meyera kemon":
					return message.reply(" 🤔🫤 কিছুটা রাগী বদ মেজাজি খানিকটা এলোমেলো সভাবের কিন্তু মনটা অনেক ভালো 🥰😊☺️✨");
				case "amar moto keo ache?":
					return message.reply("তুমি একদম অদ্বিতীয়! 🌟");
				case "ai duniya amader jonno?":
					return message.reply("হ্যাঁ, আমরা সবাই একে সুন্দর করে তোলার জন্য! 🌏✨");
				case "pahar keno uchu?":
				    return message.reply("যাতে আমরা স্বপ্নের উচ্চতা বুঝতে পারি! 🏔️");
				case "shiam":
					return message.reply("বস এখন কাজে ব্যস্ত আছে , যা বলার আমাকে বলুন");
				default:
					// Do nothing for other messages
					break;
			}
		}
	}
};
