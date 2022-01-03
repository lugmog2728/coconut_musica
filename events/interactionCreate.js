module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Tu as cru que j'avais des maracas pour te faire de la masique? ❌❌`, ephemeral: true, components: [] });

            int.member.send(`j'ai sauvegarder la musique ${queue.current.title} | ${queue.current.author} du serveur ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Je t'ai envoyé le titre de la musique par messages privés. ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Comment ça j'ai pas le droit de t'envoyé un message privé? Change moi ça tout de suite avant que je me fâche ❌`, ephemeral: true, components: [] });
            });
        }
    }
};