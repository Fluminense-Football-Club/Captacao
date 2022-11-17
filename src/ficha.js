import { Duplicar_campos, Salvar_ficha } from "./module.js";
const directory_uri = "../../wp-content/themes/sgf";


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
    Salvar_ficha( true);
  };
});
document
  .getElementById("ficha_avaliacao")
  .addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
  });
