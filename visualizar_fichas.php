<?php 
  //Template name: captacao_fichas
?>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto&display=swap"
      rel="stylesheet"
    />
    <title>Visualizar Fichas</title>

    <link
      rel="stylesheet"
      href="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/css/visualizar_fichas/style-visualizar_fichas.css"
    />
  </head>

  <body>
    <?php get_template_part('./templates/header'); ?>
    <?php get_template_part('./templates/side', 'captacao'); ?>
    <?php get_template_part('./Captacao/modal', 'ficha'); ?>

    <main>
      <section id="visualizar-fichas">
        <div class="align-titulo">
          <div class="grid-titulo">
            <img
              src="<?php echo get_stylesheet_directory_uri(); ?>/Fisio/assets/grafico.png"
              alt=""
            />
            <h1>Visualizar fichas</h1>
          </div>
        </div>

        <div class="conteudo_fichas" id="conteudo_fichas">
          <div class="barra-topo-tabela-atletas align-end">
            <div class="barra-topo-tabela-atletas">
              <input
                class="form-control-plaintext"
                type="text"
                placeholder="Pesquisar"
              />
              <div>
                <a href="/">
                  <img
                    src="<?php echo get_stylesheet_directory_uri(); ?>/Fisio/assets/search.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class='pagination-pageActive'>

            <div class="fichas_view" id="id1" onclick="Preview_ficha(id1)">
              <img
                src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/fichaSearch.png"
                alt=""
                class="img_ficha"
              />
              <div class="info">
                <h2>N° da ficha:1</h2>
                <span>Nome: Juca</span>
                <span>Data de Nascimento:</span>
                <span>Telefone: </span>
                <span>Estado: </span>
                <span>Categoria:</span>
                <span>Situação: </span>
                <span>Posição: </span>
              </div>
            </div>

            <div class="fichas_view" id="id2" onclick="Preview_ficha(id2)">
              <img
                src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/fichaSearch.png"
                alt=""
                class="img_ficha"
              />
              <div class="info">
                <h2>N° da ficha:1</h2>
                <span>Nome: Juca</span>
                <span>Data de Nascimento:</span>
                <span>Telefone: </span>
                <span>Estado: </span>
                <span>Categoria:</span>
                <span>Situação: </span>
                <span>Posição: </span>
              </div>
            </div>

            <div class="fichas_view" id="id1" onclick="Preview_ficha(id1)">
              <img
                src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/fichaSearch.png"
                alt=""
                class="img_ficha"
              />
              <div class="info">
                <h2>N° da ficha:1</h2>
                <span>Nome: Juca</span>
                <span>Data de Nascimento:</span>
                <span>Telefone: </span>
                <span>Estado: </span>
                <span>Categoria:</span>
                <span>Situação: </span>
                <span>Posição: </span>
              </div>
            </div>
            <div class="fichas_view" id="id1" onclick="Preview_ficha(id1)">
              <img
                src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/assets/fichaSearch.png"
                alt=""
                class="img_ficha"
              />
              <div class="info">
                <h2>N° da ficha:1</h2>
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
          <div class="align-end" id="nav_page">
            <nav aria-label="...">
              <ul class="pagination pagination2">
                <li class="page-item">
                  <a class="page-link">Antes</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item" aria-current="page">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item" aria-current="page">
                  <a class="page-link" href="#">5</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">6</a></li>
                <li class="page-item"><a class="page-link" href="#">7</a></li>
                <li class="page-item" aria-current="page">
                  <a class="page-link" href="#">8</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">9</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">10</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">Depois</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>

    <script
      type="module"
      src="<?php echo get_stylesheet_directory_uri(); ?>/Captacao/src/visualizar_fichas.js"
    ></script>
  </body>
</html>
