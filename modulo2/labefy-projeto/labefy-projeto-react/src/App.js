import React from 'react';
import axios from 'axios';
import ListaPlayList from './components/ListaPlayList'

export default class App extends React.Component {
  state = {
      playlist:"",
      playlists:[]

  }
  componentDidMount() {
    this.getPlayList()
}

  handlePlaylist = (event) => {
    this.setState({playlist: event.target.value})
}

  adcPlayList = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {
          name: this.state.playlist
      }

      axios.post(url, body, {
          headers: {
              Authorization: "julia-santos-carver"
          }
      })
      
      .then((res) => {
          alert("Playlist cadastrada com sucesso!")
          this.setState({playlist: ""})
      })
      .catch((err) => {
          alert(err.response.data.message)
      })
  }
  
  getPlayList =() =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
        headers: {
            Authorization: "julia-santos-carver"
        }
    })
    .then((res) => {
        this.setState({playlists:res.data.result.list})
    })
    .catch((err) => {
        alert("Ocorreu um problema, tente novamente!")
    })
  }

  deletaPlaylist = (id) =>{
      console.log(id)
  }

  render(){
    console.log(this.state.playlists.map(item=>(console.log(item))))
      return(
          <div>
              <h2>Playlist</h2>
              <input 
                  placeholder={"nome da playlist"}
                  value={this.state.playlist}
                  onChange={this.handlePlaylist}
              />
              <button onClick={this.adcPlayList}>Adcionar playlist</button>
              {this.state.playlists.map(item => (<ListaPlayList name={item.name} key={item.id} onDelete={() => this.deletaPlaylist(item.id)}></ListaPlayList>))}
              {/* <p >{item.name}</p> */}
          </div>
      )
  }
}