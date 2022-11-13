const $dialog = document.createElement('dialog');
document.body.append($dialog)
$dialog.open = false

fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(karacteres => {

    const $contenedorKaracteres = document.querySelector('.c-characters');

    const $formularioKaracteres = document.createElement('form');
    $formularioKaracteres.method = 'post';
    $formularioKaracteres.action = '/';
    $formularioKaracteres.classList.add('formualrioKaracteres')

    $formularioKaracteres.getElementsByTagName('input');

    $formularioKaracteres.addEventListener('change', function(e){
        const numeroInputsSeleccionados = Array.from($formularioKaracteres.querySelectorAll('input:checked'));
        console.log(numeroInputsSeleccionados)
        
        if(numeroInputsSeleccionados.length == 2){
            $dialog.open = true

            $dialog.innerHTML = `${numeroInputsSeleccionados[0].dataset.name} vs ${numeroInputsSeleccionados[1].dataset.name} `
            
            //alert('A luchar');
            numeroInputsSeleccionados.forEach(inputSeleccionado => {
                const arrayStatics = inputSeleccionado.dataset.statics.replaceAll('-', ' ').split(' ');
                arrayStatics.map(operacion => {
                    var resultado = 0;
                    const separador = operacion.indexOf('d');
                    const numerodeveces = operacion.slice(0, separador );
                    const numerodecaras = operacion.slice(separador + 1, operacion.length);
                    console.log('numero de veces', numerodeveces );
                    console.log('numero de caras', numerodecaras)
                    resultado = (Math.floor(Math.random() * numerodecaras) + 1) * numerodeveces;
                    console.log('y el resultado es ', resultado)
                    console.log('la operacion es', resultado, 'del ' + inputSeleccionado.dataset.name);
                    console.log(operacion)
                })
            })
        }
        if(numeroInputsSeleccionados.length > 2) {
            console.log('solo pueden luchar 2')
        }


        // 
        console.log('numeroInputsSeleccionados', numeroInputsSeleccionados);

        /* numeroInputsSeleccionados.forEach(item => {
            console.log(item.parentElement)
            item.parentElement.style.transform = 'scale(1) translate(-50%, -50%)'
            item.parentElement.style.position = 'absolute'
            item.parentElement.style.top = '50%'
            item.parentElement.style.left = '50%'
        }) */
    })

    $contenedorKaracteres.appendChild($formularioKaracteres)
    for (const karacter of karacteres){
        const {id, name,avatar,damage,critic,defense,vitality} = karacter;

        const templateCardHtml = () => `
        <div class="card">
            <h2>${name}</h2>
            <img src="${avatar}" />
            <input  data-name="${name}" type="checkbox" data-statics="${damage.join('-')}" name="checkKaracters" value="${name}" />
            <div  class="staticWrapper">
                <div>
                    <label for="${critic}">Critic: ${critic} %</label>
                    <progress id="${critic}" max="100" value="${critic}"> ${critic} </progress>
                </div>
                <div>
                    <label for="${defense}">Defense: ${defense} %</label>
                    <progress id="${defense}" max="100" value="${defense}"> ${defense} </progress>
                </div>
                <div>
                    <label for="${vitality}">vitality: ${vitality} %</label>
                    <progress id="${vitality}" max="100" value="${vitality}"> ${vitality} </progress>
                </div>
            </div>
        </div>
        `
        $formularioKaracteres.innerHTML += templateCardHtml()
    }
  });


