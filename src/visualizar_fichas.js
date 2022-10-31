function Coletar_fichas() {
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
    })
    .finally(() => {
      aux = "nao";
      switch (aux) {
        case "sim":
          document.getElementById("atestado_medico_sim").checked = true;
          break;
        case "nao":
          document.getElementById("atestado_medico_nao").checked = true;
          break;
      }

      aux = "captador";
      document.getElementById("captador").value = aux;

      aux = "infantil";
      switch (aux) {
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

      aux = "23/04/22";
      document.getElementById("data_nascimento").value = aux;

      aux = "nao_apto";
      switch (aux) {
        case "apto":
          document.getElementById("departamento_medico_apto").checked = true;
          break;
        case "nao_apto":
          document.getElementById(
            "departamento_medico_nao_apto"
          ).checked = true;
          break;
      }

      aux = "BA";
      document.getElementById("estado_origem").value = aux;

      aux = "contratado";
      switch (aux) {
        case "adaptacao":
          document.getElementById("etapa_adaptacao").checked = true;
          break;
        case "grupo_principal":
          document.getElementById("etapa_grupo_principal").checked = true;
          break;
        case "contratado":
          document.getElementById("etapa_contratado").checked = true;
          break;
      }

      aux = "999999999";
      document.getElementById("identidade").value = aux;

      aux = "nome de pessoa";
      document.getElementById("indicacao_externa").value = aux;

      aux = "nome de pessoa";
      document.getElementById("indicacao_interna").value = aux;

      aux = "ambidestro";
      switch (aux) {
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

      aux = 1;
      document.getElementById("necessidade_alimentacao").checked = aux;
      document.getElementById("necessidade_alojamento").checked = aux;
      document.getElementById("necessidade_transporte").checked = aux;

      aux = "nome atleta";
      document.getElementById("nome").value = aux;

      aux = "4";
      document.getElementById("numero_ficha").innerText = aux;

      aux = "Atacante";
      document.getElementById("posicao").value = aux;

      aux = "dispensado";
      switch (aux) {
        case "aprovado":
          document.getElementById("situacao_aprovado").checked = true;
          break;
        case "dispensado":
          document.getElementById("situacao_dispensado").checked = true;
          break;
      }

      aux = "21 99999-9999";
      document.getElementById("telefone1").value = aux;
      document.getElementById("telefone2").value = aux;

      aux = "nome do clube";
      document.getElementById("ultimo_clube").value = aux;

      aux =
        "marcacao=2|deslocamento=4|posicionamento=3|reposicao=3|percepcao=2";
      aux.split("|").map((x) => {
        [nome, valor] = x.split("=");
        document.getElementById(nome).value = valor;
      });

      aux = "cabeceio=5|chute=2|cruzamento=2|passe=3|recepcao=4|drible=4";
      aux.split("|").map((x) => {
        [nome, valor] = x.split("=");
        document.getElementById(nome).value = valor;
      });

      aux =
        "agilidade=4|reflexo=3|firmeza_pegada=3|defesa_bola_alta=4|defesa_bola_baixa=3|reposicao_mao=3|reposicao_pe=2|saida_bola_aerea=2|saida_bola_baixa=3";
      aux.split("|").map((x) => {
        [nome, valor] = x.split("=");
        document.getElementById(nome).value = valor;
      });
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
