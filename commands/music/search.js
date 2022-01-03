const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['sh'],
    utilisation: 'search [song name]',
    argument: ['[song name]'],
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Tu me prend pour un posion clown? Fait une recherche valide ${message.author}...`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Pff... Ce titre n'existe même pas ${message.author}... `);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(`Resultat pour ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\n Fait un choix entre **1** et **${maxTracks.length}** ou **cancel** ⬇️`);

        embed.setTimestamp();
        embed.setFooter('Coco le coco de tout les cocos', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`Recherche annulé ✅`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`C'est compliqué de compté jusqu'a __**${maxTracks.length}**__?  Choisie un chiffre entre **1** et **${maxTracks.length}** ou **annule**...`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`Comment ça j'ai pas le droit de rejoindre le salon ? Je suis le grand coco... Donne moi les permitions`);
            }

            await message.channel.send(`5 minute je suis en train de chercher 🎧`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`Plus vite mou du genoux, j'ai pas ton temps ${message.author} ❌`);
        });
    },
};