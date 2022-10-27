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
    
    let img_ficha = document.createElement('img')
    img_ficha.src = directory_uri + '/Captacao/img/ficha.png'
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


const directory_uri = '../../wp-content/themes/sgf'
const bloco_fichas = document.getElementById('bloco_fichas')

Coletar_fichas()





