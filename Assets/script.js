const img = document.querySelector( '#semaforo' );
const buttons = document.querySelector( '#buttons' );
let colorIndex = 0;

const traffic = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changecolor = () => {
    const colors = ['verm', 'amar', 'verd']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const turnOn = {
    'verm':  () => img.src = 'img/vermelho.png',
    'amar':  () => img.src = 'img/amarelo.png',
    'verd': () => img.src = 'img/verde.png',
    'auto': () => setInterval( changecolor, 1000)
}

buttons.addEventListener('click', traffic);