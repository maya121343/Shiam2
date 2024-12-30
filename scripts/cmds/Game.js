module.exports = {
  config: {
    name: "game",
    version: "1.0",
    author: "SKY",
    shortDescription: {
      en: "Bet game",
    },
    longDescription: {
      en: "A simple betting game. You can double your bet or lose it.",
    },
    category: "game",
  },
  langs: {
    en: {
      invalid_amount: "𝗩𝗲𝘂𝗶𝗹𝗹𝗲𝘇 𝗺𝗶𝘀𝗲𝗿 𝘂𝗻𝗲 𝘀𝗼𝗺𝗺𝗲 💚",
      not_enough_money: "𝗧'𝗮𝘀 𝗽𝗮𝘀 𝗮𝘀𝘀𝗲𝘇 𝗱'𝗮𝗿𝗴𝗲𝗻𝘁 𝗽𝗼𝘂𝗿 𝗺𝗶𝘀𝗲𝗿 𝗰𝗲𝘁𝘁𝗲 𝘀𝗼𝗺𝗺𝗲💚",
      win_message: "🌺 ════ •⊰❂⊱• ════ 🌺\n🎉🎉🎉𝗙𝗲́𝗹𝗶𝗰𝗶𝘁𝗮𝘁𝗶𝗼𝗻 !🎉🎉🎉\n 𝗧'𝗮𝘀 𝗴𝗮𝗴𝗻𝗲́ 『%1』𝗯𝗮𝗹𝗹𝗲𝘀 \n🎉   𝗕𝗶𝗲𝗻 𝗷𝗼𝘂𝗲́.!!!🎉   \n🌺 ════ •⊰❂⊱• ════",
      lose_message: "❌════ •⊰😁⊱• ════❌\n𝗧'𝗮𝘀 𝗽𝗲𝗿𝗱𝘂『%1』𝗯𝗮𝗹𝗹𝗲𝘀 🤣\n𝗠𝗲𝗿𝗰𝗶 𝗽𝗼𝘂𝗿 𝘁𝗲𝘀 %1€ 🤣\n❌════ •⊰😁⊱• ════ ",
    },
  },
  onStart: async function ({ args, message, event, envCommands, usersData, commandName, getLang }) {
    const { senderID } = event;
    const userData = await usersData.get(senderID);
    const betAmount = parseInt(args[0]);

    if (isNaN(betAmount) || betAmount <= 0) {
      return message.reply(getLang("invalid_amount"));
    }

    if (betAmount > userData.money) {
      return message.reply(getLang("not_enough_money"));
    }

    const win = Math.random() < 0.5; // 50% chance to win

    let winnings = 0;

    if (win) {
      winnings = betAmount * 5; // Double the bet if won
    } else {
      winnings = -betAmount; // Lose the bet if lost
    }

    await usersData.set(senderID, {
      money: userData.money + winnings,
      data: userData.data,
    });

    const messageText = getBetResultMessage(win, winnings, getLang);

    return message.reply(messageText);
  },
};

function getBetResultMessage(win, winnings, getLang) {
  if (win) {
    return getLang("win_message", winnings) + " 🌺";
  } else {
    return getLang("lose_message", -winnings) + "❌";
  }
  }
