import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const useProtectedPage = () => {

   

    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            console.log("Não esta logado!")
            navigate("/LoginPage");
        }
        // console.log(promps.match.params.id)

    }, [])
}

export const TripDetails = () => {

    const [details, setDetails] = useState(undefined);

    useProtectedPage()

    const {id} = useParams()


    useEffect(() => {
        console.log(id)

        const token = localStorage.getItem("token")
        console.log(token)
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${id}`, {
                headers: {
                    auth: token
                }
            })
            .then((response) => {
                setDetails(response.data)

            })
            .catch((error) => {
                console.log("Deu erro", error.response)
            });

    }, [])
    console.log(details)
    
    const listDetails = details?.trip?.candidates.map((candidate, index) => {

        return <div class="viagens-flex-container">
        <div class="card-viagens-flex" key={index}>
            <br/>
            <h2 class="item"> Nome: {candidate.name}</h2>
            <br />
            <p class="item">Profissão: {candidate.profession}</p>
            <br />
            <p class="item">Idade: {candidate.age} anos</p>
            <br />
            <p class="item">País: {candidate.country}</p>
            <br />
            <p class="item">Data: {candidate.applicationText}</p>
            <br/>
        </div>
    </div>
        })
    


    return (
        <div>
            <header id="container-header">
                <div id="menu-home">

                    <div id="menu-horizontal">
                        <h1 class="texto-list-trip">TRIPS ON THE WORLD {useParams.id}</h1>
                    </div>
                </div>
            </header>
            <main>
                <button  class="botao-voltar"> Voltar</button> <button class="botao-inscricao">Criar Viagem</button>
                <br />
                <h1 class="titulo-flex">Viagens</h1>
                <br />
                <div class="viagens-flex-container">
                    <div class="card-viagens-flex">
                        <br/>
                        <h2 class="item"> Nome: {details?.trip?.name}</h2>
                        <br />
                        <p class="item">Descrição: {details?.trip?.description}</p>
                        <br />
                        <p class="item">Planeta: {details?.trip?.planet}</p>
                        <br />
                        <p class="item">Duração: {details?.trip?.durationInDays} dias</p>
                        <br />
                        <p class="item">Data: {details?.trip?.date}</p>
                        <br/>
                        {/* <Link to="" class="botao-login">LOGIN ADMIN</Link> */}
                    </div >
                </div>
                <h1>Candidatos Pendentes</h1>

                {listDetails}
            </main>
            <br />
            <footer id="container-footer-list">

                <p id="container-footer-list"> Bernado Augusto de Souza 324, Prédio Lindoia 157 | (00) 8436 - 67120 |  labex_trips@contato.com</p>
            </footer>


        </div>
    )
}

export default TripDetails;