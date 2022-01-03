module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: 'progress',
    argument:[],
    voiceChannel: true,
    

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... tu ne veux pas que je te joue un truc ${message.author} ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Lecture d'un live, pas de données à afficher 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};