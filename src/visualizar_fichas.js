import { Duplicar_campos, Salvar_ficha } from "./module.js";

function Coletar_fichas(value_initial, value_final) {
  // Coletar dados
  var url =
    "http://localhost:8001/captacao/get_data?" +
    new URLSearchParams({
      value_initial: value_initial,
      value_final: value_final,
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

function Coletar_pagina_preview() {
  // Coletar página
  var url = "http://sgf.local/modelo_ficha/";

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
      content_preview.classList.add("no_click");
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
  let bloco_fichas = document.createElement("div");
  let i = 1;
  bloco_fichas.className = "pagination-pageDisabled";
  bloco_fichas.id = `bloco_ficha${i}`;
  dados["fichas"].forEach((element) => {
    let ficha = document.createElement("div");

    ficha.className = "fichas_view";
    ficha.id = "ficha" + element.numero_ficha;
    ficha.objeto_ficha = element;
    ficha.onclick = () => {
      Preview_ficha(ficha);
    };
    let img_ficha = document.createElement("img");
    img_ficha.src = directory_uri + "/Captacao/assets/fichaSearch.png";
    img_ficha.className = "img_ficha";

    ficha.appendChild(img_ficha);
    ficha.appendChild(Destribuir_valores(element));

    bloco_fichas.appendChild(ficha);

    contador += 1;
    if (contador >= 20) {
      i += 1;
      view_bloco_fichas.push(bloco_fichas);
      bloco_fichas = document.createElement("div");
      bloco_fichas.className = "pagination-pageDisabled";
      bloco_fichas.id = `bloco_ficha${i}`;
      contador = 0;
    }
  });
  view_bloco_fichas.forEach((element) => {
    if (element) {
      conteudo_fichas.insertBefore(element, nav_page);
    }
  });

  Activate_page(view_bloco_fichas[1]);
}

function Preview_ficha(ficha) {
  Open_modal();
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

  Array.from(document.getElementsByName("editar_ficha")).map((x) => {
    x.onclick = () => {
      content_preview.classList.toggle("no_click");
      Change_mode();
    };
  });
  Array.from(document.getElementsByName("save_ficha")).map((x) => {
    x.onclick = () => {
      Change_mode();
      Salvar_ficha();
      content_preview.classList.toggle("no_click");
    };
  });
  Array.from(document.getElementsByName("imprimir")).map((x) => {
    x.onclick = () => {
      imprimir_ficha(content_preview)
    };
  });
  
}

function imprimir_ficha(pagina){
  let head = document.head.innerHTML
  let body = document.body.innerHTML
  var normal_page = '<html><head>'+head+'</head><body>'+body+'</body></html>'
  var divContents = pagina;
        
  document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../wp-content/themes/sgf/Captacao/css/ficha/style-ficha.css">
    <title>Ficha de Avaliação</title>
    `
  document.body.innerHTML = divContents.innerHTML

  setTimeout(function () { window.print(); 
  window.focus = document.location.reload(false)
  },500); 
  

}

function Change_page(page) {
  links_pagination.forEach((item) => {
    Remove_active(item);
  });
  view_bloco_fichas.forEach((item) => {
    try {
      Disable_page(item);
    } catch (e) {
      //pass
    }
  });

  Activate_page(view_bloco_fichas[page]);
  Add_active(links_pagination[page]);

  if (links_pagination[1].classList.contains("active")) {
    Add_disabled(links_pagination[0]);
  } else {
    Remove_disabled(links_pagination[0]);
  }
  if (
    links_pagination[links_pagination.length - 2].classList.contains("active")
  ) {
    Add_disabled(links_pagination[links_pagination.length - 1]);
  } else {
    Remove_disabled(links_pagination[links_pagination.length - 1]);
  }
}

function Change_mode() {
  let navegadores = document.querySelectorAll(".change_mode");
  navegadores.forEach((funcionalidade) => {
    if (funcionalidade.style.display === "none") {
      funcionalidade.style = "display:block;";
    } else {
      funcionalidade.style = "display:none;";
    }
  });
}

const Activate_page = (item) => {
  item.classList.add("pagination-pageActive");
  item.classList.remove("pagination-pageDisabled");
};
const Disable_page = (item) => {
  item.classList.add("pagination-pageDisabled");
  item.classList.remove("pagination-pageActive");
};
const Add_active = (item) => {
  item.classList.add("active");
};
const Remove_active = (item) => {
  item.classList.remove("active");
};
const Add_disabled = (item) => {
  item.classList.add("disabled");
};
const Remove_disabled = (item) => {
  item.classList.remove("disabled");
};
const Close_modal = () => {
  modal.classList.remove("active");
  content_preview.classList.add("no_click");
};
const Open_modal = () => {
  modal.classList.add("active");
};

const directory_uri = "../../wp-content/themes/sgf";
const nav_page = document.getElementById("nav_page");
const conteudo_fichas = document.getElementById("conteudo_fichas");
const content_preview = document.getElementById("content_preview");
const modal = document.getElementById("modal");
let links_pagination = document.querySelectorAll(".page-link");
let view_bloco_fichas = [""];

document.querySelectorAll(".modalClose").forEach((element) => {
  element.addEventListener("click", Close_modal);
});

Coletar_pagina_preview();
Coletar_fichas(0, 200);

//Paginação
Add_active(links_pagination[1]);
Add_disabled(links_pagination[0]);

links_pagination.forEach((item, index) => {
  if (index === 0) {
    item.addEventListener("click", () => {
      let ativo = document.getElementsByClassName("active")[0];
      let indexAtivo = Array.from(links_pagination).indexOf(ativo);
      Change_page(indexAtivo - 1);
    });
  } else if (index === links_pagination.length - 1) {
    item.addEventListener("click", () => {
      let ativo = document.getElementsByClassName("active")[0];
      let indexAtivo = Array.from(links_pagination).indexOf(ativo);
      Change_page(indexAtivo + 1);
    });
  } else {
    item.addEventListener("click", () => {
      Change_page(index);
    });
  }
});
