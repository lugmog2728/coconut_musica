player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Je cocommence à jouer ${track.title} dans **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`J'ai ajouté musique ${track.title} dans la file d'attente ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send("J'ai été déconnecté manuellement du canal vocal, c'est pas gentil... Pour la peine je supprime la file d'attente... ❌");
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send("Personne n'est dans le chanel vocal? Je m'en vais alors... ❌");
});

player.on('queueEnd', (queue) => {
    queue.metadata.send("J'ai fini de lire toute la file ✅");
});