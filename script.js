function moverElemento() {
  var convite = document.getElementById('convite');
  var novaPosicaoX = Math.random() * (window.innerWidth - convite.clientWidth);
  var novaPosicaoY = Math.random() * (window.innerHeight - convite.clientHeight);

  convite.style.position = 'absolute';
  convite.style.left = novaPosicaoX + 'px';
  convite.style.top = novaPosicaoY + 'px';
}

