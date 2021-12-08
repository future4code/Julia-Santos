import axios from "axios";
import {useState, useEffect} from "react";

export const AdminHomePage = () => {

    const [admin,setAdmin] = useState([]);

    const getAdmin = () => {
      axios 
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips")
      .then((res) => {
        setAdmin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };
  
    useEffect(() => {
      getAdmin();
    }, []);
  
    console.log(admin)
    console.log()

    return (
        <div>
            <p>Bem vindo a area de administrador</p>
            <button>X</button>
        </div>
    )
}