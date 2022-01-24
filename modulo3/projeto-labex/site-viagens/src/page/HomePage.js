import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../HomePage.css';


const HomePage = () => {
    useEffect(() => {
    }, []);

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
                <br/>
                <Link to="/LoginPage" class="botao-login">LOGIN ADMIN</Link> <Link to="/ListTripPage" class="botao-viagens">VIAGENS</Link>

            </main>
            <footer id="container-footer">

                <p> Bernado Augusto de Souza 324, Prédio Lindoia 157 | (00) 8436 - 67120 |  labex_trips@contato.com</p>
            </footer>

        </div>

    )
}

export default HomePage;