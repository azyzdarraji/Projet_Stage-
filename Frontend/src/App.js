import React from "react";
import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ReservationAller from "./components/reservation/ReservationAller";
import ReservationAllerEtRetour from "./components/reservation/ReservationAllerEtRetour";
import {Routes,Route} from 'react-router-dom' ;
import Login from "./components/Login/Login";
import PasTrajectoire from "./components/PasTrajectoire/PasTrajectoire"
import Register from "./components/Register/Register";
import ReservationMultiDestination from "./components/reservation/ReservationMultiDestination"


function App() {
  return (
    <div> 
      <NavBar/>
     
      <Routes>
         <Route path="/" element={<ReservationAller/>} />
         <Route path="/alleretretour" element={<ReservationAllerEtRetour/>} />
         <Route path="/multidestination" element={<ReservationMultiDestination />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/alert" element={<PasTrajectoire/>} />
         <Route path="/register" element={< Register/>} />
      </Routes>

    </div>
  );
}

export default App;
