var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {
  if (msg.content.match("bye") != null || msg.content.match("see you later") != null || msg.content.match("see ya") != null || msg.content.match("c ya") != null) {
    if (msg.author.username == "the real halo") {
    } else {
      msg.channel.sendMessage("bye!");
    }
  }
});

bot.on("message", msg => {
  if (msg.content.match("hi") != null || msg.content.match("hello") != null || msg.content.match("hai") != null || msg.content.match("hey") != null) {
    if (msg.author.username == "the real halo") {
    } else {
      msg.channel.sendMessage("hiii!");
    }
  }
});

bot.on('ready', () => {
  console.log('HALOBOT ONLINE');
});

bot.login("MjQ5NDIwNzc5NDU5MDUxNTIx.CxGC8A.AZvduN1ZMAJljf4wc_Q_lc5JSYI");
