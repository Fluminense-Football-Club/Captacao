<div class="modal" id="modal">
  <div class="modal-content">
    <header class="modal-header">
    <div class='change_mode'>
      <a href="#" id="botao" name='imprimir' class="interagir_ficha"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/imprimir.png" alt="">
        <p>Salvar em pdf/ Imprimir</p>
      </a>    
    </div>
    <div class='change_mode'  style='display:none;'>
      <a href="#" name='save_ficha' class="interagir_ficha" >
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/disquete.svg" alt="">
          <p>Salvar ficha</p>
      </a>
    </div>
    <div class='change_mode' >
      <a href="#" name='editar_ficha' class="interagir_ficha">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/templates/assets/lapis.svg" alt="">
        <p>Editar ficha</p>
      </a>
    </div>
      <span class="modal-close modalClose">&#10006;</span>
    </header>
  
    <div id="content_preview">
              
    </div>

  </div>
</div>