const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: 'loop <queue>',
    argument: ['<queue>'],
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc  ${message.author} ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Tu dois d'abord désactiver la musique en cours dans le mode boucle (${client.config.app.px}loop) ${message.author}... boulet? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode répéter**${queue.repeatMode === 0 ? 'désactivé' : 'activé'}** vers l'infini et l'aude là 🔁` : `Quelque chose a pas marcher ${message.author} ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Tu dois d'abord désactiver la file d'attente actuelle dans le mode boucle (${client.config.app.px}loop queue) ${message.author}... ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode répété **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}**, la musique actuelle sera répétée à l'infini... Ou jusqu'à ce que j'en ai marre (vous pouvez boucler la file d'attente avec l'option <queue>) 🔂` : `Quelque chose s'est mal passé ${message.author}... ❌`);
        };
    },
};