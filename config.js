const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHAHUWA-MD=tph1hKZD#JoOscSShh5xZnsIFxX_7We1ApqX97PXA4VtjJsB0VkE",
ALIVE_REACT: process.env.ALIVE_REACT || "👋",
ALIVE_IMG: process.env.ALIVE_IMG || "https://bit.ly/42qYxJO",
ALIVE_MSG: process.env.ALIVE_MSG || "SHANUWA MD BOT ONLINE 🗣️",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "trye",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*මන් ඔයාගේ ස්ටේටස් එක ඉස්සෙල්ලම බැලුවා පැටියෝ 🧚‍♂️*",
ANTI_CALL: process.env.ANTI_CALL || "false",
};
