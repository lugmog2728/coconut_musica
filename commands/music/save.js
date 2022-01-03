module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: 'save',
    argument:[],
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Je m'ennuie... Tu ne veux pas que je te joue un truc ${message.author}... ❌`);

        message.author.send(`Ne le dis à personne, mais voici le titre de la musique actuelle comme tu me l'a demandé : ${queue.current.title} | ${queue.current.author} ✅`).then(() => {
            message.channel.send(`Je t'ai envoyé le titre de la musique en mp ✅`);
        }).catch(error => {
            message.channel.send(`Comment ça j'ai pas le droit de t'envoyer un message privé ${message.author}? Change moi ça tout de suite avant que je me fâche ...`);
        });
    },
};