import React from "react";
import "./styles/LoginStyle.css";
import { Link } from 'react-router-dom';
import Lola from "./images/lola.jpg";
import Bello from "./images/AndresBello.jpg";
import Normal from "./images/NormalSuperior.jpeg";
import './styles/PartnersStyle.css';

const Login = () => {
  return (
    <React.Fragment>
    <header>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img
              src="https://www.lola.edu.co/sites/default/files/styles/galleryformatter_slide/public/field/image/galleries/unnamed_0.jpg?itok=cxBUpr0T"
              className="w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block" />
          </div>
          <div class="carousel-item">
            <img
              src="https://reciclamosparaayudar.org/wp-content/uploads/2019/02/dise%C2%A6o-reci8clar.jpg"
              className="w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block" />
          </div>
          <div class="carousel-item">
            <img
              src="http://www.reciclaccion.cl/wp-content/uploads/2013/08/images_celulares-1024x710.jpg"
              className="w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="row text-center mt-5">
        <div className="col-lg-6 col-md-12 my-3">
          <Link to="/recargas" ><button className="btn btn-lg btn-success text-center text-white mx-auto ">
            Mis recargas
          </button></Link>
        </div>
        <div className="col-lg-6 col-md-12 my-3">
          <Link to="/mispuntos"><button className="btn btn-lg btn-success">Mis puntos</button></Link>
        </div>
      </div>
    </header>
            {/* <p className=" container d-flex  justify-content-center justify-content-between my-5 ">
            <a
              className="btn btn-success btn-lg"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              ¿ Como hacer parte ?
            </a>
            <button
              className="btn btn-success btn-lg"
              type="button"
              data-toggle="collapse"
              data-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              ¿ Porque nosotros ?
            </button>
          </p>
          <div className="row mb-5">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                  Es muy fácil, envianos un e-mail con sus datos de contacto a nuestro correo info@ecorecarga.com y en breve nos pondremos en contacto con usted. Juntos Cambiaremos el Mundo.
                </div>
              </div>
            </div> */}
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body">
                  Somos una organización que busca incentivar a los niños y jovenes desde los colegios a reciclar y a cuidar el planeta, la entidad educativa no tiene que aportar nada economico a nuestro proyecto, nosotros tenemos todos los recursos.
                </div>
              </div>
            </div>
  
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={Lola} alt="" />
              <div className="card-body">
                <h5 className="card-title">I.E Lola Gonzalez</h5>
                <p className="card-text">
                  Ubicado cerca a la estación del metro San Javier en el barrio
                  Santa Lucia de Medellín, es conocido por que en un momento dado
                  fue de solo mujeres, en el 2009 paso a ser mixto.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Hace 1 mes</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Bello} alt="" />
              <div className="card-body">
                <h5 className="card-title">I.E Andrés Bello</h5>
                <p className="card-text">
                  Ubicado en el parque de Bello, cuenta con mas de 2 mil
                  estudiantes en el 2019 en todas las jornadas, popular por su
                  rendimiento academico
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Hace 1 mes</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Normal} alt="" />
              <div className="card-body">
                <h5 className="card-title">I.E Normal Superior del Nordeste</h5>
                <p className="card-text">
                  Esta en muchos de los municipios de Antioquia, como Yolombó
                  Antioquia, San roque, entre otros, muy popular por su excelencia
                  academica y su enfoque hacia la docencia con su programa de
                  grados 12-13 para normalistas
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Hace 1 mes</small>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
};
export default Login;
