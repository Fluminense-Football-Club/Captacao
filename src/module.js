export function Duplicar_campos() {
  function Clonar_cidade(selCid, siglaEstadoFrm1, siglaEstadoFrm2, cloneForm2) {
    selCid.addEventListener("click", () => {
      Array.from(selCid).forEach((item) => {
        if (item.value === selCid.value) {
          siglaEstadoFrm1.value = item.value;
          siglaEstadoFrm2.value = siglaEstadoFrm1.value;
          cloneForm2.value = item.innerText;
        }
      });
    });
  }

  function Clonar_campos([cmpSelecionado, cmpCopiado]) {
    cmpSelecionado.addEventListener("keyup", () => {
      cmpCopiado.value = cmpSelecionado.value;
    });
  }

  function Clonar_radio([RadioFrm1, RadioFrm2]) {
    RadioFrm1.forEach((_, index) => {
      RadioFrm1[index].addEventListener("click", () => {
        RadioFrm2[index].checked = RadioFrm1[index].checked;
      });
    });
  }

  const frm1_Select_cid = document.getElementById("estado_origem");
  const frm2_Select_cid = document.getElementById("frm2_Select_cid");
  const frm2_Select_cid_abrev = document.getElementById(
    "frm2_Select_cid_abrev"
  );
  const nomeAtletaFrm1 = document.getElementById("nome");
  const identidadeFrm1 = document.getElementById("identidade");
  const posicaoFrm1 = document.getElementById("posicao");
  const dtNascimentoFrm1 = document.getElementById("data_nascimento");
  const indicacaoFrm1 = document.getElementById("indicacao_externa");
  const ultClubeFrm1 = document.getElementById("ultimo_clube");
  const indFluFrm1 = document.getElementById("indicacao_interna");

  const sg = document.querySelector("#sg-estado");
  const necessidadesFrm1 = document.querySelectorAll("#necessidadesFrm1 input");
  const pePreferencialFrm1 = document.querySelectorAll(
    "#pePreferencialFrm1 input"
  );
  const necessidadesFrm = document.querySelectorAll("#necessidadesFrm1 input");
  const pePreferencialFrm = document.querySelectorAll(
    "#pePreferencialFrm1 input"
  );
  const deptMedicoFrm1 = document.querySelectorAll("#deptMedicoFrm1 input");
  const etapaFrm1 = document.getElementsByName("etapaFrm1");
  const selecRadioFrm1 = document.getElementsByName("categoria");

  // Selecionar campos a serem clonados
  const nomeAtletaFrm2 = document.getElementById("nomeFrm2");
  const identidadeFrm2 = document.getElementById("idtFrm2");
  const posicaoFrm2 = document.getElementById("posFrm2");
  const dtNascimentoFrm2 = document.getElementById("dtNascFrm2");
  const indicacaoFrm2 = document.getElementById("indFrm2");
  const ultClubeFrm2 = document.getElementById("ultClubeFrm2");
  const indFluFrm2 = document.getElementById("indFluFrm2");
  const necessidadesFrm2 = document.querySelectorAll("#necessidadesFrm2 input");
  const pePreferencialFrm2 = document.querySelectorAll(
    "#pePreferencialFrm2 input"
  );
  const necessidadesFrmClone = document.querySelectorAll(
    "#necessidadesFrm2 input"
  );
  const pePreferencialFrmClone = document.querySelectorAll(
    "#pePreferencialFrm2 input"
  );
  const deptMedicoFrm2Clone = document.querySelectorAll("#deptMedFrm2 input");
  const selecRadioFrm2 = document.getElementsByName("categoriaFrm2");
  const etapaFrm2 = document.getElementsByName("etapaFrm2");

  const vetor = [
    [nomeAtletaFrm1, nomeAtletaFrm2],
    [identidadeFrm1, identidadeFrm2],
    [posicaoFrm1, posicaoFrm2],
    [dtNascimentoFrm1, dtNascimentoFrm2],
    [indicacaoFrm1, indicacaoFrm2],
    [ultClubeFrm1, ultClubeFrm2],
    [indFluFrm1, indFluFrm2],
  ];
  const vetorRadio = [
    [selecRadioFrm1, selecRadioFrm2],
    [etapaFrm1, etapaFrm2],
  ];

  const vetorNecessidades = [
    [necessidadesFrm, necessidadesFrmClone],
    [pePreferencialFrm, pePreferencialFrmClone],
    [deptMedicoFrm1, deptMedicoFrm2Clone],
  ];

  for (const index in vetorRadio) {
    Clonar_radio([vetorRadio[index][0], vetorRadio[index][1]]);
  }
  for (const index in vetorNecessidades) {
    Clonar_radio([
      vetorNecessidades[index][0],
      vetorNecessidades[index][1],
      vetorNecessidades[index][2],
    ]);
  }

  Clonar_cidade(frm1_Select_cid, sg, frm2_Select_cid_abrev, frm2_Select_cid);
  vetor.forEach(Clonar_campos);
}
export function Salvar_ficha(clean = false) {
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

  let load_box = document.getElementById('load_box')
  let loading = document.createElement('img')
  let worning = document.getElementById('worning')
  
  loading.src = directory_uri+"/templates/assets/banner-loading.gif"
  loading.style = "width:150px;height:150px;"
  load_box.appendChild(loading)
  load_box.classList.add('active')

  fetch(url, {
    method: "POST",
    body: form,
  }).then((response) => response.json()).then(()=>{ 
    setTimeout(function () {
    load_box.classList.remove('active')
    worning.classList.add('active')
    setTimeout(function () {worning.classList.remove('active')}, 2000);
  }, 1000);
    if (clean){document.getElementById("ficha_avaliacao").reset()}
     
    

  });
} 
const directory_uri = "../../wp-content/themes/sgf";