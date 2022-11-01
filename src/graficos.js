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
