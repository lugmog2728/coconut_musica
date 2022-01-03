module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: 'back',
    argument:[],
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author}? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Je suis trop jeune pour avoir Alzheimer ${message.author}... Toi en revanche tu as oublié que c'était la première musique. ❌`);

        await queue.back();

        message.channel.send(`Ne va pas croire que je le fais parce que tu me l'as demandé, c'est juste que j'avais envie de rejouer la musique précédente 👀`);
    },
};