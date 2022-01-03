const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: 'play [song name/URL]',
    argument: ['[song name/URL]'],
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Entre une recherche valide ${message.author}? ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Tu m'as pris pour un poisson clonw? Elle n'existe pas ta musique ${message.author} ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Comment ca j'ai pas le droit de rejoindre ce salon? ${message.author}. Pff `);
        }

        await message.channel.send(`5 minute je charge ta ${res.playlist ? 'playlist' : 'musique'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};