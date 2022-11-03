import { Duplicar_campos } from "./module.js";

function Coletar_fichas(value_initial,value_final) {
  // Coletar dados
  var url =
    "http://localhost:8001/captacao/get_data?" +
    new URLSearchParams({
      value_initial:value_initial,
      value_final:value_final
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
    .then(function (response) {
      return response.json();
    })
    .then(function (dados) {
      return Montar_Tabela(dados);
    });
  }
  function Coletar_pagina_preview(){
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


  fetch(myRequest)
    .then(function (response) {
      return response.text();
    })
    .then((pagina) => {
      content_preview.innerHTML += pagina;
      content_preview.classList.add('no_click')
    });
}

function Destribuir_valores(element) {
  let info = document.createElement("div");
  info.className = "info";

  let numero_ficha = document.createElement("span");
  numero_ficha.innerText = "Ficha nº: " + element.numero_ficha;
  info.appendChild(numero_ficha);

  let nome = document.createElement("span");
  nome.innerText = "Nome: " + element.nome;
  info.appendChild(nome);

  let nascimento = document.createElement("span");
  nascimento.innerText = "Data de Nascimento: " + element.data_nascimento;
  info.appendChild(nascimento);

  let telefone = document.createElement("span");
  telefone.innerText = "Telefone: " + element.telefone1;
  info.appendChild(telefone);

  let estado = document.createElement("span");
  estado.innerText = "Estado: " + element.estado_origem;
  info.appendChild(estado);

  let situacao = document.createElement("span");
  situacao.innerText = "Categoria: " + element.categoria;
  info.appendChild(situacao);

  let categoria = document.createElement("span");
  categoria.innerText = "Situação: " + element.situacao;
  info.appendChild(categoria);

  let posicao = document.createElement("span");
  posicao.innerText = "Posição: " + element.posicao;
  info.appendChild(posicao);
  return info;
}

function Montar_Tabela(dados) {
  let contador = 0;
  dados["fichas"].forEach((element) => {
    let ficha = document.createElement("div");
    ficha.className = "fichas_view";
    ficha.id = "ficha" + element.numero_ficha;
    ficha.objeto_ficha = element;
    ficha.onclick = () => {
      Preview_ficha(ficha);
    };
    let img_ficha = document.createElement("img");
    img_ficha.src = directory_uri + "/Captacao/assets/ficha.png";
    img_ficha.className = "img_ficha";

    if (contador >= 20) {
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
  Duplicar_campos();

  let dados = ficha.objeto_ficha;
  let click = new Event("click");
  let keyup = new Event("keyup");

  document.getElementById("numero_ficha").innerText = dados.numero_ficha;

  document.getElementById("necessidade_alimentacao").checked =
    dados.necessidade_alimentacao;
  document.getElementById("necessidade_alimentacao").dispatchEvent(click);
  document.getElementById("necessidade_alojamento").checked =
    dados.necessidade_alojamento;
  document.getElementById("necessidade_alojamento").dispatchEvent(click);
  document.getElementById("necessidade_transporte").checked =
    dados.necessidade_transporte;
  document.getElementById("necessidade_transporte").dispatchEvent(click);

  document.getElementById("estado_origem").value = dados.estado_origem;
  document.getElementById("estado_origem").dispatchEvent(click);

  document.getElementById("captador").value = dados.captador;
  document.getElementById("captador").dispatchEvent(keyup);
  document.getElementById("data_nascimento").value = dados.data_nascimento;
  document.getElementById("data_nascimento").dispatchEvent(keyup);
  document.getElementById("identidade").value = dados.identidade;
  document.getElementById("identidade").dispatchEvent(keyup);
  document.getElementById("indicacao_externa").value = dados.indicacao_externa;
  document.getElementById("indicacao_externa").dispatchEvent(keyup);
  document.getElementById("indicacao_interna").value = dados.indicacao_interna;
  document.getElementById("indicacao_interna").dispatchEvent(keyup);
  document.getElementById("nome").value = dados.nome;
  document.getElementById("nome").dispatchEvent(keyup);
  document.getElementById("posicao").value = dados.posicao;
  document.getElementById("posicao").dispatchEvent(keyup);
  document.getElementById("telefone1").value = dados.telefone1;
  document.getElementById("telefone1").dispatchEvent(keyup);
  document.getElementById("telefone2").value = dados.telefone2;
  document.getElementById("telefone2").dispatchEvent(keyup);
  document.getElementById("ultimo_clube").value = dados.ultimo_clube;
  document.getElementById("ultimo_clube").dispatchEvent(keyup);

  switch (dados.atestado_medico) {
    case "sim":
      document.getElementById("atestado_medico_sim").checked = true;
      document.getElementById("atestado_medico_sim").dispatchEvent(click);
      break;
    case "nao":
      document.getElementById("atestado_medico_nao").checked = true;
      document.getElementById("atestado_medico_nao").dispatchEvent(click);
      break;
  }

  switch (dados.categoria) {
    case "junior":
      document.getElementById("categoria_junior").checked = true;
      document.getElementById("categoria_junior").dispatchEvent(click);
      break;
    case "juvenil":
      document.getElementById("categoria_juvenil").checked = true;
      document.getElementById("categoria_juvenil").dispatchEvent(click);
      break;
    case "infantil":
      document.getElementById("categoria_infantil").checked = true;
      document.getElementById("categoria_infantil").dispatchEvent(click);
      break;
    case "mirim":
      document.getElementById("categoria_mirim").checked = true;
      document.getElementById("categoria_mirim").dispatchEvent(click);
      break;
    case "pre_mirim":
      document.getElementById("categoria_pre_mirim").checked = true;
      document.getElementById("categoria_pre_mirim").dispatchEvent(click);
      break;
  }

  switch (dados.departamento_medico) {
    case "apto":
      document.getElementById("departamento_medico_apto").checked = true;
      document.getElementById("departamento_medico_apto").dispatchEvent(click);
      break;
    case "nao_apto":
      document.getElementById("departamento_medico_nao_apto").checked = true;
      document
        .getElementById("departamento_medico_nao_apto")
        .dispatchEvent(click);
      break;
  }

  switch (dados.etapa) {
    case "adaptacao":
      document.getElementById("etapa_adaptacao").checked = true;
      document.getElementById("etapa_adaptacao").dispatchEvent(click);
      break;
    case "grupo_principal":
      document.getElementById("etapa_grupo_principal").checked = true;
      document.getElementById("etapa_grupo_principal").dispatchEvent(click);
      break;
    case "contratado":
      document.getElementById("etapa_contratado").checked = true;
      document.getElementById("etapa_contratado").dispatchEvent(click);
      break;
  }

  switch (dados.lateralidade) {
    case "destro":
      document.getElementById("lateralidade_destro").checked = true;
      document.getElementById("lateralidade_destro").dispatchEvent(click);
      break;
    case "canhoto":
      document.getElementById("lateralidade_canhoto").checked = true;
      document.getElementById("lateralidade_canhoto").dispatchEvent(click);
      break;
    case "ambidestro":
      document.getElementById("lateralidade_ambidestro").checked = true;
      document.getElementById("lateralidade_ambidestro").dispatchEvent(click);
      break;
  }

  switch (dados.situacao) {
    case "aprovado":
      document.getElementById("situacao_aprovado").checked = true;
      document.getElementById("situacao_aprovado").dispatchEvent(click);
      break;
    case "dispensado":
      document.getElementById("situacao_dispensado").checked = true;
      document.getElementById("situacao_dispensado").dispatchEvent(click);
      break;
  }
  let nome;
  let valor;
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
  
  Array.from(document.getElementsByName('editar_ficha')).map((x)=>{x.onclick = ()=>{content_preview.classList.toggle('no_click')}})

}

function openModal() {
  document.getElementById("modal").classList.add("active");
}


function changePage(page) {
  linksPagination.forEach((item) => {
    removeActive(item);
  });

  addActive(linksPagination[page]);

  if (linksPagination[1].classList.contains("active")) {
    addDisabled(linksPagination[0]);
  } else {
    removeDisabled(linksPagination[0]);
  }
  if (
    linksPagination[linksPagination.length - 2].classList.contains("active")
  ) {
    addDisabled(linksPagination[linksPagination.length - 1]);
  } else {
    removeDisabled(linksPagination[linksPagination.length - 1]);
  }
}

const addActive = (item) => {
  item.classList.add("active");
};
const removeActive = (item) => {
  item.classList.remove("active");
};
const addDisabled = (item) => {
  item.classList.add("disabled");
};
const removeDisabled = (item) => {
  item.classList.remove("disabled");
};

const closeModal = () => {
document.getElementById("modal").classList.remove("active");
content_preview.classList.add('no_click')
};


const directory_uri = "../../wp-content/themes/sgf";
const bloco_fichas = document.getElementById("bloco_fichas");
const nav_page = document.getElementById("nav_page");
const content_preview = document.getElementById("content_preview");
let linksPagination = document.querySelectorAll(".page-link");

document.querySelectorAll(".modalClose").forEach((element, index) => {
  element.addEventListener("click", closeModal);
});

Coletar_pagina_preview()
Coletar_fichas(0,200);


//Paginação
addActive(linksPagination[1]);
addDisabled(linksPagination[0]);

linksPagination.forEach((item, index) => {
  if (index === 0) {
    item.addEventListener("click", () => {
      let ativo = document.getElementsByClassName("active")[0];
      let indexAtivo = Array.from(linksPagination).indexOf(ativo);
      changePage(indexAtivo - 1);
    });
  } else if (index === linksPagination.length - 1) {
    item.addEventListener("click", () => {
      let ativo = document.getElementsByClassName("active")[0];
      let indexAtivo = Array.from(linksPagination).indexOf(ativo);
      changePage(indexAtivo + 1);
    });
  } else {
    item.addEventListener("click", () => {
      changePage(index);
    });
  }
});
