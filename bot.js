// initialization

var Discord = require("discord.js");
var bot = new Discord.Client();
var fs = require('fs');

// global vars

var config;
var jaredInfo = {
  id: '236715184251469825',
  username: '2D (Undead Speaker)',
  discriminator: '6748',
  avatar: '45e8fee6889688cd3547cb6216adb69c',
  bot: false }
var responseObjects = {};

// message triggerer

bot.on("message", msg => {
  for (i = 0; i < fs.readdirSync('plugins/triggers').length; i++) {
    if (responseObjects[fs.readdirSync('plugins/triggers')[i]][msg.content.toLowerCase()]) {
      msg.channel.sendMessage(responseObjects[fs.readdirSync('plugins/triggers')[i]][msg.content.toLowerCase()]);
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
    } else if (ship1.toLowerCase() == "ruby" && ship2.toLowerCase() == "sapphire") {
      msg.channel.sendMessage("garnet");
    } else if (ship1.toLowerCase() == "rose" && ship2.toLowerCase() == "greg") {
      msg.channel.sendMessage("steven");
    } else if (ship1.toLowerCase() == "amethyst" && ship2.toLowerCase() == "pearl") {
      msg.channel.sendMessage("and steven! :D");
    } else if (ship1.toLowerCase() == "greg" && ship2.toLowerCase() == "van") {
      msg.channel.sendMessage("wtf?");
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

;

// VENT RESET
/*bot.on('message', msg => {
  currentDate = new Date();
  //if (msg.channel.name == "vent" && currentDate.getHours() == 1 && currentDate.getMinutes() == 50 && currentDate.getSeconds == 0) {
  //  msg.channel.sendMessage("Daily reset begins in **5 minutes**.");
  //}
  //if (msg.channel.name == "vent" && currentDate.getHours() == 1 && currentDate.getMinutes() == 54 && currentDate.getSeconds == 55) {
  //  msg.channel.sendMessage("Daily reset begins in **5 seconds**.");
  //}
  if (msg.channel.name == "vent" && currentDate.getHours() == 2 && currentDate.getMinutes() == 30 && currentDate.getSeconds() < 30) {
    msg.channel.messages.deleteAll();
  } else if (msg.channel.name == "vent" && currentDate.getHours() == 2 && currentDate.getMinutes() == 30 && currentDate.getSeconds() > 30) {
    msg.channel.messages.deleteAll();
  }
  if (msg.channel.name == "vent" && currentDate.getHours() == 2 && currentDate.getMinutes() == 30 && currentDate.getSeconds() == 0) {
      msg.channel.sendMessage("Daily reset complete.");
  }
});*/

// JARED SPAMMER
bot.on('message', msg => {
  if (msg.content == "activate jared") {
    msg.channel.sendMessage(jaredInfo);
  }
});

// data

bot.on('message', msg => {
  if (msg.content.match("data return channel") != null) {
    msg.channel.sendMessage(msg.channel);
  } else if (msg.content.match("data return user") != null) {
    msg.channel.sendMessage(msg.author);
  }
});


// functions

function loadConfiguration(callback) {
  config = JSON.parse(fs.readFileSync('config.json'));
  console.log('Read configuration from `config.json`.');

  if (config.token === undefined || config.token.length < 1) {
    console.log('No bot token is set in config.json.');
  } else {
    bot.login(config.token);
  }

  if (fs.readdirSync('plugins/triggers') != undefined || fs.readdirSync('plugins/triggers').length > 0) {
    for (i = 0; i < fs.readdirSync('plugins/triggers').length; i++) {
      responseObjects[fs.readdirSync('plugins/triggers')[i]] = JSON.parse(fs.readFileSync('./plugins/triggers/' + fs.readdirSync('plugins/triggers')[i]))
    }
  }
}

// essentials

loadConfiguration();

bot.on('ready', () => {
  console.log('HALOBOT ONLINE :3');
});
