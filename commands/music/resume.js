module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: 'resume',
    argument:[],
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author} ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Musique actuelle ${queue.current.title} reprise ✅` : `Tu es déjà en lecture boulet, utilise "pause" pour arrêter ta musique  ${message.author}...❌`);
    },
};