
test('GET /listaPokemons', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/listaPokemons'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});


test('GET /listaPokemonsFiltraNomeDesc', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/listaPokemons?filterName=nome&Order=Desc'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('GET /listaPokemonsFiltraNomeAsc', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/listaPokemons?filterName=nome&Order=Asc'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('GET /listaPokemonsFiltraTipo', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/listaPokemons?searchField=tipo&searchValue=agua'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

test('GET /listaPokemonsFiltrarNome', async () => {
    const axios = require('axios');
    const response = await axios({method:'GET',url:'http://localhost:3003/listaPokemons?searchField=nome&searchValue=charmander'});
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
});

