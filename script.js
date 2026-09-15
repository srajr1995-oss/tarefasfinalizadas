const botoes = document.querySelectorAll('.botao-efeito');

botoes.forEach((botao) => {
  const som = document.getElementById(botao.dataset.audio);
  let tocando = false; // controla o estado manualmente, evitando conflito de tempo com o navegador

  botao.addEventListener('click', () => {
    if (!tocando) {
      tocando = true;
      botao.classList.add('tocando');

      som.play().catch(() => {
        // Se o navegador não conseguir tocar, desfaz o estado visual
        tocando = false;
        botao.classList.remove('tocando');
      });
    } else {
      tocando = false;
      botao.classList.remove('tocando');
      som.pause();
    }
  });

  // Quando o áudio termina naturalmente, reinicia do começo
  // e deixa pronto para tocar de novo do zero
  som.addEventListener('ended', () => {
    som.currentTime = 0;
    tocando = false;
    botao.classList.remove('tocando');
  });
});
