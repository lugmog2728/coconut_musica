module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: 'stop',
    argument:[],
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author}? ❌`);

        queue.destroy();

        message.channel.send(`A très vite, j'espère vour revoir bientôt bande de petite coco \n cocobise 💕😘`);
    },
};