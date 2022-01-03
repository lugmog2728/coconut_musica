module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: 'shuffle',
    argument:[],
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc  ${message.author}? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`C'est la dernière musique de la queue ${message.author}... Tu veux que je fasse le choie entre rien et rien? Ok... Bah rien ducoup. ❌`);

        await queue.shuffle();

        return message.channel.send(`Queue aléatoire **${queue.tracks.length}** musique(s) ! ✅`);
    },
};