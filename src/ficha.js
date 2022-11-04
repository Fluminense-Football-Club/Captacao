import { Duplicar_campos } from "./module.js";

function Salvar_ficha() {
  let componentes_tecnicos;
  let componentes_taticos;
  let fundamentos_goleiros;
  var url = "http://localhost:8001/captacao/save_ficha";

  componentes_tecnicos = Array.from(
    document.querySelectorAll("#componentes_tecnicos select")
  ).map((x) => {
    if (x.value === "") {
      return `${x.name}=${null}`;
    } else {
      return `${x.name}=${x.value}`;
    }
  });
  componentes_tecnicos = componentes_tecnicos.join("|");

  componentes_taticos = Array.from(
    document.querySelectorAll("#componentes_taticos select")
  ).map((x) => {
    if (x.value === "") {
      return `${x.name}=${null}`;
    } else {
      return `${x.name}=${x.value}`;
    }
  });
  componentes_taticos = componentes_taticos.join("|");

  fundamentos_goleiros = Array.from(
    document.querySelectorAll("#fundamentos_goleiros select")
  ).map((x) => {
    if (x.value === "") {
      return `${x.name}=${null}`;
    } else {
      return `${x.name}=${x.value}`;
    }
  });
  fundamentos_goleiros = fundamentos_goleiros.join("|");

  var form = new FormData(document.getElementById("ficha_avaliacao"));
  form.append("componentes_tecnicos", componentes_tecnicos);
  form.append("componentes_taticos", componentes_taticos);
  form.append("fundamentos_goleiros", fundamentos_goleiros);

  fetch(url, {
    method: "POST",
    body: form,
  }).then((response) => response.json());
}

function Chamar_evento(botao) {
  botao.addEventListener("click", () => {
    window.print();
  });
}

const selBotao = document.getElementById("botao");
const selBotao2 = document.getElementById("botao2");

Duplicar_campos();
Chamar_evento(selBotao);
Chamar_evento(selBotao2);
Array.from(document.getElementsByName("save_ficha")).map((x) => {
  x.onclick = () => {
    Salvar_ficha();
  };
});
document
  .getElementById("ficha_avaliacao")
  .addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
  });
