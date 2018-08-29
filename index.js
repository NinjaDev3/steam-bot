const SteamUser = require('steam-user');

const client = new SteamUser({ enablePicsCache: true });

// An object containing details for this logon
const logOnOptions = {
  accountName: process.env.STEAM_USERNAME,
  password: process.env.STEAM_PASSWORD
};

// Logs onto Steam
client.logOn(logOnOptions);

// Emitted when you're successfully logged into Steam.
client.on('loggedOn', details => {
  console.log('Logged into Steam!');

  // Changes our online status, and optionally your profile name.
  // You need to call this after you logon or else you'll show up as offline.
  // You won't receive any chat messages or persona data about your friends if you don't go online.
  client.setPersona(SteamUser.Steam.EPersonaState.LookingToTrade);
});

// Emitted once we have all data required in order to determine app ownership. You can now safely call getOwnedApps, ownsApp, getOwnedDepots, and ownsDepot.
// This is only emitted if enablePicsCache is true.
client.on('appOwnershipCached', function() {
  // Reports to Steam that you're playing or using zero or more games/apps. To exit all games/apps, use an empty array []
  // client.gamesPlayed(games);
  // client.gamesPlayed(304390);

  const games = [
    35450,
    235720,
    233130,
    259360,
    351030,
    304390
  ];
  let currentgame = 0;
  client.gamesPlayed(games[currentgame]);
  currentgame = 1;
  setInterval(() => {
    client.gamesPlayed(games[currentgame]);

    if (currentgame < games.length) {
      currentgame++;
    } else {
      currentgame = 0;
    }
  }, 10800000);
});
