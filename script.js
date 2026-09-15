const botoes = document.querySelectorAll('.botao-efeito');

botoes.forEach((botao) => {
  const som = document.getElementById(botao.dataset.audio);

  botao.addEventListener('click', () => {
    if (som.paused) {
      // Estava parado ou pausado: toca (continua de onde parou)
      som.play();
      botao.classList.add('tocando');
    } else {
      // Estava tocando: pausa sem voltar ao início
      som.pause();
      botao.classList.remove('tocando');
    }
  });

  // Quando o áudio termina naturalmente, reinicia do começo
  // e remove o efeito visual, pronto para tocar de novo do zero
  som.addEventListener('ended', () => {
    som.currentTime = 0;
    botao.classList.remove('tocando');
  });
});
