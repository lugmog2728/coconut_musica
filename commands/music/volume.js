const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `volume [1-${maxVol}]`,
    argument: [`[1-${maxVol}]`],
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`je m'ennuie... tu veux pas que je te joue un truc ${message.author}?❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`le volume est à ${queue.volume} 🔊\n*pour changer le volume entre un nombre entre **1** et **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`pourquoi tu me demande de change alors que je suis dejà parfait ${message.author}? je suis deja à se volume là. ❌`);

        if (vol > maxVol) return message.channel.send(`faudra peut-être penser à investir dans un sonotone ${message.author}? il faut choisir un niveau entre  **1** et **${maxVol}** .`);
        
        if (vol <= 0) return message.channel.send(`je ne sais pas faire du playback, demande a miam miam elle est experte pour chanter au niveau 0. il faut choisir un niveau entre  **1** et **${maxVol}** ${message.author}.`);
        const success = queue.setVolume(vol);

        return message.channel.send(success ? `bon je t'écoute pour cettte fois, mais arrête de me donner des ordre. le volume est desormais à **${vol}**/**${maxVol}**% 🔊` : `quelque chose c'est mal passer ${message.author} ❌`);
    },
};