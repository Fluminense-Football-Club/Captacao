<?php 
  //Template name: captacao
?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  

  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/ficha/style-ficha.css">
  
  <title>Ficha de Avaliação</title>
</head>

<body>
  
  <?php get_template_part('./templates/header'); ?>
  <?php get_template_part('./templates/side', 'captacao'); ?>


  <main class="dividirColunas">
  <div class="segBotao" onclick="">
    <a href="#" id="botao"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/img/print_FILL0_wght400_GRAD0_opsz48.png" alt="">
      <p>Salvar em pdf/ Imprimir</p>
    </a>
  </div>
  
    <?php get_template_part('./Captacao/formulario', 'ficha'); ?>
    
  <div class="segBotao">
    <a href="#" id="botao2"><img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/img/print_FILL0_wght400_GRAD0_opsz48.png" alt="">
      <p>Salvar em pdf / Imprimir</p>
    </a>
  </div>

  </main>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/ficha.js"></script>

</body>

</html>
