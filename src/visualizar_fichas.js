function Coletar_fichas() {
  // Coletar dados
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
    })
    .then(function (dados) {
      return Montar_Tabela(dados);
    });

  // Coletar página
  var url = "http://sgf.local/anagrama8904/";

  var myHeaders = new Headers();

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };
  var myRequest = new Request(url, myInit);

  let content_preview = document.getElementById("content_preview");

  fetch(myRequest)
    .then(function (response) {
      return response.text();
    })
    .then((pagina) => {
      content_preview.innerHTML += pagina;
    });
}

function Destribuir_valores(element) {
  info = document.createElement("div");
  info.className = "info";

  numero_ficha = document.createElement("span");
  numero_ficha.innerText = "Ficha nº: " + element.numero_ficha;
  info.appendChild(numero_ficha);

  nome = document.createElement("span");
  nome.innerText = "Nome: " + element.nome;
  info.appendChild(nome);

  nascimento = document.createElement("span");
  nascimento.innerText = "Data de Nascimento: " + element.data_nascimento;
  info.appendChild(nascimento);

  telefone = document.createElement("span");
  telefone.innerText = "Telefone: " + element.telefone1;
  info.appendChild(telefone);

  estado = document.createElement("span");
  estado.innerText = "Estado: " + element.estado_origem;
  info.appendChild(estado);

  situacao = document.createElement("span");
  situacao.innerText = "Categoria: " + element.categoria;
  info.appendChild(situacao);

  categoria = document.createElement("span");
  categoria.innerText = "Situação: " + element.situacao;
  info.appendChild(categoria);

  posicao = document.createElement("span");
  posicao.innerText = "Posição: " + element.posicao;
  info.appendChild(posicao);
  return info;
}

function Montar_Tabela(dados) {
  contador = 0;
  dados["fichas"].forEach((element) => {
    let ficha = document.createElement("div");
    ficha.className = "fichas_view";
    ficha.id = "ficha" + element.numero_ficha;
    ficha.objeto_ficha = element;
    ficha.setAttribute("onclick", `Preview_ficha(${ficha.id})`);
    let img_ficha = document.createElement("img");
    img_ficha.src = directory_uri + "/Captacao/assets/ficha.png";
    img_ficha.className = "img_ficha";

    if (contador >= 10) {
      return 0;
    }
    contador += 1;

    ficha.appendChild(img_ficha);
    ficha.appendChild(Destribuir_valores(element));

    bloco_fichas.appendChild(ficha);
  });
}
function Preview_ficha(ficha) {
  openModal();

  let dados = ficha.objeto_ficha;

  document.getElementById("numero_ficha").innerText = dados.numero_ficha;

  document.getElementById("necessidade_alimentacao").checked =
    dados.necessidade_alimentacao;
  document.getElementById("necessidade_alojamento").checked =
    dados.necessidade_alojamento;
  document.getElementById("necessidade_transporte").checked =
    dados.necessidade_transporte;

  document.getElementById("captador").value = dados.captador;
  document.getElementById("data_nascimento").value = dados.data_nascimento;
  document.getElementById("estado_origem").value = dados.estado_origem;
  document.getElementById("identidade").value = dados.identidade;
  document.getElementById("indicacao_externa").value = dados.indicacao_externa;
  document.getElementById("indicacao_interna").value = dados.indicacao_interna;
  document.getElementById("nome").value = dados.nome;
  document.getElementById("posicao").value = dados.posicao;
  document.getElementById("telefone1").value = dados.telefone1;
  document.getElementById("telefone2").value = dados.telefone2;
  document.getElementById("ultimo_clube").value = dados.ultimo_clube;
  
  switch (dados.atestado_medico) {
    case "sim":
      document.getElementById("atestado_medico_sim").checked = true;
      break;
    case "nao":
      document.getElementById("atestado_medico_nao").checked = true;
      break;
  }

  switch (dados.categoria) {
    case "junior":
      document.getElementById("categoria_junior").checked = true;
      break;
    case "juvenil":
      document.getElementById("categoria_juvenil").checked = true;
      break;
    case "infantil":
      document.getElementById("categoria_infantil").checked = true;
      break;
    case "mirim":
      document.getElementById("categoria_mirim").checked = true;
      break;
    case "pre_mirim":
      document.getElementById("categoria_pre_mirim").checked = true;
      break;
  }

  switch (dados.departamento_medico) {
    case "apto":
      document.getElementById("departamento_medico_apto").checked = true;
      break;
    case "nao_apto":
      document.getElementById("departamento_medico_nao_apto").checked = true;
      break;
  }

  switch (dados.etapa) {
    case "adaptacao":
      document.getElementById("etapa_adaptacao").checked = true;
      break;
    case "grupo principal":
      document.getElementById("etapa_grupo_principal").checked = true;
      break;
    case "contratado":
      document.getElementById("etapa_contratado").checked = true;
      break;
  }

  switch (dados.lateralidade) {
    case "destro":
      document.getElementById("lateralidade_destro").checked = true;
      break;
    case "canhoto":
      document.getElementById("lateralidade_canhoto").checked = true;
      break;
    case "ambidestro":
      document.getElementById("lateralidade_ambidestro").checked = true;
      break;
  }

  switch (dados.situacao) {
    case "aprovado":
      document.getElementById("situacao_aprovado").checked = true;
      break;
    case "dispensado":
      document.getElementById("situacao_dispensado").checked = true;
      break;
  }

  dados.componentes_tecnicos.split("|").map((x) => {
    [nome, valor] = x.split("=");
    document.getElementById(nome).value = valor;
  });

  dados.componentes_taticos.split("|").map((x) => {
    [nome, valor] = x.split("=");
    document.getElementById(nome).value = valor;
  });

  dados.fundamentos_goleiros.split("|").map((x) => {
    [nome, valor] = x.split("=");
    document.getElementById(nome).value = valor;
  });

  // Object.keys(ficha.objeto_ficha).forEach((key)=>{
  //   content_preview.innerHTML += key + ': '
  //   content_preview.innerHTML += ficha.objeto_ficha[key]
  //   content_preview.innerHTML += '<br>'
  // })
}

function openModal() {
  document.getElementById("modal").classList.add("active");
}

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

document.querySelectorAll(".modalClose").forEach((element, index) => {
  element.addEventListener("click", closeModal);
});

const directory_uri = "../../wp-content/themes/sgf";
const bloco_fichas = document.getElementById("bloco_fichas");

Coletar_fichas();
