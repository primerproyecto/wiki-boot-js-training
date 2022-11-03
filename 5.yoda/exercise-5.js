// Funciones
const empezarJuego = (e) => {
    const $input = document.querySelector('[data-function="questions-number"]');

    //borro lo que haya en el contenedor de preguntas
    $gameboard.innerHTML = ''

    fetch('https://opentdb.com/api.php?amount=' + $input.value)
        .then(response => response.json())
        .then(data => {
            const preguntas = data.results;
            for(const pregunta of preguntas){
                const { category, correct_answer, difficulty, question, type } = pregunta
                const todasLasRespuesta = [...pregunta.incorrect_answers, correct_answer];

                const templateHtmlItem = `
                    <fieldset>
                        <legend><strong>${question}</strong></legend>
                        <div class="labelWrapper">
                             ${todasLasRespuesta.map(item => `<label><input name="${correct_answer}" type="radio" class="radioButton" />${item}</label>`).join('')} 
                        </div>
                    </fieldset>
                `;
                
                $gameboard.innerHTML += templateHtmlItem
            }
        });
    }
// función que lanza el ebotón check game
const chekearFormulario = (e) => {
    e.preventDefault();
    // selecciono todos los fieldsets
    const $fieldsets = document.querySelectorAll('fieldset')
    $fieldsets.forEach(fieldset => {
        // selecciono todos los inputs de los fieldsets y los meto en array
        const $inputs = Array.from(fieldset.querySelectorAll('input'));
        //
        if($inputs[($inputs.length -1)].checked) {
            console.log('acertaste')
        } else {
            console.log('vuelve a intentarlo')
        }        
    })
}

//boton empezar juego
const $startGameButton = document.querySelector('[data-function="start-game"]');

// div contenedor de las preguntas
const $gameboard = document.querySelector('[data-function="gameboard"]');

//boton con el número de preguntas deseadas
const $input = document.querySelector('[data-function="questions-number"]');

//boton checkear el resultado
const $checkButton = document.querySelector('[data-function="check-game"]');

//seleciono del formulario
const $form = document.querySelector('#gameForm');


// agrego evento submit al formulario
$form.addEventListener('submit', chekearFormulario);
$startGameButton.addEventListener('click', empezarJuego);





