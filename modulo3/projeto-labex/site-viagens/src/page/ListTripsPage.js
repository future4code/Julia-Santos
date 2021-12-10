import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import '../ListTripsPage.css';


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

    //console.log()
    // let lista = trips.trips
    // lista?.map((item)=>{
    //     console.log(item)
    // })
    const listTrips = trips && trips.trips.map((trip, index) => {
        console.log("Log do Trip", trip)
        console.log("log do index", index)
        return <div class="viagens-flex-container">
                    <div class="card-viagens-flex" key={index}>
                        <h2 class="item"> Nome: {trip.name}</h2>
                        <br />
                        <p class="item">Descrição: {trip.description}</p>
                        <br />
                        <p class="item">Planeta: {trip.planet}</p>
                        <br />
                        <p class="item">Duração: {trip.durationInDays} dias</p>
                        <br />
                        <p class="item">Data: {trip.date}</p>
                    </div>
                </div>
    })

    return (
        <div>
            <header id="container-header">
                <div id="menu-home">

                    <div id="menu-horizontal">

                        <ul>
                            <li>Home</li> |
                            <li>Carrinho</li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <h1>Viagens Disponiveis</h1>
                {listTrips}
            </main>
            <footer id="container-footer">

                <p> Bernado Augusto de Souza 324, Prédio Lindoia 157 | (00) 8436 - 67120 |  spaceclothing@contato.com</p>
                <div class="redes-sociais">
                    <a target="_blank" href="https://www.instagram.com/">
                        <img class="imagem" src="" alt="" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/">
                        <img class="imagem" src="" />
                    </a>
                </div>
            </footer>


        </div>
    );
}
