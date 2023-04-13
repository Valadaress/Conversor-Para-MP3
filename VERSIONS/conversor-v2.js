const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('../node_modules/ffmpeg-static/ffmpeg'); // Path to ffmpeg.exe
/* 
Código abaixo é mais simples, mais bonito de ver e mais fácil de entender
porem não possui tratamento de erros
*/

const inputFile = '../2.opus';
const outputFile = '../2audio.mp3';

  const command = ffmpeg(inputFile);
  command.output(outputFile).run();