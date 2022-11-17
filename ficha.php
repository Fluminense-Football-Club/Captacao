<?php 
  //Template name: captacao
?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/ficha/style-ficha.css">
  
  <title>Ficha de Avaliação</title>
</head>

<body>
  
  <?php get_template_part('./templates/header'); ?>
  <?php get_template_part('./templates/side', 'captacao'); ?>


  <main>
    <section id="ficha">
  <div class="segBotao " onclick="">
    <div>
      <a href="#" id="botao" class="btn btn-success"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/imprimir.png" alt="">
        <p>Salvar em pdf/ Imprimir</p>
      </a>    
    </div>
    <div class="botaoSalvar btn btn-warning">
      <a href="#" name='save_ficha'>
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/disquete.svg" alt="">
        <p>Salvar ficha</p>
      </a href="#">
    </div>
  </div>
    <div id="load_box"></div>
    <div id="worning">
    <div>
      <div class="image">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Checkmark.svg/675px-Checkmark.svg.png'>
      </div>
      <div class="text">
        <p>Ficha salva</p>
      </div>
      
    </div>
    </div>
    <?php get_template_part('./Captacao/modelo', 'ficha'); ?>
    
    <div class="segBotao " onclick="">
    <div>
      <a href="#" id="botao2" class="btn btn-success"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/imprimir.png" alt="">
        <p>Salvar em pdf/ Imprimir</p>
      </a>    
    </div>
    <div class="botaoSalvar btn btn-warning">
      <a href="#" name='save_ficha'>
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/disquete.svg" alt="">
        <p>Salvar ficha</p>
      </a href="#">
    </div>
  </div>
</section>
  </main>
  <script type='module' src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/ficha.js"></script>

</body>

</html>
