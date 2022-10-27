<?php 
  //Template name: ficha
?>
<form class="geral" id="ficha_avaliacao" >
  <button  onclick="salvar_ficha()">
    Salvar ficha
  </button>
  <div class="container" id="printable">
    <!-- Linha1 -->
    <div class="container-interno">
      <div class="linha1">
        <p class="strong">ficha de avaliação</p>


        <span>Nº <span id="numero_ficha">____________</span> </span>


      </div>
      <!-- Linha2 -->
      <div class="linha2">
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/img/escudo.png" alt="">
        <h1>centro de treinamento vale das laranjeiras</h1>
        <p>saída : ___/___/______</p>
      </div>

      <!-- telefones-nome -->
      <div class="telefones">
        <p>telefone p/contato</p>
        <p>telefone p/contato</p>
      </div>

      <!-- telefones formulário -->
      <div class="col3">



        <input type="text" name="captador">
        <input type="tel" name="telefone1">
        <input type="tel" name="telefone2">



      </div>

      <!-- Categoria e Etapa -->
      <div class="col2-1fr">
        <div class="categoria">
          <p>Categoria</p>
          <span>Junior</span>
          <input type="radio" name="categoriaFrm1" id="1" value="junior">
          <span>Juvenil</span>
          <input type="radio" name="categoriaFrm1" id="2" value="juvenil">
          <span>Infantil</span>
          <input type="radio" name="categoriaFrm1" id="3" value="infantil">
          <span>Mirim</span>
          <input type="radio" name="categoriaFrm1" id="4" value="mirim">
          <span>Pré Mirim</span>
          <input type="radio" name="categoriaFrm1" id="5" value="pre_mirim">



        </div>

        <div class="etapa">
          <p>Etapa</p>
          <span>Adaptação</span>
          <input type="radio" name="etapaFrm1" id="" value="adaptacao">
          <span>Gr.principal</span>
          <input type="radio" name="etapaFrm1" id="" value="grupo_principal">
          <span>Contratado</span>
          <input type="radio" name="etapaFrm1" id="" value="contratado">



        </div>
      </div>

      <!-- Informações do atleta -->
      <div class="col2-1fr">
        <div class="nome">
          <p>nome completo do atleta</p>



          <input type="text" id="nomeFrm1" name="nome">



        </div>
        <div class="identidade">
          <p>identidade</p>


          <input type="text" id="idtFrm1" name="identidade">




        </div>
      </div>
      <!-- Posição, Data de nascimento, Indicação -->
      <div class="col3">
        <div class="posicao">
          <p>Posição</p>



          <input type="text" id="posFrm1" name="posicao">




        </div>
        <div class="dt-nasc">
          <p>Data Nascimento</p>



          <input type="text" id="dtNascFrm1" name="data_nascimento">



        </div>

        <div class="indicacao">
          <p>Indicação</p>



          <input type="text" id="indFrm1" name="indicacao_externa">




        </div>
      </div>

      <div class="col3">
        <div class="cidade">
          <p>Estados</p>
          <div class="col2-auto">






            <select name="estados_brasil" id="estados-brasil">
              <option value=""> </option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>





            <input type="text" id="sg-estado">

          </div>
        </div>
        <div class="ultClube">
          <p>Último clube</p>


          <input type="text" id="ultClubeFrm1" name="ultimo_clube">




        </div>
        <div class="indFlu">
          <p>Ind. Fluminense</p>


          <input type="text" id="indFluFrm1" name="indicacao_interna">




        </div>
      </div>

      <!-- Necessidades / Pé preferencial -->
      <div class="col2">
        <div class="col6" id="necessidadesFrm1">
          <p>necessidades</p>
          <input type="checkbox" name="necessidade_alimentacao" id="alimentacao">
          <label for="alimentacao">Alimentação</label>

          <input type="checkbox" name="necessidade_alojamento" id="alojamento">
          <label for="alojamento">Alojamento</label>

          <input type="checkbox" name="necessidade_transporte" id="transporte">
          <label for="transporte">Transporte</label>
        </div>

        <div class="col6" id="pePreferencialFrm1">
          <p>Lateralidade</p>

          <input type="radio" name="lateralidade" id="destro" value="destro">
          <label for="destro">Destro</label>

          <input type="radio" name="lateralidade" id="canhoto" value="canhoto">
          <label for="canhoto">Canhoto</label>

          <input type="radio" name="lateralidade" id="ambidestro" value="ambidestro">
          <label for="ambidestro">Ambidestro</label>




        </div>
      </div>
      <!-- Dept. Médico / Dept. Fisiologia -->
      <div class="col2">
        <div class="col4" id="deptMedicoFrm1">


          <p>dept. médico</p>
          <input type="radio" name="departamento_medico" value="apto">


          <span>Apto</span>
          <input type="radio" name="departamento_medico" value="nao_apto">


          <span><span>não</span> apto</span>
          <p>Atestado Médico</p>
          <input type="radio" name="atestado_medico" value="sim">
          <span>Sim</span>
          <input type="radio" name="atestado_medico" value="nao">



          <span>Não</span>
          <p>______________________________________</p>
          <span class="assinatura">Assinatura do médico responsável</span>
        </div>
        <div class="col2 deptFisio">
          <p>dept. fisiologia</p>
          <div>
            <h5>_______________</h5>
            <span>Peso</span>
            <h5>_______________</h5>
            <span>Est.Preditiva</span>
          </div>
          <div>
            <h5>_______________</h5>
            <span>Estatura</span>

            <h5>_______________</h5>
            <span>Taxa de Maturação</span>


          </div>
          <h5>__________________________________________</h5>
          <span>Assinatura e carimbo</span>
        </div>
      </div>
      <!-- Encaminhamento para atletas aprovados -->
      <div class="col2 atlAprovados">
        <p class="strong">Encaminhamento para atletas aprovados</p>

        <div>
          <h1>DPT° ADMINISTRAÇÃO</h1>
          <span>Assinatura e Carimbo</span>
        </div>

        <div>
          <h1>DPT° SERVIÇO SOCIAL</h1>
          <span>Assinatura e Carimbo</span>
        </div>

        <div>
          <h1>DPT° PSICOLOGIA</h1>
          <span>Assinatura e Carimbo</span>
        </div>

        <div>
          <h1>DPT° NUTRIÇÃO</h1>
          <span>Assinatura e Carimbo</span>
        </div>
      </div>
      <!-- 2° Parte do Formulário -->
      <div class="col2">
        <div class="topoForm2">
          <div>
            <h1 class="strong">Centro de Treinamento</h1>
            <span>Entrada:_____/_____/______</span>
          </div>
          <div>
            
            <img class="mgEsc" src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/img/escudo.png" alt="">
          </div>
        </div>
        <div class="topoForm2-1">
          <h1 class="strong">Vale das Laranjeiras</h1>
          <span>Saída:_____/_____/______</span>
          <div class="col4">
        <input type="radio" name="situacao" value="aprovado">
            <span>APROVADO</span>
        <input type="radio" name="situacao" value="dispensado">
            <span>DISPENSADO</span>
          </div>
        </div>
      </div>

      <!-- Categoria e Etapa -->
      <div class="col2-1fr">
        <div class="categoria">
          <p>Categoria</p>
          <span>Junior</span>
          <input type="radio" name="categoriaFrm2" id="" disabled>
          <span>Juvenil</span>
          <input type="radio" name="categoriaFrm2" id="" disabled>
          <span>Infantil</span>
          <input type="radio" name="categoriaFrm2" id=""disabled>
          <span>Mirim</span>
          <input type="radio" name="categoriaFrm2" id=""disabled>
          <span>Pré Mirim</span>
          <input type="radio" name="categoriaFrm2" id="" disabled>
        </div>

        <div class="etapa">
          <p>Etapa</p>
          <span>Adaptação</span>
          <input type="radio" name="etapaFrm2" id="" disabled>
          <span>Gr.principal</span>
          <input type="radio" name="etapaFrm2" id="2" disabled>
          <span>Contratado</span>
          <input type="radio" name="etapaFrm2" id="1" disabled>
        </div>
      </div>
      <!-- Informações do atleta -->
      <div class="col2-1fr">
        <div class="nome">
          <p>nome completo do atleta</p>
          <input type="text" id="nomeFrm2" disabled>
        </div>
        <div class="identidade">
          <p>identidade</p>
          <input type="text" id="idtFrm2" disabled>
        </div>
      </div>
      <!-- Posição, Data de nascimento, Indicação -->
      <div class="col3">
        <div class="posicao">
          <p>Posição</p>
          <input type="text" id="posFrm2" disabled>
        </div>
        <div class="dt-nasc">
          <p>Data Nascimento</p>
          <input type="text" id="dtNascFrm2" disabled>
        </div>

        <div class="indicacao">
          <p>Indicação</p>
          <input type="text" id="indFrm2" disabled>
        </div>
      </div>

      <div class="col3">
        <div class="cidade">
          <p>Cidade</p>
          <div class="col2-auto">
            <input type="text" id="frm2_Select_cid" disabled>
            <input type="text" id="frm2_Select_cid_abrev" disabled>
          </div>

        </div>
        <div class="ultClube">
          <p>Último clube</p>
          <input type="text" id="ultClubeFrm2" disabled>
        </div>
        <div class="indFlu">
          <p>Ind. Fluminense</p>
          <input type="text" id="indFluFrm2" disabled>
        </div>
      </div>
      <!-- Necessidades / Pé preferencial -->
      <div class="col2">
        <div class="col6" id="necessidadesFrm2">
          <p>necessidades</p>
          <input type="checkbox" name="necessFrm2" disabled>
          <label for="almoxarifado">Almox</label>

          <input type="checkbox" name="necessFrm2" disabled>
          <label for="Alojamento">Alojamento</label>

          <input type="checkbox" disabled>
          <label for="almoxarifado">Transporte.</label>
        </div>

        <div class="col6" id="pePreferencialFrm2">
          <p>Pé preferencial</p>
          <input type="radio"  name="lateralidadeFrm2" disabled>
          <label for="almoxarifado">Destro</label>

          <input type="radio" name="lateralidadeFrm2" disabled>
          <label for="almoxarifado">Canhoto</label>

          <input type="radio" name="lateralidadeFrm2" disabled>
          <label for="almoxarifado">Ambidestro</label>
        </div>
      </div>
      <!-- Dept. Médico / Dept. Fisiologia -->
      <div class="col2">
        <div class="col4" id="deptMedFrm2">
          <p>dept. médico</p>
          <input type="radio" name="deptMedFrm2Apt" disabled>
          <span>Apto</span>
          <input type="radio" name="deptMedFrm2Apt" disabled>
          <span><span>não</span> apto</span>
          <p>Atestado Médico</p>
          <input type="radio" name="deptMedFrm2" disabled>
          <span>Sim</span>
          <input type="radio" name="deptMedFrm2" disabled>
          <span>Não</span>
          <p>______________________________________</p>
          <span class="assinatura">Assinatura do médico responsável</span>
        </div>
        <div class="col2 deptFisio">
          <p>dept. fisiologia</p>
          <div>
            <h5>_______________</h5>
            <span>Peso</span>
            <h5>_______________</h5>
            <span>Est.Preditiva</span>
          </div>
          <div>
            <h5>_______________</h5>
            <span>Estatura</span>

            <h5>_______________</h5>
            <span>Taxa Maturação</span>


          </div>
          <h5>__________________________________________</h5>
          <span>Assinatura e carimbo</span>
        </div>
      </div>
      <!-- conceito das características técnicas do atleta -->
      <div class="col4-fr">
        <p>conceito das características técnicas do atleta</p>
        <div class="col2-auto">
          <div class="col2-auto border" id="componentes_tecnicos">
            <p class="border">Componentes técnicos</p>
            <span>Cabeceio</span>
            <input type="text" name="cabeceio" id="">
            <span>Chute</span>
            <input type="text" name="chute" id="">
            <span>Cruzamento</span>
            <input type="text" name="cruzamento" id="">
            <span>Passe</span>
            <input type="text" name="passe" id="">
            <span>Recepção</span>
            <input type="text" name="recepcao" id="">
            <span>Drible</span>
            <input type="text" name="drible" id="">
          </div>

          <div class="col2-auto">
            <div class="col2-auto border" id="componentes_taticos">
              <p class="border">Componentes táticos</p>
              <span>Marcação</span>
              <input type="text" name="marcacao" id="">
              <span>Deslocamento</span>
              <input type="text" name="deslocamento" id="">
              <span>Posicionamento</span>
              <input type="text" name="posicionamento" id="">
              <span>Reposição</span>
              <input type="text" name="reposicao" id="">
              <span>Percepção</span>
              <input type="text" name="percepcao" id="">
            </div>

            <div class="border" id="fundamentos_goleiros">
              <p class="border">Fundamentos Goleiros</p>
              <div class="col2 border">
                <div class="col2-auto">
                  <span>Agilidade</span>
                  <input type="text" name="agilidade" id="">
                  <span>Reflexo</span>
                  <input type="text" name="reflexo" id="">
                  <span>Firmeza Pegada</span>
                  <input type="text" name="firmeza_pegada" id="">
                  <span>Defesa Bola Alta</span>
                  <input type="text" name="defesa_bola_alta" id="">
                  <span>Defesa Bola Baixa</span>
                  <input type="text" name="defesa_bola_baixa" id="">
                </div>


                <div class="col2-auto">
                  <span>Reposição c/Mão</span>
                  <input type="text" name="reposicao_mao" id="">
                  <span>Reposição c/Pé</span>
                  <input type="text" name="reposicao_pe" id="">
                  <span>Saída Bola Aérea</span>
                  <input type="text" name="saida_bola_aerea" id="">
                  <span>Saída Bola Baixa</span>
                  <input type="text" name="saida_bola_baixa" id="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <pre>legenda: 01-Muito Fraco    02-Fraco    03-Regular    4-Bom    05-Muito Bom</pre>
      </div>

      <div>
        <span>Parecer:________________________________________________________________________________________</span><br>
        <br>
        _______________________________________________________________________________________________<br>
        <br>
        _______________________________________________________________________________________________<br>
        <br>
        _______________________________________________________________________________________________<br>
        <br>
        _______________________________________________________________________________________________<span><br></span>
      </div>
    </div>
  </div>
</form>
