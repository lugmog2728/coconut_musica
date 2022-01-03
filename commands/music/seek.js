const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: 'seek [time]',
    argument: ['[time]'],
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author}? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Tu veux aller tellement vite que tu veux aller plus loin que le fin de la musique ${message.author}... ❌\n*Utlise par exemple ces timing pour avancer le timer: **5s, 10s, 20 seconds, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`J'ai avancé la musique de **${ms(timeToMS, { long: true })}**... Mais c'est pas parce que tu me l'as demandé hein? ✅`);
    },
};