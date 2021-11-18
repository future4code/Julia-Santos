import React from "react";
import axios from "axios";

export default class PagCadastro extends React.Component {
    state = {
        name: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }
    
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            nome: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "julia-santos-carver"
            }
        })
        
        .then((res) => {
            alert("Usuário(a) cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.props.paginaUsuario}>
                    Ir para página usuários
                </button>
                <h2>Cadastro</h2>
                <input 
                    placeholder={"Nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input 
                    placeholder={"E-mail"}
                    value={this.state.email}
                    onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}