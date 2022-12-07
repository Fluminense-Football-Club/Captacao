// Initialize and add the map
const directory_uri = "../../wp-content/themes/sgf";
function initMap_Captadores() {
  const Brasil = { lat: -14.235004, lng: -51.92528 };
  // Create Map
  const map_Captadores = new google.maps.Map(
    document.getElementById("Captadores"),
    {
      zoom: 4,
      center: Brasil,
    }
  );

  const relacao_captadores = [
    ["captador1", { lat: -22.9068467, lng: -43.1728965 }],
    ["captador2", { lat: 1.5957682, lng: -60.58206759999999 }],
    ["captador3", { lat: -5.402580299999999, lng: -36.954107 }],
  ];
  // Create markers of Capitadores
  let dados_captadores = [['Rio de Janeiro',15,5],['Roraima',20,7],['Rio Grande do Norte',12,9]]
  relacao_captadores.forEach((item, index) => {
    let nome;
    let local;
    [nome, local] = item;
    let caixa = document.createElement("div");
    let caixa2 = document.createElement("div");
    caixa.classList.add("modal-captador");

    let img = document.createElement("img");
    img.src = directory_uri + "/Captacao/assets/" + (index + 1) + ".PNG";
    let nomeCaptador = document.createElement("p");
    let endCaptador = document.createElement("p");
    let totalIndicados = document.createElement("p");
    let totalAprovados = document.createElement("p");

    nomeCaptador.innerText = nome;
    endCaptador.innerText = `Endereço: ${dados_captadores[index][0]}`;
    totalIndicados.innerText = `Total indicados: ${dados_captadores[index][1]}`;
    totalAprovados.innerText = `Total aprovados: ${dados_captadores[index][2]}`;

    caixa.appendChild(img);
    caixa.appendChild(caixa2);
    caixa2.appendChild(nomeCaptador);
    caixa2.appendChild(endCaptador);
    caixa2.appendChild(totalIndicados);
    caixa2.appendChild(totalAprovados);

    let marker = new google.maps.Marker({
      position: local,
      map: map_Captadores,
    });

    let infowindow = new google.maps.InfoWindow({
      content: caixa,
      ariaLabel: "teste",
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map_Captadores,
      });
    });
  });

  // Create Magnitude in circles on the map.

  let address = [
    "Angra dos Reis,RJ",
    "Itaperuna,RJ",
    "Parati,RJ",
    "Rocinha,RJ",
    "Volta Redonda,RJ",
    "Macae,RJ",
    "Nova Friburgo,RJ",
  ];
  address.forEach((endereco) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=AIzaSyCztYLt1JX-iampKYOrGbOx7say0bzOM4g`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        let coordenadas = jsonData.results[0].geometry.location;
        map_Captadores.data.addGeoJson({
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                mag: 4.2,
                modo: "bolinha",
              },
              geometry: {
                type: "Point",
                coordinates: [coordenadas.lng, coordenadas.lat],
              },
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Get the desing
  let estados = ["RJ", "RN", "RR"];
  estados.forEach((estado) => {
    fetch(
      `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${estado}?formato=application/vnd.geo+json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.features.forEach((feature) => {
          feature.properties.modo = "estado";
        });
        map_Captadores.data.addGeoJson(data);
      });
  });

  function Change_Styles(style_number) {
    switch (style_number) {
      case 0:
        map_Captadores.data.setStyle((feature) => {
          const modo = feature.getProperty("modo");
          if (modo === "estado") {
            return {
              fillColor: "#07823c",
              fillOpacity: 0,
              strokeWeight: 1,
              strokeColor: "red",
            };
          }
          if (modo === "bolinha") {
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillOpacity: 0,
                strokeWeight: 0,
              },
            };
          }
        });

        break;
      case 1:
        map_Captadores.data.setStyle((feature) => {
          const modo = feature.getProperty("modo");
          if (modo === "estado") {
            return {
              fillColor: "#07823c",
              fillOpacity: 0.4,
              strokeWeight: 1,
            };
          }
          if (modo === "bolinha") {
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillOpacity: 0,
                strokeWeight: 0,
              },
            };
          }
        });
        break;

      case 2:
        map_Captadores.data.setStyle((feature) => {
          const magnitude = feature.getProperty("mag");
          const modo = feature.getProperty("modo");
          if (modo === "bolinha") {
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "red",
                fillOpacity: 0.5,
                scale: Math.pow(2, magnitude),
                strokeColor: "white",
                strokeWeight: 0.5,
              },
            };
          }
          if (modo === "estado") {
            return {
              fillOpacity: 0,
              strokeWeight: 1,
            };
          }
        });
        break;

      default:
        break;
    }
  }
  Change_Styles(0);

  google.maps.event.addListener(map_Captadores, "zoom_changed", function () {
    var zoom = map_Captadores.getZoom();
    if (zoom >= 6 && zoom < 8) {
      Change_Styles(1);
    } else if (zoom >= 8) {
      Change_Styles(2);
    } else {
      Change_Styles(0);
    }
  });
}

function initMap_Atletas() {
  const Brasil = { lat: -14.235004, lng: -51.92528 };
  // Create Map
  const map_Atletas = new google.maps.Map(document.getElementById("Atletas"), {
    zoom: 4,
    center: Brasil,
  });

  const relacao_captadores = [ 
    ["Fred", { lat: -17.86654464134723, lng: -41.50246563622029 }],
    ["Marcelo", { lat: -22.9068467, lng: -43.1728965 }],
    ["Tiago Silva", { lat: -5.402580299999999, lng: -36.954107 }],
  ];
  // Create markers of Capitadores
  let fotos_atletas = ['https://images2.minutemediacdn.com/image/upload/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2FFBL-LIBERTADORES-RIVER-FLUMINENSE-8ceb19b695c247bc0bae83122a59d177.jpg','https://s2.glbimg.com/Endj-NmHQ6maYDXq0reNNh06p8M=/0x0:2047x1256/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/P/9/yrBroxQFytqMmPK9znzw/26974672723-8b43b25245-k.jpg',"https://i.pinimg.com/564x/f1/3b/9e/f13b9e47a6d45a42d3b80ff4fb5aadba.jpg"]
  relacao_captadores.forEach((item, index) => {
    let nome;
    let local;
    [nome, local] = item;
    let caixa = document.createElement("div");
    let caixa1 = document.createElement("div");
    let caixa2 = document.createElement("div");
    caixa.classList.add("modal-captador");

    let img = document.createElement("img");
    img.src =fotos_atletas[index];
    let nomeCaptador = document.createElement("p");

    nomeCaptador.innerText = nome;

    caixa1.appendChild(img);
    caixa.appendChild(caixa1);
    caixa.appendChild(caixa2);
    caixa1.appendChild(nomeCaptador);
    caixa1.className = 'perfil_map_atleta'

    let div_relatorios = document.createElement("div");
    div_relatorios.className = "botao_relatorios";
    let props = [[1,'23/04/22','Regular'], [2,'10/06/22','Avanço'], [3,'17/07/22','Avanço']]
    
    for (var prop of props ) {
      
      let div_botoes = document.createElement("div");
      div_botoes.onclick = () => {
        window.location.href = "https://www.inf.pucrs.br/~cnunes/ferramentas/Aulas/tipos_de_graficos.pdf";
      };
      let endCaptador = document.createElement("p");
      let totalIndicados = document.createElement("p");
      let totalAprovados = document.createElement("p");

      endCaptador.innerText = `Visita: ${prop[0]}`;
      totalIndicados.innerText = `Data de Observação: ${prop[1]}`;
      totalAprovados.innerText = `Relatório: ${prop[2]}`;

      div_botoes.appendChild(endCaptador);
      div_botoes.appendChild(totalIndicados);
      div_botoes.appendChild(totalAprovados);
      div_relatorios.appendChild(div_botoes);
    }
    caixa2.appendChild(div_relatorios);

    let marker = new google.maps.Marker({
      position: local,
      map: map_Atletas,
    });

    let infowindow = new google.maps.InfoWindow({
      content: caixa,
      ariaLabel: "teste",
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map_Atletas,
      });
    });
  });
}

function initMap_Atletas_pousadas() {
  // let address = [
  //   "Hotel Pousada Xerém,RJ",
  //   "Pousada da Vila em Xerém,RJ",
  //   "Pousada Xerem,RJ",
  //   "Pousada Mantiquira,RJ",
  //   "Pousada Berço da Bola Xerém,RJ",
  //   "Pousada Rayza, Xerém,RJ",
  // ];
  // const locations = [];

  // address.forEach((endereco) => {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=AIzaSyCztYLt1JX-iampKYOrGbOx7say0bzOM4g`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((jsonData) => {
  //       let coordenadas = jsonData.results[0].geometry.location;
  //       let lng = coordenadas.lng;
  //       let lat = coordenadas.lat;
  //       locations.push({ lat: lat, lng: lng });
  //       console.log(locations)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
  const locations = [
    {
        "lat": -22.607459,
        "lng": -43.2858923
    },
    {
        "lat": -22.6011767,
        "lng": -43.2931449
    },
    {
        "lat": -22.5788539,
        "lng": -43.3149785
    },
    {
        "lat": -22.5886474,
        "lng": -43.307028
    },
    {
        "lat": -22.5892026,
        "lng": -43.3071895
    },
    {
        "lat": -22.6005954,
        "lng": -43.3081272
    }
]
  const Brasil = { lat: -22.577161914127004, lng: -43.31522292578086 };

  const map = new google.maps.Map(document.getElementById("Atletas_pousadas"), {
    zoom: 3,
    center: Brasil,
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
}





function initMap() {
  initMap_Captadores();
  initMap_Atletas();
  initMap_Atletas_pousadas();
}

window.initMap = initMap;
