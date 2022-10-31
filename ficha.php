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


  <main class="dividirColunas">
  <div class="segBotao" onclick="">
    <a href="#" id="botao"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/print_FILL0_wght400_GRAD0_opsz48.png" alt="">
      <p>Salvar em pdf/ Imprimir</p>
    </a>
  </div>
  <button  id='save_ficha'>
    Salvar ficha
  </button>
    <?php get_template_part('./Captacao/formulario', 'ficha'); ?>
    
  <div class="segBotao">
    <a href="#" id="botao2"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/print_FILL0_wght400_GRAD0_opsz48.png" alt="">
      <p>Salvar em pdf / Imprimir</p>
    </a>
  </div>

  </main>
  <script type='module' src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/ficha.js"></script>

</body>

</html>
