import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "../../App";

 function PokeCard() {
   
    const [pokemons, setPokemon] = useState();
    const [pegarPokemon, setPegarPokemon] = useState();

  
    
    useEffect(() => {
        pegarPokemon();
      }, [setPokemon]);

   useEffect((prevProps) => {
      
      if (pokemons !== pokemons) {
        pegarPokemon(pokemons);
      }
    });
  
    
    pegarPokemon = pokeName => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => {
          console.log(res.data);
          setPokemon(res.data.name);
          setPegarPokemon(res.data.results);
          
        })
        .catch(error => {
          console.log(error.response.data);
        });
    };
  
   
      const pokemon = (pokemon)
  
      return (
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.weight} Kg</p>
          {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      );
    }
  
  
  export default PokeCard;