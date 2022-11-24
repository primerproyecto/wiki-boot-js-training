const $squares = document.querySelectorAll('.b-grid > div');
const marcador = document.querySelector('[data-function="score"]');
const cuentaAtras = document.querySelector('[data-function="time-left"]');
const $botonStartGame = document.createElement('button');

const tiempoMole = 500;
const segundero = 1000;
$botonStartGame.innerHTML = 'Empezar juego'
cuentaAtras.insertAdjacentElement('afterend',$botonStartGame )

marcador.innerHTML = 0;
cuentaAtras.innerHTML = 5;

$botonStartGame.addEventListener('click', function(){

    $squares.forEach((sqaure)=>{
        sqaure.addEventListener('click', function(e) {
           if(e.target.classList.contains('b-mole')){
            marcador.innerHTML ++
           } 
        })
    })
    
    const contadorAtras = setInterval(() => {
        if(cuentaAtras.innerHTML == 0) {
            clearInterval(contadorAtras)
            if(marcador.innerHTML > 0) {
                alert('has acertado ' +  marcador.innerHTML);
            } else {
                alert('no has acertado ninguno');
            }
        }else {
            cuentaAtras.innerHTML --
        }
    }, segundero)
    
    const inter = setInterval(() => {
        const aleatorio = Math.floor(Math.random() * $squares.length);
        $squares.forEach(item => {
            item.classList.remove('b-mole')
        })
        $squares[aleatorio].classList.add('b-mole');
    }, tiempoMole);
    
    setTimeout(() => {
        clearInterval(inter)
    }, (cuentaAtras.innerHTML * segundero));
})



