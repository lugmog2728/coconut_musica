module.exports = {
    app: {
        px: 'coco',
        token: 'OTI3MDA0MzkyMjc4ODUxNjg0.YdD6Hg.ArIttoFuisOH-fbd4r6Pi6JNmoI',
        playing: 'admirer les grands lulu et neenee ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'le plus beau',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
