import axios from  "axios";
import {useState, useEffect } from "react";
import {Link} from "react-router-dom";



const HomePage = () => {
     useEffect(() => {
    }, []);

return(

    <div>
        <h1>Home</h1>
        <Link to="/LoginPage"><button >Login Adm</button></Link>
        <Link to="/ListTripPage"><button >Viagens</button></Link>
    </div>
       
    )
}

export default HomePage;