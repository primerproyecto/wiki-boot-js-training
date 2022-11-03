

const $button = document.createElement("button");

$button.innerHTML = "Boton dinámico";
$button.addEventListener("click", function () {
  fetch("http://localhost:3000/diary")
    .then((response) => response.json())
    .then((data) => {
      // ordeno array
      data.sort((a, b) => {
        return (
          Number(b.date.replaceAll("-", "0")) -
          Number(a.date.replaceAll("-", "0"))
        );
      });
      // recorro el array con los elementos html

     
      for(const dat of data){
        const $h3 = document.createElement("h3");
        const $h5 = document.createElement("h5");
        const $p = document.createElement("p");
        const $div = document.createElement("div");
        const button = document.createElement("button");
        button.innerHTML = 'Borrar artículo';
        button.classList.add('eliminaPost')


        $h3.innerText = dat.title
        $h5.innerText = dat.date
        $p.innerText = dat.description
        $div.append($h3)
        $div.append($h5)
        $div.append($p)
        $div.append(button)
        document.body.append($div);

        button.addEventListener('click', function(e){
            e.preventDefault();e.target.closest('div').remove()
        })
    }
    });
});

document.body.append($button)
