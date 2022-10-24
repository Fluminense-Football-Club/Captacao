

var url = "http://localhost:8080/cgi-bin/gerar_graficos.py";

var myHeaders = new Headers();
var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};

var myRequest = new Request(url, myInit);

fetch(myRequest)
.then(
    (response)=>response.json()
)
.then(
    (data)=>{
        data['graficos'].forEach((element) => {
            nome = element.fig[0]
            grafico = element.fig[1]
            var ifrm = document.createElement("IFRAME");
            ifrm.setAttribute("srcdoc", grafico);
            ifrm.className = 'iframe'
            document.getElementById(nome).appendChild(ifrm);
        });
        
    }
);
