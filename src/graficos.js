for (const x of [1, 2, 3, 4]) {
  var url =
    "http://localhost:8001/captacao/graficos?" +
    new URLSearchParams({
      grafico: x,
    });

  var myHeaders = new Headers();
  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  var myRequest = new Request(url, myInit);

  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      nome = data["grafico"][0];
      grafico = data["grafico"][1];
      var ifrm = document.createElement("IFRAME");
      ifrm.setAttribute("srcdoc", grafico);
      ifrm.className = "iframe";
      document.getElementById(nome).appendChild(ifrm);
    });
}

let optionSelected = document.getElementById('graficos-all')
let teste = document.querySelector('.teste')
let graficosGeoLocalizacao = document.querySelector('.graficos-geo-localizacao')
let graficosLocalizacaoAtletas = document.querySelector('.graficos-localizacao-atletas')

// teste.classList.add('ativa')


  Array.from(optionSelected).forEach((item)=>{
    item.addEventListener('change',console.log('teste'))
  })


optionSelected.addEventListener('change', () => {
  switch (optionSelected.value){
    case '1':    
    graficosGeoLocalizacao.classList.add('ativa')
    console.log('teste')
    break;

    case '2':
      graficosLocalizacaoAtletas.classList.add('ativa')
    break;

    case '3':
      optionSelected.classList.add('active')
    break;
  }
})
;

