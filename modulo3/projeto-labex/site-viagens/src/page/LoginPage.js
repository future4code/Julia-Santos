import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate();
 
        const goToTripsDetails = () => {
            navigate("/SubTripDetails");
        }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };  

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(email,password);
        const body = {
            email: email,
            password:password
        };

        console.log(body)

        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login`, body)
        .then((response) => {
            console.log("Conseguimos:", response.data.token);
            localStorage.setItem("token", response.data.token ) 
            goToTripsDetails()
        })
        .catch((error) => {
            console.log("Não conseguimos:", error.response);
        });

    }
        // useEffect(() => {
        // }, []);
    
        return (
            <div>
                <header id="container-header">
                    <div id="menu-home">
    
                        <div id="menu-horizontal">
                            <h1 class="texto-home-trip">TRIPS ON THE WORLD</h1>
                        </div>
                    </div>
                </header>
                <main>
                    
                    <div>
                        <form onSubmit={onSubmitLogin}>
                            <br/>
                            <div>
                                <input class="campo-email"
                                    placeholder="E-mail"
                                    type="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <br />
                            <div >
                                <input class="campo-password"
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </div>
                            <button class="enviar-login">Enviar</button>
                        </form>
                    </div>
                    <br/>
                   
                    
                   
                </main>
                <footer id="container-footer">
    
                    <p> Bernado Augusto de Souza 324, Prédio Lindoia 157 | (00) 8436 - 67120 |  labex_trips@contato.com</p>
                </footer>
    
            </div>
        )
}


export default LoginPage;