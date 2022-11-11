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


    <main class='container-graficos'>    
        <div class="grid-select">
            <div>
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/filter.svg" alt="">            </div>
            <div>
        <select name="" id="graficos-all">
            <option value="0">Selecione o tipo de gráfico</option>
            <option value="1">Captadores</option>
            <option value="2">Regiões visitadas</option>
            <option value="3">Atletas monitorados</option>
        </select>
        </div>
        </div>

        <!-- Gráficos vindos do banco -->
        <div class="teste">
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

        <div class="graficos-geo-localizacao">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, vitae quas adipisci veritatis repellat similique facilis harum perspiciatis nostrum consequatur ipsum, soluta quia provident nihil asperiores quaerat reprehenderit molestiae doloremque.</p>
        </div>

        <div class="graficos-localizacao-atletas">
            <p>llalalalalala.</p>
        </div>
        
    </main>
    <?php endwhile; else: ?>
  <section class="container sobre">
   <div class="grid-8">
    <p>Essa página não exite</p>
   </div>
  </section>
 <?php endif; ?>
 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>