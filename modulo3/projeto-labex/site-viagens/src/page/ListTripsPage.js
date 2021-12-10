import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import '../ListTripsPage.css';
import { useNavigate } from 'react-router-dom';


export default function ListTripsPage() {
    const [trips, setTrips] = useState(undefined);


    const getTrips = () => {
        let aluno = "darvas"


        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
            .then((res) => {
                setTrips(res.data);
                // console.log(res)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getTrips();
    }, [])
    

        const navigate = useNavigate();
 
        const goToHomePage = () => {
            navigate("/")
        }
    
    const listTrips = trips && trips.trips.map((trip, index) => {
        console.log("Log do Trip", trip)
        console.log("log do index", index)
        return <div class="viagens-flex-container">
                    <div class="card-viagens-flex" key={index}>
                        <br/>
                        <h2 class="item"> Nome: {trip.name}</h2>
                        <br />
                        <p class="item">Descrição: {trip.description}</p>
                        <br />
                        <p class="item">Planeta: {trip.planet}</p>
                        <br />
                        <p class="item">Duração: {trip.durationInDays} dias</p>
                        <br />
                        <p class="item">Data: {trip.date}</p>
                        <br/>
                    </div>
                </div>
    })

    return (
        <div>
            <header id="container-header">
                <div id="menu-home">

                    <div id="menu-horizontal">
                        <ul>
                            <li>HOME |</li> 
                            <li>VIAGENS |</li>
                            <li>LOGIN |</li>

                        </ul>
                    </div>
                </div>
            </header>
            <main>
            <button onClick={goToHomePage} class="botao-voltar"> Voltar</button> <button class="botao-inscricao">Inscreva - se</button>
                <br/>
                <h1 class="titulo-flex">Viagens Disponiveis</h1>
                <br/>
                {listTrips}
            </main>
            <footer id="container-footer">

                <p> Bernado Augusto de Souza ©324, Prédio Lindoia 157 | (00) 8436 - 67120 |  labex_trips@contato.com</p>
            </footer>


        </div>
    );
}
