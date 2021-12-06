import { useState, useEffect} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCards/PokeCard";

export default function App() {
  const [ pokeList, setPokeList] = useState([ ]);
  const [pokeName, setPokeName] = useState(""); 

  const getPokeList = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const changePokeName = (event) => {
   console.log(event.target.value);
    setPokeName(event?.target?.value);
    console.log(pokeName)
  };

  useEffect(() => {
    getPokeList();
  }, [pokeName]);

   {
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
}
