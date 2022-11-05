
const OPENTDB_TOKEN = 'e297e082aa44bfe4c1067dd3e84634da711dacdee9134a67369ff18e7cb83337'

// Funciones
const empezarJuego = (e) => {
    const $input = document.querySelector('[data-function="questions-number"]');

    //borro lo que haya en el contenedor de preguntas
    $gameboard.innerHTML = ''

    fetch('https://opentdb.com/api.php?amount=' + $input.value)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const preguntas = data.results;
            for(const pregunta of preguntas){
                const { category, correct_answer, difficulty, question, type } = pregunta
                const todasLasRespuesta = [...pregunta.incorrect_answers, correct_answer];

                const templateHtmlItem = `
                    <fieldset data-trick="${correct_answer}">
                        <legend><strong>${question}</strong></legend>
                        <div class="labelWrapper">
                             ${todasLasRespuesta.map((item, i) => `<label><input name="${correct_answer.split(' ')[0]}" type="radio" class="radioButton" data-tuna="${todasLasRespuesta[i]}" />${item}</label>`).join('')} 
                        </div>
                    </fieldset>
                `;
                $gameboard.innerHTML += templateHtmlItem;
            }


            //funcion checkear
            const $form = document.querySelector('#gameForm');
            const chekearFormulario = (e) => {
                e.preventDefault();
                // selecciono todos los fieldsets
                const $selecionados = document.querySelectorAll('input[name="' + preguntas[0].correct_answer.split(' ')[0] + '"]');

                //RECORRER TODOS LOS FIELDSET
                const $fieldsets = Array.from(document.querySelectorAll('fieldset'));

                $fieldsets.forEach( (fieldset, i) => {
                    console.log('fieldset numero', i, fieldset);
                    const $input = fieldset.querySelector('input:checked');
                    if($input.dataset.tuna === fieldset.dataset.trick) {
                        fieldset.style.backgroundColor = 'lightgreen'
                    }else {
                        fieldset.style.backgroundColor = '#ec9c9c'
                    }
                })

            }
            $form.addEventListener('submit', chekearFormulario);
        });
    }


//boton empezar juego
const $startGameButton = document.querySelector('[data-function="start-game"]');

// div contenedor de las preguntas
const $gameboard = document.querySelector('[data-function="gameboard"]');

//boton con el número de preguntas deseadas
const $input = document.querySelector('[data-function="questions-number"]');

//boton checkear el resultado
const $checkButton = document.querySelector('[data-function="check-game"]');

// agrego evento submit al formulario

$startGameButton.addEventListener('click', empezarJuego);

const $resetButton = document.querySelector('#reset');

$resetButton.addEventListener('click', function(e){
    e.preventDefault();
    $gameboard.innerHTML = ''
})
