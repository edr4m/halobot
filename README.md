#HALOBOT

A fun Discord.js bot designed to do nothing in specific.

[Halobot in action.](http://i.imgur.com/DW4B66c.png)

## Usage

  $ git clone git@github.com/uniqueusername/halobot.git
  $ cd halobot
  $ npm install
  $ node bot.js

## Configuration

Before using the bot, you may need to set some things up.

### Bot Token

To run the bot on your own server, you'll have to give it a token (you can find your token on your bot's application on the Discord Developers "My Application" page).
The bot token is located in the config.json file.

  "token": "MjUzMzQ3MDE4NDIzMDA5Mjgx.Cx_LXg.BSRa9KpSA3NOHw3NP-NnyAFLd-A"

### Triggers/Responses

Halobot can automatically respond to certain messages (triggers) with specific phrases (responses). Halobot's modular plugin system allows you to easily add custom triggers and responses.
Under the 'plugins/triggers' folder, create a JSON file with a name of your choice.

  {
    "hi": "heyo!",
    "hello": "hi!",
    "hai": "hoi",
    "hey": "aye!",
    "hi there": "ahoy there",
    "what's up": "iss all good in da hood",
    "whats up": "iss all good in da hood",
    "hoi": "hOI!!1!",
    "hoy": "ye",
    "fish": "fish is not a greeting",
    "ayy": "stfu spoopy",
    "hola": "¡hola, mi tesoro!"
  }

Enter any trigger/response combination you want, as long as the trigger is on the left column, and the response is on the right.

## Features

Halobot can currently:
- set custom responses to user-set triggers
- "ship" 2 characters by combining their names

## Server

Join the Halobot Discord [here](https://discord.gg/dvnCCh7)!
On the Halobot Discord, you can suggest features, give feedback, have general discussion about Halobot, or have off-topic discussion.
If you want to contribute, check it out!

## License

Copyright (c) 2016 Aryan Jha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
