let pokeApi = "https://pokeapi.co/api/v2/pokemon/"

let solicitud = fetch(pokeApi)

solicitud.then(res => res.json())
    .then(pokemones => {
        infoPoke.forEach(pokemones => {
            document.querySelector
            
        });
    })