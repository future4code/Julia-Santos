import React from "react";
import PagCadastro from "./components/PagCadastro";
import PagUsuario from "./components/PagUsuario";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  escolhaDeTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <PagCadastro paginaUsuario={this.paginaUsuario}/>
      case "lista":
        return <PagUsuario paginaCadastro={this.paginaCadastro}/>
      default:
        return <div> Página não encontrada!</div>    
    }
  }

  paginaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
  }

  paginaUsuario = () => {
    this.setState({telaAtual:"lista"})
  }


  render(){
    return(
      <div>
        {this.escolhaDeTela()}
      </div>
    )
  }
}
