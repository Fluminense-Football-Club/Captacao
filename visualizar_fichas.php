<?php 
  //Template name: captacao_fichas
?>
<html lang="pt_BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap" rel="stylesheet">
  <title>Visualizar Fichas</title>   
  
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/visualizar_fichas/style-visualizar_fichas.css">

    
</head>
<body>

    <?php get_template_part('./templates/header'); ?>
    <?php get_template_part('./templates/side', 'captacao'); ?>

    <?php get_template_part('./Captacao/modal', 'ficha'); ?>

    <main class="dividirColunas">
      

      <div id="bloco_fichas">
        
        <div class="fichas_view" id='id1'onclick="Preview_ficha(id1)">
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/ficha.png" alt="" class="img_ficha">         
          <div class="info">  
            <span>Ficha nº:1</span>
            <span>Nome: Juca</span>
            <span>Data de Nascimento:</span>
            <span>Telefone: </span>
            <span>Estado: </span>
            <span>Categoria:</span>
            <span>Situação: </span>
            <span>Posição: </span>
          </div>
        </div>


        <div class="fichas_view" id='id2'onclick="Preview_ficha(id2)">
          
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/ficha.png" alt="" class="img_ficha">         
          <div class="info">  
            <span>Ficha nº:2</span>
            <span>Nome: Juca</span>
            <span>Data de Nascimento:</span>
            <span>Telefone: </span>
            <span>Estado: </span>
            <span>Categoria:</span>
            <span>Situação: </span>
            <span>Posição: </span>
          </div>
        </div>

        <div class="fichas_view" id='id1'onclick="Preview_ficha(id1)">
          
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/ficha.png" alt="" class="img_ficha">         
          <div class="info">  
            <span>Ficha nº:3</span>
            <span>Nome: Juca</span>
            <span>Data de Nascimento:</span>
            <span>Telefone: </span>
            <span>Estado: </span>
            <span>Categoria:</span>
            <span>Situação: </span>
            <span>Posição: </span>
          </div>
        </div>
        
      </div>

    </main>
    
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/visualizar_fichas.js"></script>
   
</body>
</html>