fetch("https://pokeapi.co/api/v2/pokemon")
.then((response) => {
    return response.json();
}).then((pokemons) => {
    
    pokemons.results.forEach( (pokemon) => {
        console.log(pokemon.name);
    });
});