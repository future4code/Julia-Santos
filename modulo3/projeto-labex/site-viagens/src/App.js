import axios from  "axios";
import {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ListTripsPage from "./page/ListTripsPage.js";
import HomePage from "./page/HomePage.js";
import AdminHomePage from "./page/AdminHomePage";
import ApplicationFormPage from "./page/ApplicationFormPage";
import CreateTripPage from "./page/CreateTripPage";
import LoginPage from "./page/LoginPage";
import TripDetails from "./page/TripDetailsPage"
import SubTripDetails from "./page/SubTripDetailsPage";

const App = () => {
     useEffect(() => {
    }, []);

return(

    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/ListTripPage" element={<ListTripsPage />} />

            <Route path="/AdminHomePage" element={<AdminHomePage />} />

            <Route path="/ApplicationFormPage" element={<ApplicationFormPage />} />

            <Route path="/CreateTripPage" element={<CreateTripPage />} />

            <Route path="/LoginPage" element={<LoginPage />} />
            
            <Route path="/TripDetails/:id" element={<TripDetails/>} />

            <Route path="/SubTripDetails" element={<SubTripDetails/>} />







        </Routes>
  </Router>
    
       
    )
}

export default App;