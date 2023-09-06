//efeito de transição de imagem da main

document.addEventListener('DOMContentLoaded', function () {
  const infoImage = document.getElementById('infoImage');
  const imagem1 = infoImage.querySelector('img');
  const originalSrc = imagem1.getAttribute('src');

  infoImage.addEventListener('mouseenter', function () {
    const novaSrc = imagem1.getAttribute('data-src');
    imagem1.src = novaSrc;
  });

  infoImage.addEventListener('mouseleave', function () {
    imagem1.src = originalSrc;
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const infoText = document.getElementById('infoText');
  const imagem = infoText.querySelector('img');
  const originalSrc = imagem.getAttribute('src');

  infoText.addEventListener('mouseenter', function () {
    const novaSrc = imagem.getAttribute('data-src');
    imagem.src = novaSrc;
  });

  infoText.addEventListener('mouseleave', function () {
    imagem.src = originalSrc;
  });
});


//Animação do h2 na primeira sessão da main

const texto = "Ana Santos";
const h2 = document.getElementById("name");

let index = 0;
let velocidade = 200; // Ajuste a velocidade da animação (em milissegundos)

function exibirLetraPorLetra() {
  if (index < texto.length) {
    h2.textContent = texto.substring(0, index + 1);
    index++;
  } else {
    index = 0; // Quando todas as letras foram exibidas, redefina o índice para 0
  }
  setTimeout(exibirLetraPorLetra, velocidade);
}

exibirLetraPorLetra();







