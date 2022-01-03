module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: 'clear',
    argument:[],
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author} ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`C'est déjà fini? C'est la dernière musique de la queue ${message.author}`);

        await queue.clear();

        message.channel.send(`J'ai vidé la file d'attente 🗑️`);
    },
};