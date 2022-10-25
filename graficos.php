<?php 
  //Template name: captacao_graficos
?>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Graficos</title>   
        
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/graficos.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/templates/css/topo.css">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/style-ficha.css">
    
    <script src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/graficos.js"></script>
</head>
<body>

    <?php get_template_part('./templates/header'); ?>

    <main class="dividirColunas">


        <div id="graficos" class="graficos">
            <div id="aprovados" class="standardLine"></div>
            <div id="aprovados_estado" class="standardLine"></div>
            <div id="aprovados_posicao" class="fullColum"></div>
            <div id="captador_aprovados" class="fullColum"></div>
        </div>
        
        
    </main>
   
</body>
</html>