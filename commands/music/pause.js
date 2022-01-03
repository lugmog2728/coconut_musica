module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: 'pause',
    argument:[],
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author}... ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `J'en ai marre de jouer ${queue.current.title} on fait une pause? ` : `Tu es déjà en pause boulet, utilise "rs" pour relancer ta musique ${message.author}... ❌`);
    },
};