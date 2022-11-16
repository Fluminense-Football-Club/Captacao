// Initialize and add the map
const directory_uri = "../../wp-content/themes/sgf";

function initMap() {
  const Brasil = { lat: -14.235004, lng: -51.92528 };

  // Create Map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Brasil,
  });

  const relacao_captadores = [
    ["captador1", { lat: -22.9068467, lng: -43.1728965 }],
    ["captador2", { lat: 1.5957682, lng: -60.58206759999999 }],
    ["captador3", { lat: -5.402580299999999, lng: -36.954107 }],
  ];
  // Create markers of Capitadores
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
    endCaptador.innerText = "Endereço:";
    totalIndicados.innerText = "Total indicados";
    totalAprovados.innerText = "Total aprovados";

    caixa.appendChild(img);
    caixa.appendChild(caixa2);
    caixa2.appendChild(nomeCaptador);
    caixa2.appendChild(endCaptador);
    caixa2.appendChild(totalIndicados);
    caixa2.appendChild(totalAprovados);

    let marker = new google.maps.Marker({
      position: local,
      map: map,
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




  // Create Magnitude in circles on the map.
  
  let address = ["Angra dos Reis,RJ","Itaperuna,RJ","Parati,RJ","Roçinha,RJ","Volta Redonda,RJ","Macae,RJ","Nova Friburgo,RJ"];
  address.forEach((endereco)=>{
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=AIzaSyCztYLt1JX-iampKYOrGbOx7say0bzOM4g`)
  .then((response) => {
      return response.json();
  }).then(jsonData => {
    let coordenadas = jsonData.results[0].geometry.location
    map.data.addGeoJson({
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
            coordinates: [coordenadas.lng,coordenadas.lat],
            
          },
        }
      ],
    });
  })
  .catch(error => {
      console.log(error);
  })
})
 

 


  // Get the desing
  let estados = ['RJ','RN','RR']
  estados.forEach((estado)=>{
  fetch(
    `https://servicodados.ibge.gov.br/api/v3/malhas/estados/${estado}?formato=application/vnd.geo+json`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.features.forEach((feature)=>{feature.properties.modo = 'estado'})
      map.data.addGeoJson(data);
    });
  })



  function Change_Styles(style_number) {
    switch (style_number) {
      case 0:
        map.data.setStyle((feature) => {
          const modo = feature.getProperty("modo");  
          if (modo === "estado") {
            return {
              fillColor: "#07823c",
              fillOpacity: 0,
              strokeWeight: 1,
              strokeColor: 'red'
            };
          };
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
        map.data.setStyle((feature) => {
          const modo = feature.getProperty("modo");  
          if (modo === "estado") {
            return {
              fillColor: "#07823c",
              fillOpacity: 0.4,
              strokeWeight: 1,
            };
          };
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
        map.data.setStyle((feature) => {
          const magnitude = feature.getProperty("mag");
          const modo = feature.getProperty("modo");  
          if (modo === "bolinha") {
            return {
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "red",
                fillOpacity: 0.5,
                scale: Math.pow(2, magnitude) ,
                strokeColor: "white",
                strokeWeight: 0.5,
              },
            };
          } 
          if (modo === "estado"){
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
  Change_Styles(0)

  

  google.maps.event.addListener(map, 'zoom_changed', function() {
    var zoom = map.getZoom();
    if(zoom >=6 && zoom <8){
      Change_Styles(1)
    }else if (zoom >=8){
      Change_Styles(2)
    }else{
      Change_Styles(0)
    }
    
  });


 
}

window.initMap = initMap;
