let urlAPI = "https://api.api-onepiece.com/fruits"

let solicitud = fetch(urlAPI)

solicitud.then(res => res.json())
    .then(infoFrutas => {
        infoFrutas.forEach(fruta => {
            document.querySelector('#frutasinfo').innerHTML += `
            <p>${fruta.roman_name}</p> <br>`
        console.log(infoFrutas)
        });
    })