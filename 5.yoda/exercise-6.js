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
        const numeroInputsSeleccionados = document.querySelectorAll('input:checked').length;
        if(numeroInputsSeleccionados == 2){
            alert('A luchar');
        }
    })




    $contenedorKaracteres.appendChild($formularioKaracteres)
    for (const karacter of karacteres){
        const {id, name,avatar,damege,critic,defense,vitality} = karacter


        const templateCardHtml = () => `
        <div class="card">
            <h2>${name}</h2>
            <img src="${avatar}" />
            <input type="checkbox" name="checkKaracters" value="${name}" />
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