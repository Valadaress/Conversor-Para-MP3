const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('../node_modules/ffmpeg-static/ffmpeg'); // Path to ffmpeg.exe

//! Simples e funcional
function convert_audio_file(inputFile, outputFile) {
  ffmpeg(inputFile).output(outputFile).run();
}

convert_audio_file('../2.opus', '../2audio.mp3');
