const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("dnd");
  client.user.setGame("/network help | MigServer Bot");
  console.log("Reload Completed!");
});

client.on('message', msg => {
  if (msg.content === `/network test`) {
    msg.reply('I am Online');
  }
});

client.on('message', msg => {
    if (msg.content === `/network discord`) {
      msg.channel.sendMessage('**__Discord Link:__**\n \nhttps://discord.gg/JuuVp5D');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/network apply`) {
      msg.channel.sendMessage('**__Staff Apply:__**\n \nhttps://docs.google.com/forms/d/e/1FAIpQLSdAcbc6iCUbI_YnKiMAKwXVxl87nuDJFb5WbA_Mutthrw4BDw/viewform');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/network creator`) {
      msg.channel.sendMessage('The Creator of the Bot is `Derpy#6522`');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/network ping`) {
      msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
    }
  });

  client.on('message', msg => {
    if (msg.content === `/network invite`) {
      msg.channel.sendMessage('**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=426357120993198090&permissions=0&scope=bot');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/network youtube`) {
      msg.channel.sendMessage('**__Youtube Cahnnel:__**\n \nhttps://www.youtube.com/channel/UCuPaetf28pN6knc1MdpriCg?view_as=subscriber');
    }
  });

  client.on('message', msg => {
    if (msg.content === '/network help') {
      msg.channel.sendMessage(`__MigServer Commands:__\n \n**/network discord** - Discord Link\n**/network creator** - The Creators of the Bot\n**/network apply** - Staff Apply\n**/network test** - for know if the Bot is Online\n**/network ping** - Show to you how much Ping you have\n**/network invite** - Invite the Bot\n**/network youtube** - Show to you the link to Youtube Channel\n**/network help** - Show this Menu`);
    }
  });

client.login(NDI2MzU3MTIwOTkzMTk4MDkw.DZaiMA.ScgVkiq7SYDK7xOaYsGZScm_dxQ);
