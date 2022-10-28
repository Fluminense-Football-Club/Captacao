<?php 
  //Template name: captacao_graficos
?>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap" rel="stylesheet">
    
    <title>Graficos</title>   
        
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/graficos/style-graficos.css">
    
    <script defer src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/graficos.js"></script>
</head>
<body>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php get_template_part('./templates/header'); ?>
    <?php get_template_part('./templates/side', 'captacao'); ?>


    <main class="dividirColunas">
        <div id="graficos" class="graficos">
            <div id="aprovados" class="standardLine"></div>
            <div id="aprovados_estado" class="standardLine"></div>
            <div id="aprovados_posicao" class="fullColum"></div>
            <div id="captador_aprovados" class="fullColum"></div>
        </div>        
    </main>
    <?php endwhile; else: ?>
  <section class="container sobre">
   <div class="grid-8">
    <p>Essa página não exite</p>
   </div>
  </section>
 <?php endif; ?>
</body>
</html>