const img = document.querySelector( '#semaforo' );
const buttons = document.querySelector( '#buttons' );

const traffic = (event) => {
}

const turnOn = {
    'ver': () => img.src = 'img/vermelho.png',
    'ama': () => img.src = 'img/amarelo.png',
    'verd': () => img.src = 'img/verde.png'
}

buttons.addEventListener('click', traffic);