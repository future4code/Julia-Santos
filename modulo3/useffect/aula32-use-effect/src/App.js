import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard/PokeCard";


export default function App() {
  const [pokeList, setPokeList] = useState([1]);
  const [pokeName, setPokeName] = useState([]);

  // const pegarIdPokemon = (event) => {
  //   setPokeList(event.target.value);
  // };
  
  const pegarPersonagem = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeList}/`)
      .then((res) => {
        console.log(res.data);
        setPokeName(res.data.name);
        setPokeList(res.data.results);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  const changePokeName = event => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    pegarPersonagem();
  }, [setpokeList]);

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }
