module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: 'filter [filter name]',
    argument: ['[filter name]'],
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author} ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Choisis un filtre banane". ${message.author}... Essaie encore gamin  ❌\n${actualFilter ? `Filtre actuellement actif **${actualFilter}** (${client.config.app.px} filtre ${actualFilter} pour le désactiver).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Pff... Ce filtre n'existe même pas ${message.author}...Boulet ❌\n${actualFilter ? `Filtre actuellement actif ${actualFilter}.\n` : ''} Voici la liste des filtres...  Boulet \n ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Le filtre ${filter} est maintenant **${queue.getFiltersEnabled().includes(filter) ? 'activé' : 'désactivé'}** ✅\n*Rappel : plus la musique est longue, plus cela prendra du temps.*`);
    },
};