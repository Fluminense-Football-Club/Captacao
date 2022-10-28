function Coletar_fichas(){
    var url = "http://localhost:8001/captacao/get_data";   
     
    var myHeaders = new Headers();

    var myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };
    var myRequest = new Request(url, myInit);
  
    fetch(myRequest)
      .then(function (response) {
        return response.json();
      }).then(function (dados) {
        return Montar_Tabela(dados);
      })
}


function Destribuir_valores(element){
  info = document.createElement('div')
  info.className = 'info'

  numero_ficha =  document.createElement('span')
  numero_ficha.innerText = 'Ficha nº: ' + element.numero_ficha
  info.appendChild(numero_ficha)

  nome =  document.createElement('span')
  nome.innerText = 'Nome: ' + element.nome
  info.appendChild(nome)

  nascimento = document.createElement('span')
  nascimento.innerText = 'Data de Nascimento: ' + element.data_nascimento
  info.appendChild(nascimento)

  telefone = document.createElement('span')
  telefone.innerText = 'Telefone: ' + element.telefone1
  info.appendChild(telefone)

  estado = document.createElement('span')
  estado.innerText = 'Estado: ' + element.estado_origem
  info.appendChild(estado)

  situacao = document.createElement('span')
  situacao.innerText = 'Categoria: ' + element.categoria
  info.appendChild(situacao)

  categoria = document.createElement('span')
  categoria.innerText = 'Situação: ' + element.situacao
  info.appendChild(categoria)

  posicao = document.createElement('span')
  posicao.innerText = 'Posição: '+ element.posicao
  info.appendChild(posicao)
  return info
}

function Montar_Tabela(dados){
  contador = 0
  dados["fichas"].forEach((element)=>{
    let ficha = document.createElement('div')
    ficha.className = 'fichas_view'
    ficha.id = 'ficha'+element.numero_ficha
    ficha.objeto_ficha = element
    ficha.setAttribute("onclick", `Preview_ficha(${ficha.id})`);
    let img_ficha = document.createElement('img')
    img_ficha.src = directory_uri + '/Captacao/assets/ficha.png'
    img_ficha.className = 'img_ficha'
    
    if (contador >= 10){
      return 0
    }
    contador+=1

    ficha.appendChild(img_ficha)
    ficha.appendChild(Destribuir_valores(element))
    
    bloco_fichas.appendChild(ficha)


  })
  
}
function Preview_ficha(ficha){
  openModal()
  var url = "http://sgf.local/anagrama8904/";

  var myHeaders = new Headers();

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };
  var myRequest = new Request(url, myInit);

  let content_preview = document.getElementById('content_preview')
  
  fetch(myRequest)
  .then(function (response) {
    return response.text();
  }).then((pagina)=>{
    content_preview.innerHTML += pagina 
  })    
   
  // Object.keys(ficha.objeto_ficha).forEach((key)=>{
  //   content_preview.innerHTML += key + ': '
  //   content_preview.innerHTML += ficha.objeto_ficha[key]
  //   content_preview.innerHTML += '<br>'
  // })
  

}

function openModal() {
  document.getElementById("modal").classList.add("active"); 

}

const closeModal = () => document.getElementById("modal").classList.remove("active");

document.querySelectorAll(".modalClose").forEach((element, index) => { element.addEventListener("click", closeModal); });

const directory_uri = '../../wp-content/themes/sgf'
const bloco_fichas = document.getElementById('bloco_fichas')

Coletar_fichas()





