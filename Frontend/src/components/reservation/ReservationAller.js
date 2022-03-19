import React from "react";
import "./Reservation.css";
import {Image} from "react-bootstrap"

const ReservationAller = () => {
  return (
    <div className="reservation">
      <form className="row g-3 needs-validation formulaire " noValidate>
        <div className="col-md-4 position-relative choix-type-destination">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Aller
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Aller et Retour
            </label>
          </div>

          
        </div>

        <div className="col-md-3 position-relative choix-destination">
        <div className="depart">
        <div>
              <label htmlFor="validationTooltip04" className="form-label">
                De
              </label>
            </div>
            <div>
              <select className="form-select" id="validationTooltip04" required>
                <option selected disabled value>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-tooltip">
                Please select a valid state.
              </div>
            </div>
          </div>

          <div className="arrivee">
            <div>
              <label htmlFor="validationTooltip04" className="form-label">
                Vers
              </label>
            </div>
            <div>
              <select className="form-select" id="validationTooltip04" required>
                <option selected disabled value>
                  Choose...
                </option>
                <option>...</option>
              </select>
              <div className="invalid-tooltip">
                Please select a valid state.
              </div>
            </div>
          </div>
           <div className="arrivee">
            <div>
              <label htmlFor="validationTooltip04" className="form-label">
                Date
              </label>
            </div>
            <div>
              <input  type="date"  id="validationTooltip04" required />
                
               
              <div className="invalid-tooltip">
                Please select a valid state.
              </div>
            </div>
          </div>
        </div>

           <div className="row g-3 number-reservation">
         
        
        <div className="col number-adultes-enfants">
           <p> Adulte</p>
          <input type="number" className="form-control input-number-adultes-enfants" placeholder="Number Adultes" aria-label="Number Adultes" />
        </div>
        <div className="col number-adultes-enfants">
            <p> Enfant</p>
          <input type="number" className="form-control input-number-adultes-enfants" placeholder="Number Enfants" aria-label="Number Enfants" />
        </div>
      </div>
        <div className="col-12 btn-recherche">
          <button className="btn btn-warning" type="submit">
              Chercher
          </button>
        </div>
      </form>

      <div className="espace-publicitaire-reservation">
        <Image src="https://www.poste.tn/image/png/ban_myposte.png" thumbnail style={{border:"none"}} /> 

      </div>
    </div>
  );
};
export default ReservationAller;
