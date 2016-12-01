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
var shipObjects = {};

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

    if (shipObjects[ship1]) {
      if (shipObjects[ship1][ship2]) {
        msg.channel.sendMessage(shipObjects[ship1][ship2]);
      }
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
});

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

  if (fs.readdirSync('plugins') != undefined || fs.readdirSync('plugins').length > 0) {
    shipObjects = JSON.parse(fs.readFileSync('plugins/ships.json'));
  }
}

// essentials

loadConfiguration();

bot.on('ready', () => {
  console.log('HALOBOT ONLINE :3');
});
