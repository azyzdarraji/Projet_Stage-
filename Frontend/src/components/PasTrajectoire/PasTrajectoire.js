import React from "react";
import {Alert,Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css" ;


const PasTrajectoire=()=>{
 return (
     <div> 
                  <Button>Retour</Button>

         <Alert variant="primary"> Pas De Trajectoire Disponible Pour Cette Date</Alert>
         <div className="btn btn-secondary"> Button</div>

     </div>
 )
}

export default PasTrajectoire