const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('../node_modules/ffmpeg-static/ffmpeg'); // Path to ffmpeg.exe

/*
Codigo abaixo é mais completo, possui tratamento de erros e é mais legivel
porem um pouco "grande" para o meu gosto
*/

const inputFile = '../2.opus';
const outputFile = '../2audio.mp3';

try {
  const command = ffmpeg(inputFile);
  command.output(outputFile)
  .on('end', () => {
    console.log('Conversão finalizada com sucesso!');
  })
  .on('error', (error) => {
    console.error('Erro durante a conversão:', error);
  })
  .run();
} catch (error) {
  console.error('Erro na abertura do arquivo de entrada:', error);
}
