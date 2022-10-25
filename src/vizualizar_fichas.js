function destribuir_valores(){
    info = document.createElement('div')
    info.className = 'info'

    numero_ficha =  document.createElement('span')
    numero_ficha.innerText = 'Ficha nº: 4'
    info.appendChild(numero_ficha)

    nome =  document.createElement('span')
    nome.innerText = 'Nome: Judison'
    info.appendChild(nome)

    nascimento = document.createElement('span')
    nascimento.innerText = 'Data de Nascimento: '
    info.appendChild(nascimento)

    telefone = document.createElement('span')
    telefone.innerText = 'Telefone: '
    info.appendChild(telefone)

    estado = document.createElement('span')
    estado.innerText = 'Estado: '
    info.appendChild(estado)

    situacao = document.createElement('span')
    situacao.innerText = 'Categoria: '
    info.appendChild(situacao)

    categoria = document.createElement('span')
    categoria.innerText = 'Situação: '
    info.appendChild(categoria)

    posicao = document.createElement('span')
    posicao.innerText = 'Posição: '
    info.appendChild(posicao)
    return info
}

const directory_uri = '../../wp-content/themes/sgf'
const bloco_fichas = document.getElementById('bloco_fichas')


img_ficha = document.createElement('img')
img_ficha.src = directory_uri + '/Captacao/img/ficha.png'
img_ficha.className = 'img_ficha'





ficha = document.createElement('div')
ficha.className = 'fichas_view'

ficha.appendChild(img_ficha)

ficha.appendChild(destribuir_valores())


bloco_fichas.appendChild(ficha)
