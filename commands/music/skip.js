module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: 'skip',
    argument:[],
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu veux pas que je te joue un truc ${message.author}?❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Musique actuel ${queue.current.title} skipper ✅` : `Quelque chose c'est mal passé ${message.author}...Tu es vraiment un boulet` );
    },
};