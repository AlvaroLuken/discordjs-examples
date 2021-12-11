
const DiscordJS = require('discord.js');
const {Intents} = require('discord.js');
require('dotenv').config();

let testServerId = "897146233238478929";

const client = new DiscordJS.Client({
  // provide intents
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES
  ]
});

client.login(process.env.DISCORD_BOT_TOKEN).then(async () => {
  client.on("message", message => {
    if(message.content.includes("MoonCatBot")) {
      message.channel.send("MEOOOOWWWWWWW");
    } else if (message.content == "Go ChainShot!") {
      message.channel.send("meow?");
    }
  })
});









