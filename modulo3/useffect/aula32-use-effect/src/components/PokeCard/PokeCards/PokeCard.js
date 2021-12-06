import React, { useState, useEffect} from "react";
import axios from "axios";

export default function PokeCard() {
  const [pokemon, setPokemon] = useState(1);


  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect((prevProps) => {
    console.log(prevProps)
    //console.log(this.props)
    // if (prevProps.pokemon !== pokemon) {
    //   pegaPokemon(pokemon);
    // }
    // const pokemon = pokemon;
  }, [pokemon]);

   
   

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


