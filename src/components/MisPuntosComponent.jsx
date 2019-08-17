import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MisPuntos extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center text-uppercase mb-5">Mira el estado de tus puntos</h1>
        <h3 className="text-center">
          Mis puntos son: <strong>1000 </strong><a href="/"><FontAwesomeIcon icon="sync" color="green" /></a>
        </h3>
        <table className="table table-bordered table-hover mt-5 text-center">
          <thead className="table-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Puntos</th>
              <th scope="col">Pesos Colombianos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>200</td>
              <td>$1.000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>400</td>
              <td>$2.000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>600</td>
              <td>$3.000</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>800</td>
              <td>$4.000</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>1000</td>
              <td>$10.000</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>1200</td>
              <td>$12.000</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-success btn-lg btn-block active mt-5">
        <h4>REALIZA TU RECARGA AQUÍ</h4>
        </button>
      </div>
    );
  }
}

export default MisPuntos;
