const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame("/help | Banana Bot");
  console.log("Reload Completed!");
});

const prefix = "/";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content === (prefix + "discord")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__:קישור לדיסקורד__\n \n",
      description: "** **\nhttps://discord.gg/2KvkxPH",
      footer: 
      {
          text: "Banana Server"
      }
    }});
  } else
  if (message.content === (prefix + "help")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__:הפקודות של בננה סרבר__\n \n",
      description: "** **\n**/ping** - מראה לך כמה פינג יש לך\n**/discord** - הקישור לדיסקורד\n**/test** - מראה לך אם הבוטית פועלת\n**/help** - מראה לך את התפריט הזה",
      footer: 
      {
          text: "Banana Server"
      }
    }});
    message.reply(":mailbox_with_no_mail: תבדוק את ההודעות הפרטיות שלך");
  }
});

client.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
  }
});

client.on('message', msg => {
  if (msg.content === '/test') {
    msg.reply(`אני מחוברת`)
  }
});

client.login(process.env.BOT_TOKEN);
