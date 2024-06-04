'use strict'


const imagePath = '/img/fundo-prof.png';

// Selecionar o elemento de fundo
const backgroundElement = document.getElementById('background');

function adjustBackgroundSize() {
    // Definir estilos CSS para o elemento de fundo
    backgroundElement.style.backgroundImage = `url('${imagePath}')`;
    backgroundElement.style.height = `${desiredHeight}px`;
}

// Ajustar o tamanho inicialmente e ao redimensionar a janela
window.addEventListener('load', adjustBackgroundSize);
window.addEventListener('resize', adjustBackgroundSize);