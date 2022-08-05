import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light">
        <a class="navbar-brand mx-auto" href="index.html">
          <img
            src="assets/img/logo-todos.png"
            width="500"
            alt="Logo Redes de Repositórios Digitais"
            class="assets/img-fluid"
          />
        </a>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSite"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSite">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Início
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="navDrop"
              >
                Sobre
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="documentos.html">
                  Documentos
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                A Rede
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="navDrop"
              >
                Sub-redes
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Subrede Norte
                </a>
                <a class="dropdown-item" href="#">
                  Subrede Nordeste
                </a>
                <a class="dropdown-item" href="#">
                  Subrede Centro-Oeste
                </a>
                <a class="dropdown-item" href="#">
                  Subrede Sul
                </a>
                <a class="dropdown-item" href="#">
                  Subrede Sudeste
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Eventos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Notícias
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Publicações
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Material de capacitação
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>

          <form class="form-inline ml-auto my-4" action="">
            <input
              class="form-control mr-2"
              type="search"
              placeholder="Buscar..."
            />
            <button class="btn btn-dark" type="submit">
              Ok
            </button>
          </form>
        </div>
      </nav>

      <div
        id="carouselSite"
        class="carousel slide d-none d-md-block"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li data-target="#carouselSite" data-slide-to="0" class="active"></li>
          <li data-target="#carouselSite" data-slide-to="1"></li>
          <li data-target="#carouselSite" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/img/slide-01.png"
              class="image-fluid d-block d-md-block w-100"
              alt="slide-01"
            />
            <div class="carousel-caption d-none d-md-block text-dark w-50 mx-auto">
              <h3 class="h3CarouselImg">Conheça a Rede!</h3>
              <p class="lead pCarouselImg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/img/slide-02.png"
              class="image-fluid d-block d-md-block w-100"
              alt="slide-02"
            />
            <div class="carousel-caption d-none d-md-block text-dark w-50 mx-auto">
              <h3 class="h3CarouselImg">Acesse nossos documentos</h3>
              <p class="lead pCarouselImg">
                Donec vulputate sapien vitae nunc venenatis condimentum.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="assets/img/slide-03.png"
              class="image-fluid d-block d-md-block w-100"
              alt="slide-03"
            />
            <div class="carousel-caption d-none d-md-block text-dark w-50 mx-auto">
              <h3 class="h3CarouselImg">Veja nossas publicações!</h3>
              <p class="lead pCarouselImg">
                Maecenas non purus dictum, aliquam mi eget, pulvinar ex.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselSite"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselSite"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">próximo</span>
        </a>
      </div>

      <div class="container-fluid  mt-5">
        <div class="row">
          <div class="col-md">
            <div class="card ml-auto mr-auto cardHover">
              <a href="#">
                <img
                  class="card-img-top"
                  src="assets/img/centro-oeste.png"
                  alt="Card image"
                />
              </a>
              <div class="card-body">
                <h6 class="card-text text-uppercase">
                  Rede Centro-Oeste de Repositórios Digitais
                </h6>
                <a
                  href="#"
                  class="btn botao_centro_oeste stretched-link mt-3 mb-5"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card ml-auto mr-auto cardHover">
              <a href="#">
                <img
                  class="card-img-top"
                  src="assets/img/nordeste.png"
                  alt="Card image"
                />
              </a>
              <div class="card-body">
                <h6 class="card-text text-uppercase">
                  Nordeste de Repositórios Digitais
                </h6>
                <a href="#" class="btn botao_nordeste mt-3 mb-5">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card ml-auto mr-auto cardHover">
              <a href="#">
                <img
                  class="card-img-top"
                  src="assets/img/norte.png"
                  alt="Card image"
                />
              </a>
              <div class="card-body">
                <h6 class="card-text text-uppercase">
                  Rede Norte de Repositórios Digitais Rede
                </h6>
                <a href="#" class="btn botao_norte mt-3 mb-5">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card ml-auto mr-auto cardHover">
              <a href="#">
                <img
                  class="card-img-top"
                  src="assets/img/sudeste.png"
                  alt="Card image"
                />
              </a>
              <div class="card-body">
                <h6 class="card-text text-uppercase">
                  Rede Sudeste de Repositórios Digitais
                </h6>
                <a href="#" class="btn botao_sudeste mt-3 mb-5">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card ml-auto mr-auto cardHover">
              <a href="#">
                <img
                  class="card-img-top"
                  src="assets/img/sul.png"
                  alt="Card image"
                />
              </a>
              <div class="card-body">
                <h6 class="card-text text-uppercase">
                  Rede Sul de <br /> Repositórios Digitais
                </h6>
                <a href="#" class="btn botao_sul mt-3 mb-5">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid containerInfo">
          <div class="row mx-auto rowInfo">
            <div class="col my-5">
              <img
                src="assets/img/infografico_rede_repositorios.png"
                alt="Infográfico"
                class="pt-2 zoom estiloZoom"
              />
            </div>
            <div class="col my-5 pl-5 ml-5">
              <h1 class="py-5 mt-4 h1Info">Lorem Ipsum</h1>
              <p class="text-justify pInfo">
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                purus sit amet fermentum. Donec sed odio operae, eu vulputate
                felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                concilium totius Galliae in diem certam indicere. Cras mattis
                iudicium purus sit amet fermentum.
              </p>
            </div>
          </div>
        </div>
        <div class="container-fluid containerInfo2">
          <div class="row mx-auto rowInfo2">
            <div class="col my-5">
              <h1 class="py-5 mt-5 h1Info">Lorem Ipsum</h1>
              <p class="text-justify pInfo">
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                purus sit amet fermentum. Donec sed odio operae, eu vulputate
                felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                concilium totius Galliae in diem certam indicere. Cras mattis
                iudicium purus sit amet fermentum.
              </p>
            </div>
            <div class="col mt-5 mb-3 pb-5">
              <img
                src="assets/img/por-que-usar-o-formato-de-infografico-dados.jpg"
                alt="Infográfico"
                class="assets/img-fluid pt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
