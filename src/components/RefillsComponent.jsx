import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Refills extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <h2 className="display-5 text-center text-uppercase mb-3">
          Utiliza tus puntos para Realizar recargas
        </h2>
        <h3 className="text-center">
          Mis puntos son: <strong>1000 </strong>
          <a href="/">
            <FontAwesomeIcon icon="sync" color="green" />
          </a>
        </h3>
        <form className="mt-5">
            <legend>Datos de la recarga</legend>
          <div className="form-group">
            <label for="inputState">Selecciona el Operador</label>
            <select id="inputState" class="form-control" required>
              <option selected>Operador...</option>
              <option>Avantel</option>
              <option>Movistar</option>
              <option>Claro</option>
              <option>Uff Movil</option>
              <option>Tigo</option>
              <option>Flash Mobile</option>
              <option>ETB</option>
              <option>Virgin Mobile</option>
              <option>Mobil Éxito</option>
            </select>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Tu numero de celular</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Celular"
              required
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Valor de tu recarga</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="¿Cuánto?"
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Realizar recarga
          </button>
        </form>
      </div>
    );
  }
}

export default Refills;
