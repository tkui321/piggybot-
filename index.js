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
    message.author.sendMessage({embed: {
      color: 0xffff00,
      title: "__:הפקודות של בננה סרבר__\n \n",
      description: "** **\n**/ping** - מראה לך כמה פינג יש לך\n**/discord** - הקישור לדיסקורד\n**/test** - מראה לך אם הבוטית פועלת\n**/roles** - מראה לך את הרולים של הסרבר\n**/staff** - מראה לך איזה אנשים נמצאים בצוות שלנו\n**/help** - מראה לך את התפריט הזה",
      footer: 
      {
          text: "Banana Server"
      }
    }});
     message.reply(":mailbox_with_no_mail: תבדוק את ההודעות הפרטיות שלך");
  } else
  if (message.content === (prefix + "staff")) {
    message.author.sendMessage({embed: {
      color: 3447003,
      title: "__:צוות השרת שלנו__\n \n",
      description: "** **\n**Banana** - 🍌Banana🍌#9845 , Banana Bot#1425\n**OWNER** - Derpy [MIG]#6522 , 𝓕𝓐𝓡𝓘𝓓𝓝𝓘𝓖𝓔𝓜 [MIG]#7296\n**CO** -\n**ADMIN+** -\n**ADMIN** -\n**MOD** - ☆WANE☆#6700\n**HELPER** -",
      footer: 
      {
          text: "Banana Server"
      }
    }});
     message.reply(":mailbox_with_no_mail: תבדוק את ההודעות הפרטיות שלך");
  } else
  if (message.content === (prefix + "roles")) {
    message.author.sendMessage({embed: {
      color: 3447003,
      title: "__:הרולים של בננה סרבר__\n \n",
      description: "** **\n**Banana [B]**\n**OWNER [O]**\n**CO [C]**\n**ADMIN+ [A+]**\n**ADMIN [A]**\n**MOD [M]**\n**Helper [H]**\n**Friend [F]**\n**Mvp+**\n**Mvp**\n**Vip+**\n**Vip**\n**Bot [B]**\n**משהו מגנב XD**\n**YouTuber**\n**Member**\n**Muted**\n**Minecraft Player**\n**CS-GO Player**\n**Fortnite Player**\n**PUBG Player**\n**OverWatch Player**\n**צריך גישות ליצור חדרים**\n**Staff**\n**צריך לתכנת משהו**",
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

  client.on('message', message => {
    if (message.content === 'test') {
      message.reply("I am Online, for start type /help");
    }
  });

client.login(process.env.BOT_TOKEN);
