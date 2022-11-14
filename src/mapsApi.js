// Initialize and add the map
const directory_uri = "../../wp-content/themes/sgf";

function initMap() {
  // The location of Uluru
  const Brasil = { lat: -14.235004, lng: -51.92528 };

  const Estados = [
    ["captador1", { lat: -22.9068467, lng: -43.1728965 }],
    ["captador2", { lat: 1.5957682, lng: -60.58206759999999 }],
    ["captador3", { lat: -5.402580299999999, lng: -36.954107 }],
  ];
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Brasil,
  });
  // The marker, positioned at Uluru
  Estados.forEach((item,index) => {
    let nome;
    let local;
    [nome, local] = item;
    let caixa = document.createElement("div");
    let caixa2 = document.createElement("div");
    caixa.classList.add("modal-captador");

    let img = document.createElement("img");
    img.src = directory_uri + "/Captacao/assets/"+(index+1)+".PNG";
    let nomeCaptador = document.createElement("p");
    let endCaptador = document.createElement("p");
    let totalIndicados = document.createElement("p");
    let totalAprovados = document.createElement("p");

    nomeCaptador.innerText = nome;    
    endCaptador.innerText="Endereço:";
    totalIndicados.innerText="Total indicados";
    totalAprovados.innerText="Total aprovados";

    caixa.appendChild(img);
    caixa.appendChild(caixa2)
    caixa2.appendChild(nomeCaptador);
    caixa2.appendChild(endCaptador);
    caixa2.appendChild(totalIndicados);
    caixa2.appendChild(totalAprovados);    

    let marker = new google.maps.Marker({
      position: local,
      map: map,
      zIndex: 99,
    });

    let infowindow = new google.maps.InfoWindow({
      content: caixa,
      ariaLabel: "teste",
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  });

  function getCircle(magnitude) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: "red",
      fillOpacity: 0.2,
      scale: Math.pow(2, magnitude)*0.5,
      // scale: 100,
      strokeColor: "white",
      strokeWeight: 0.5,
    };
  }
  map.data.setStyle((feature) => {
    const magnitude = feature.getProperty("mag");
    return {
      icon: getCircle(magnitude),
    };
  });
  map.data.addGeoJson({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          mag: 5.7,
        },
        geometry: {
          type: "Point",
          coordinates: [-43.1728965, -22.9068467],
        },
      },
      {
        type: "Feature",
        properties: {
          mag: 5.7,
        },
        geometry: {
          type: "Point",
          coordinates: [-60.58206759999999, 1.5957682, -1],
        },
      }
    ],
  });
}

window.initMap = initMap;
