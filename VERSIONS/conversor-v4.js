const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('../node_modules/ffmpeg-static/ffmpeg'); // Path to ffmpeg.exe

/*
Codigo abaixo é mais completo, possui tratamento de erros e é multi uso podendo ser usado para qualquer arquivo de audio de qualquer formato
*/


function convert_audio_file(inputFile, outputFile) {
    const command = ffmpeg(inputFile);
    const inputParts = inputFile.split('.');
    const outputParts = outputFile.split('.');
    
  command.output(outputFile)
  .on('end', () => {
    console.log(`Conversão de .${inputParts[2]} para .${outputParts[2]} finalizada com sucesso!`);
  })
  .on('error', (error) => {
    console.error(`Erro durante a conversão: ${error}`);
  })
  .run();
}

convert_audio_file('../2.opus', '../2audio.mp3');