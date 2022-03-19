import React from "react";
import { Button } from "react-bootstrap";

const ReservationMultiDestination = () => {
  return (
    <div className="multi-distination">
    
        <form className="row g-3 needs-validation multi-distination-form" noValidate>
         

        <div className="col-md-3 position-relative pr">
            <h5>Parcours1</h5>
               <div className="parcours">

                <div className="parcours-1">
                <div style={{"margin-right":"10px"}}>
                  <label htmlFor="validationTooltip04" className="form-label-1">
                    De
                  </label>
                </div>
                <div>
                  <select
                    className="form-select"
                    id="validationTooltip04"
                    required
                  >
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
                <div className="parcours-1">
                <div style={{"margin-right":"10px"}}>
                  <label htmlFor="validationTooltip04" className="form-label-1">
                    Vers
                  </label>
                </div>
                <div>
                  <select
                    className="form-select"
                    id="validationTooltip04"
                    required
                  >
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

               </div>
          </div>

          
        <div className="col-md-3 position-relative pr">
            <h5>Parcours2</h5>
               <div className="parcours">

                <div className="parcours-1">
                <div style={{"margin-right":"10px"}}>
                  <label htmlFor="validationTooltip04" className="form-label-1">
                    De
                  </label>
                </div>
                <div>
                  <select
                    className="form-select"
                    id="validationTooltip04"
                    required
                  >
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
                <div className="parcours-1">
                <div style={{"margin-right":"10px"}}>
                  <label htmlFor="validationTooltip04" className="form-label-1">
                    Vers
                  </label>
                </div>
                <div>
                  <select
                    className="form-select"
                    id="validationTooltip04"
                    required
                  >
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

               </div>
          </div>



          <div className="col-md-3 position-relative pr " style={{"width":"100px" ,"margin-left":"80px" ,"display":"flex"}}>

          <div style={{"margin-right":"10px"}}>
                  <label htmlFor="validationTooltip04">Date</label>
                </div>
                <div>
                  <input type="date" id="validationTooltip04" required />

                  <div className="invalid-tooltip">
                    Please select a valid state.
                  </div>
                </div>


            </div>

                <div className="col-md-3 position-relative pr" style={{"display":"flex"}}>
            <div className="col number-adultes-enfants">
              <p> Adulte</p>
              <input
                type="number"
                className="form-control input-number-adultes-enfants"
                placeholder="Number Adultes"
                aria-label="Number Adultes"
              />
            </div>
            <div className="col number-adultes-enfants">
              <p> Enfant</p>
              <input
                type="number"
                className="form-control input-number-adultes-enfants"
                placeholder="Number Enfants"
                aria-label="Number Enfants"
              />
            </div>
            
          </div>
          <Button className="btn btn-warning" style={{"width":"100px" ,"margin-left":"150px"}}>
              Chercher </Button>
        
        </form>
        
    </div>
  );
};

export default ReservationMultiDestination;
