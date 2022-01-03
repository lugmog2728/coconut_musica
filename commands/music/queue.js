const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: 'queue',
    argument:[],
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author}... ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Ouf, c'est la dernière. J'en pouvais plus de tes musiques ${message.author}... `);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`queue - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (demander par : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `et **${songs - 5}** autre musique(s)...` : `dans la playlist **${songs}** misique(s)...`;

        embed.setDescription(`Actuelle ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('Je suis coco le coco de tous les cocos', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};