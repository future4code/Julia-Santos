import './App.css';
import React from "react";
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';


export default class App extends React.Component {

  state = {
    step: 0
  }
  proximaPagina = () => {
   console.log(this.state.step +1)
    if (this.state.step >= 3) {
      this.setState({
        step: 3
      })
    } else {
      this.setState({
        step: this.state.step +1
      })
    }
  
  };
  render() {
    let pagina 
    switch (this.state.step) {
      case 0:
        pagina = <Etapa1 />;
        break;
      case 1:
        pagina = <Etapa2 />;
        break;
      case 2:
        pagina = <Etapa3 />;
        break;
      case 3:
        pagina = <Final />;
        break;
      default:
        pagina = <Etapa1/>;
    }
    return (
    <div>
      { pagina}
      <button onClick={this.proximaPagina} hidden={this.state.step > 2}> Próxima etapa</button>
    </div>)
  }
}

