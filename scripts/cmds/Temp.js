const { TempMail } = require("1secmail-api");

function generateRandomId() {
    var length = 6;
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var randomId = '';

    for (var i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomId;
}

module.exports = {
    config: {
        name: 'tmp',
        version: '2.1.0',
        author: "☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆|Ullash ッ", // not change credits
        countDown: 5,
        role: 0,
        shortDescription: 'Generate temporary email (auto get inbox)',
        category: 'generate',
        guide: {
            en: '[tempmail]'
        }
    },

    onStart: async function ({ api, event }) {
        const reply = (msg) => api.sendMessage(msg, event.threadID, event.messageID);

        try {
            // Generate temporary email
            const mail = new TempMail(generateRandomId());

            if (mail) {
                // Send only the email address
                reply(mail.address);
            }

            // Fetch function
            const fetch = () => {
                mail.getMail().then((mails) => {
                    if (!mails[0]) {
                        return;
                    } else {
                        let b = mails[0];
                        // Updated inbox message structure
                        var msg = `📍|𝗧𝗲𝗺𝗽𝗺𝗮𝗶𝗹 𝗜𝗻𝗯𝗼𝘅\n━━━━━━━━━━━━━━━\n\n🔎 𝗙𝗿𝗼𝗺\n${b.from}\n📭 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n➤ ${b.subject || 'Not Found'}\n\n📝 𝗠𝗲𝘀𝘀𝗮𝗴𝗲\n➤ ${b.textBody}`;
                        reply(msg + `\n\n📌|𝗡𝗼𝘁𝗲: 𝗧𝗵𝗶𝘀 𝗺𝗮𝗶𝗹 𝘄𝗶𝗹𝗹 𝗯𝗲 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗹𝗹𝘆 𝗱𝗲𝗹𝗲𝘁𝗲𝗱.`);
                        return mail.deleteMail();
                    }
                });
            };

            // Auto fetch every 3 seconds
            fetch();
            setInterval(fetch, 3 * 1000);

        } catch (err) {
            console.error(err);
            return reply(`❌|An error occurred. Please try again later.`);
        }
    }
};
