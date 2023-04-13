const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('./node_modules/ffmpeg-static/ffmpeg');

const inputFile = '2.opus';
const outputFile = '2audio.mp3';

ffmpeg(inputFile).output(outputFile).run();