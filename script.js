const botoes = document.querySelectorAll('.botao-efeito');

botoes.forEach((botao) => {
  const som = document.getElementById(botao.dataset.audio);

  botao.addEventListener('click', () => {
    // Reinicia o áudio do começo a cada clique
    som.currentTime = 0;
    som.play();

    botao.classList.add('tocando');
  });

  // Remove o efeito visual quando o áudio termina naturalmente
  som.addEventListener('ended', () => {
    botao.classList.remove('tocando');
  });
});
