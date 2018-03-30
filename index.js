const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame("/help | Banana Bot");
  console.log("Reload Completed!");
});

client.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
  }
});

client.on('message', msg => {
  if (msg.content === '/discord') {
    msg.channel.sendMessage(`**קישור לדיסקורד:**\n \nhttps://discord.gg/2KvkxPH`)
  }
});

client.on('message', msg => {
  if (msg.content === '/test') {
    msg.reply(`אני מחוברת`)
  }
});

client.on('message', msg => {
  if (msg.content === '/help') {
    msg.channel.sendMessage(`__הפקודות של בננה סרבר:__\n \n**/ping** - מראה לך כמה פינג יש לך\n**/discord** - הקישור לדיסקורד\n**/test** - מראה לך אם הבוטית פועלת\n**/help** - מראה לך את התפריט הזה`)
  }
});

client.login(process.env.BOT_TOKEN);
