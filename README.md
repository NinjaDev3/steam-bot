# Steam Bot

[![Node.js|npm](https://coolestguidesontheplanet.com/wp-content/uploads/2014/07/nodejs-npm.png)](https://nodejs.org/en/)

A Bot for Trading and Idling Games on Steam Powered by Node.js.

- Clone the Project
- Run a command
- Magic

### Prerequisite

Steam Bot uses a majore open source projects to work properly:

- [Node.js](https://nodejs.org/) - A JavaScript runtime built on [Chrome's V8 JavaScript engine](https://developers.google.com/v8/)

And of course Steam Bot itself is open source with a [public repository](https://github.com/anupkrbid/steam-bot) on GitHub.

### Installation

Steam Bot requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and start the server.

```sh
$ git clone https://github.com/anupkrbid/steam-bot.git
$ cd steam-bot
$ npm i
$ STEAM_USERNAME=<your_steam_username> STEAM_PASSWORD=<your_steam_password> STEAM_SHARED_SECRET=<your_steam_shared_secret> STEAM_IDENTITY_SECRET=<your_steam_identity_secret>  STEAM_API_KEY=<your_steam_api_key> node bot.js
```

### Plugins

Steam Bot is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin     | README                                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| axios      | [npm](https://www.npmjs.com/package/axios) [GitHub](https://github.com/axios/axios)                      |
| SteamUser  | [npm](https://www.npmjs.com/package/steam-user) [GitHub](https://github.com/DoctorMcKay/node-steam-user) |
| Steam TOTP | [npm](https://www.npmjs.com/package/steam-totp) [GitHub](https://github.com/DoctorMcKay/node-steam-totp) |

### Development

Want to contribute? Great!

Dillinger uses nodemon for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

After Installation:

```sh
$ npm install nodemon -g
$ STEAM_USERNAME=<your_steam_username> STEAM_PASSWORD=<your_steam_password> STEAM_SHARED_SECRET=<your_steam_shared_secret>  STEAM_IDENTITY_SECRET=<your_steam_identity_secret>  STEAM_API_KEY=<your_steam_api_key> nodemon bot.js
```

### Todos

- Add Game Idling Logic
- Add Steam Trade Logic
- Add Chat Logic

## License

MIT

**Free Software, Hell Yeah!**
