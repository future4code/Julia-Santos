import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id:Date.now(),
        texto:'Lavei a louça',
        completa:false
      },
      {
        id:Date.now(),
        texto:'Dobrei roupa',
        completa:true
      }],

      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    console.log(event.target.value)
    this.setState({tarefa: event.target.value})
  }

  criaTarefa = () => {

  }

  selectTarefa = (id) => {
    console.log(id)
    const tarefaCompleta = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id){
        const tarefaNova = {
          ...tarefa,
          completa:tarefa.completa
        }
        return tarefaNova
      } else{
        return tarefa
      }
    })
  this.setState({tarefas: tarefaCompleta})  
  }

  onChangeFilter = (event) => {
    this.setState({tarefas: {
      id: Date.now(),
      texto:event.target.value,
      completa:false,
    }})

  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.tarefas.texto} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
