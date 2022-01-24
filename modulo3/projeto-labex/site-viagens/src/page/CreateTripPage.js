
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export const CreateTripPage = () => {

    const [name, setName] = useState('')
    const [planet, setPlanet] = useState(undefined)
    const [calendar, setCalendar] = useState('')
    const [description, setDescription] = useState('')
    const [days, setDays] = useState('')


    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangePlanet = (event) => {
        setPlanet(event.target.value);
    };

    const onChangeCalendar = (event) => {
        setCalendar(event.target.value);
    };

    const onChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const onChangeDays = (event) => {
        setDays(event.target.value);
    };

    const reset = () => {
        setName('')
        setPlanet(undefined)
        setCalendar('')
        setDescription('')
        setDays('')
    }


    const postCreateTrips = (event) => {
        event.preventDefault()

        const body = {
            name: name,
            planet: planet,
            date: calendar,
            description: description,
            durationInDays: Number(days)
        }

        let aluno = "darvas"

        const token = localStorage.getItem("token")
        console.log(body)
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`, body,{
                headers: {
                    auth: token,
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => {
                reset()
                alert("Viagem cadastrada")
            })
            .catch((error) => {
                alert(error);
            });


    }




    useEffect(() => {

    }, [])

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/")
    }




    return (
        <div>
            <header id="container-header">
                <div id="menu-home">

                    <div id="menu-horizontal">
                        <h1 className="texto-list-trip">TRIPS ON THE WORLD</h1>
                    </div>
                </div>
            </header>
            <main>

                <div>
                    <br/>
                    <form onSubmit={postCreateTrips}>
                        <div >
                            <input className="campo-nome"
                                placeholder="Nome"
                                type="Name"
                                value={name}
                                onChange={onChangeName}
                            />
                        </div>
                        <br />
                        <div >
                            <label >
                                <select value={planet} onChange={onChangePlanet} className="campo-planet">
                                    <option value="Mercúrio">Mercúrio</option>
                                    <option value="Vênus">Vênus</option>
                                    <option value="Terra">Terra</option>
                                    <option value="Marte">Marte</option>
                                    <option value="Jupiter">Jupiter</option>
                                    <option value="Saturno">Saturno</option>
                                    <option value="Urano">Urano</option>
                                    <option value="Netuno">Netuno</option>
                                    <option value="Plutão">Plutão</option>
                                </select>
                            </label>
                        </div>
                        <br />
                        <div >
                            <input className="campo-calendario"
                                placeholder="Data"
                                type="Date"
                                value={calendar}
                                onChange={onChangeCalendar}
                            />
                        </div>
                        <br />
                        <div>
                            <input className="campo-descricao"
                                placeholder="Descrição"
                                type="descriprion"
                                value={description}
                                onChange={onChangeDescription}
                            />
                        </div>
                        <br />
                        <div >
                            <input className="campo-dias"
                                placeholder="Duração em dias"
                                type="number"
                                value={days}
                                onChange={onChangeDays}

                            />
                        </div>
                        <br />
                        <input onClick={goToHomePage} className= "botao-voltar-criar" type="button" value="voltar" />
                        <input className= "botao-viagens-criar" type="submit" value="Criar" />
                    </form>
                </div>
                <br />



            </main>
            <br />
            <footer id="container-footer-list">

                <p id="container-footer-list"> Bernado Augusto de Souza 324, Prédio Lindoia 157 | (00) 8436 - 67120 |  labex_trips@contato.com</p>
            </footer>


        </div>
    );
}


export default CreateTripPage;