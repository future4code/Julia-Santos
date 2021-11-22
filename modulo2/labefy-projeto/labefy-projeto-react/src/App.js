import React from 'react';
import axios from 'axios';
import ListaPlayList from './components/ListaPlayList'

export default class App extends React.Component {
  state = {
      playlist:"",
      playlists:[],
      playlistTrack:[],
      artistaOuBanda:"",
      musicaEscolhida:"",
      linkDaMusica:""
  }
  componentDidMount() {
    this.getPlayList()
}

handleartistaOuBanda = (event) => {
    this.setState({artistaOuBanda: event.target.value})
  }
  
  handlemusicaEscolhida = (event) => {
    this.setState({musicaEscolhida: event.target.value})
  }
  
  handlelinkDaMusica = (event) => {
    this.setState({linkDaMusica: event.target.value})
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
          this.getPlayList()
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
        this.state.playlists.map(playlist =>(this.getPlayListTrack(playlist.id)))
    })
    .catch((err) => {
        alert("Ocorreu um problema, tente novamente!", err)
    })
  }

  getPlayListTrack =(id) =>{
      //console.log(id)
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
      axios.get(url, {
          headers: {
              Authorization: "julia-santos-carver"
          }
      })
      .then((res) => {
          //console.log(res)
      })
      .catch((err) => {
          //console.log(err)
      })
  }

  deletaPlaylist = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
        headers:{
            Authorization: "julia-santos-carver"
        }
    
    })
    .then((res) => {
        alert("Usuário(a) deletado(a) com sucesso!")
        this.getPlayList()
    })
    .catch((err) => {
        alert("Ocorreu um erro, tente novamente!")
        //console.log(err)
    })
  }

  createTrackPlaylist = (id) => {
      if (this.state.artistaOuBanda !== "" & this.state.musicaEscolhida !==  "" & this.state.linkDaMusica !== "") {
        console.log(id)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name:this.state.musicaEscolhida,
            artist:this.state.artistaOuBanda,
            url:this.state.linkDaMusica

        }
  
        axios.post(url, body, {
            headers: {
                Authorization: "julia-santos-carver"
            }
        })
        
        .then((res) => {
            alert("Playlist cadastrada com sucesso!")
            this.setState({playlist: ""}) 
            this.getPlayList()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
      }
  }

  render(){
    //console.log(this.state.playlists.map(item=>(console.log(item))))
      return(
          <div>
              <h1>Playlist</h1>
              <input 
                  placeholder={"nome da playlist"}
                  value={this.state.playlist}
                  onChange={this.handlePlaylist}
              />
              <button onClick={this.adcPlayList}>Adcionar playlist</button>
              {this.state.playlists.map(item => (<div>
                <ListaPlayList name={item.name} key={item.id} id={item.id} onDelete={() => this.deletaPlaylist(item.id)}></ListaPlayList>
            
                    <input
                    className="Todo-input"
                    placeholder="Digite o nome do artista ou banda."
                    onChange={this.handleartistaOuBanda}
                    />
                    <input
                    className="Todo-input"
                    placeholder="Digite uma nova musica."
                    onChange={this.handlemusicaEscolhida}
                    />
                    <input
                    className="Todo-input"
                    placeholder="Digite o link da musica."
                    onChange={this.handlelinkDaMusica}
                    />
                    <button onClick={() => this.createTrackPlaylist(item.id)}>
                    Adicionar
                    </button>
                
              </div>))}
          </div>
      )
  }
}