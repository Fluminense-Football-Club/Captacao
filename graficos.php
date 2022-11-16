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
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script type='module' src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/mapsApi.js"></script>
    <script src="https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js"></script>
    
</head>
<body>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <?php get_template_part('./templates/header'); ?>
    <?php get_template_part('./templates/side', 'captacao'); ?>


    <main class='container-graficos'>    
        <div class="grid-select">
            <div>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/filter.svg" alt="">            </div>
            <div>
        <select name="" id="graficos-all">
            <option value="0">Selecione o tipo de gráfico</option>
        </select>
        </div>
        </div>

        <!-- Gráficos vindos do banco -->
        <div class="Container_graficos" pagina="Captadores">
            <div id="graficos" class="graficos">
                <div class="texto-gráficos">
                <div class="marker"></div>    
                <p>Nos gráficos abaixo temos o total de inscritos, a seguir o percentual de aprovados e reprovados no geral e por região.</p></div>
                <div id="aprovados" class="standardLine">      
                </div>
                <div id="aprovados_estado" class="standardLine"></div>
                <div id="aprovados_posicao" class="fullColum"></div>
                <div id="captador_aprovados" class="fullColum"></div>
            </div>  
        </div>
        <!-- Fim -->
        <div class="Container_graficos" pagina='Captadores pelo Brasil'>
            <div id="Captadores" class='map'></div>                
            
        </div>

        <div class="Container_graficos" pagina='Atletas monitorados'>
            <div id="Atletas" class='map'></div>     
        </div>
        <div class="Container_graficos" pagina='Atletas nas pousadas'>
            <div id="Atletas_pousadas" class='map'></div>     
        </div>
        
    </main>
    <?php endwhile; else: ?>
  <section class="container sobre">
   <div class="grid-8">
    <p>Essa página não exite</p>
   </div>
  </section>
 <?php endif; ?>
 <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCztYLt1JX-iampKYOrGbOx7say0bzOM4g&callback=initMap&v=weekly&libraries=places"
      defer
    ></script>
    
</body>
</html>