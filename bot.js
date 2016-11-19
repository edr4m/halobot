// initialization

var Discord = require("discord.js");
var bot = new Discord.Client();

// message triggers

// BYE TRIGGER
bot.on("message", msg => {
  if (msg.content.match("bye") != null || msg.content.match("see you later") != null || msg.content.match("see ya") != null || msg.content.match("c ya") != null) {
    if (msg.author.username == "the real halo") {
    } else {
      msg.channel.sendMessage("bye!");
    }
  }
});

// HI TRIGGER
bot.on("message", msg => {
  if (msg.content.match("hi") != null || msg.content.match("hello") != null || msg.content.match("hai") != null || msg.content.match("hey") != null) {
    if (msg.author.username == "the real halo") {
    } else {
      msg.channel.sendMessage("hiii!");
    }
  }
});

// commands

// SHIP
bot.on("message", msg => {
  if (msg.content.match (" x ") != null) {
    shipArray = msg.content.split(" x ");
    ship1 = shipArray[0];
    ship2 = shipArray[1];
    if (ship1.toLowerCase() == "marlene" && ship2.toLowerCase() == "eric") {
      msg.channel.sendMessage("erilene :smirk:");
    } else if (ship1.toLowerCase() == "eric" && ship2.toLowerCase() == "marlene") {
      msg.channel.sendMessage("erilene <3");
    } else if (ship1.toLowerCase() == "yuchen" && ship2.toLowerCase() == "christine") {
      msg.channel.sendMessage("yustine :carrot:");
    } else if (ship1.toLowerCase() == "christine" && ship2.toLowerCase() == "yuchen") {
      msg.channel.sendMessage("cake :cake:");
    } else if (ship1.toLowerCase() == "carmen" && ship2.toLowerCase() == "marcus") {
      msg.channel.sendMessage("carcus :unicorn:");
    } else if (ship1.toLowerCase() == "anish" && ship2.toLowerCase() == "marlene") {
      msg.channel.sendMessage("impossible!");
    } else if (ship1.toLowerCase() == "gwen" && ship2.toLowerCase() == "carp") {
      msg.channel.sendMessage("gwarpekl :3");
    } else if (ship1.toLowerCase() == "gwen" && ship2.toLowerCase() == "carpekl") {
      msg.channel.sendMessage("gwarpekl :3");
    } else if (ship1.toLowerCase() == "emma" && ship2.toLowerCase() == "jordan") {
      msg.channel.sendMessage("mr and mrs snails");
    } else if (ship1.toLowerCase() == "jordan" && ship2.toLowerCase() == "emma") {
      msg.channel.sendMessage("mr and mrs snails :heartpulse:");
    } else {
      ship1half = "";
      ship2half = "";
      for (i = 0; i < Math.round(ship1.length/2); i++)  {
        ship1half += ship1[i];
      }
      for (i = Math.round(ship2.length/2); i < ship2.length; i++) {
        ship2half += ship2[i];
      }
      finalShip = ship1half + ship2half;
      msg.channel.sendMessage(finalShip);
    }
  }
})

// essentials

bot.on('ready', () => {
  console.log('HALOBOT ONLINE');
});

bot.login("MjQ5NDIwNzc5NDU5MDUxNTIx.CxGC8A.AZvduN1ZMAJljf4wc_Q_lc5JSYI");
