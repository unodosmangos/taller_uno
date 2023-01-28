function sumatoria_punto_1 (){
    let numeroUsuario = document.querySelector ("#numeroSuma")
    let resultado = 0
    for (let x = 0; x <= numeroUsuario.value; x++) {
        resultado = resultado + x
    }
    document.querySelector("#resultadoSuma").innerHTML
}