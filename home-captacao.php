<?php 
  //Template name: home-captacao
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/home/style-home.css">
  <title>Home Captacao</title>
</head>
<body>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php get_template_part('./templates/header-home'); ?>
  
  <main class="container-home">
    <section class="conteudo-home" >
      <div class='topo-home'>
        <div class=servicos-img>
          <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/aplicativos.svg" alt="">
          <h1>Serviços</h1>
        </div>
        <div>
          <input class="form-control form-control-lg rounded-pill shadow-input" type="text" placeholder="Buscar...">
        </div>
      </div>
      <!-- <div class="apps"> -->
        <ul class="apps">
          <li>
            <a href="/captacao/cadastro">
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/add.svg" alt="">
              <span>Cadastrar atleta</span>
            </a>
          </li>

          <li>
            <a href="/captacao/fichas">
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/settings.svg" alt="">
              <span>Editar atleta</span>
            </a>
          </li>

          <li>
            <a href="/captacao/graficos">
              <img src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/grafico.svg" alt="">
              <span>Graficos</span>
            </a>
          </li>
        </ul>
      <!-- </div> -->
    </section>

  </main>
  <?php get_template_part('./templates/footer'); ?>
  <?php endwhile; else: ?>
    <section class="container sobre">
     <div class="grid-8">
      <p>Essa página não exite</p>
     </div>
    </section>
   <?php endif; ?>
</body>
</html>