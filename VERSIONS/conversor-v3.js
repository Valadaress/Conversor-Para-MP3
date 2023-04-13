const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('../node_modules/ffmpeg-static/ffmpeg');

ffmpeg('../2.opus').output('../2audio.mp3').run();

// Codigo abaixo é o mais simples que eu consegui fazer, mas não nenhum log. O importante que é tão simples que funciona //! MENOS É MAIS

