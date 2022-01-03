const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: 'help',
    argument:[],

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`Je suis un grand coco avec plein de cocomandes. \nPour m'appeler utilise le prefix **coco** \nRegarde tout ce que je sais faire :`);
        embed.addField(`Nombre de cocommande - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}  ${x.argument}`).join(' \n '));

        embed.setTimestamp();
        embed.setFooter('Je suis coco le coco de tous les cocos', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};