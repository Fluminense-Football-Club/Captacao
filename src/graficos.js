

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

let optionSelected = document.getElementById("graficos-all");
let Container_graficos = document.querySelectorAll(".Container_graficos");

Container_graficos.forEach((item, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.innerText = item.getAttribute("pagina");
  optionSelected.appendChild(option);
});

Container_graficos[0].classList.add("ativa");

optionSelected.addEventListener("change", () => {
  Container_graficos.forEach((item) => {
    item.classList.remove("ativa");
  });
  Container_graficos[optionSelected.value].classList.add("ativa");
});
