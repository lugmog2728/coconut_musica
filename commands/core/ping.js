const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: 'ping',

    execute(client, message) {
        message.channel.send(`Je suis le plus rapide de tout les cocos je met **${client.ws.ping}ms** à te repondre 🛰️`);
    },
};