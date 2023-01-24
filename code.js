let miArray = []

function agregarProducto() {
    let productoNuevo = document.querySelector("#inputCompra")
    miArray.push(productoNuevo.value)
    console.log(miArray)
    refrescarLista()
    productoNuevo.value = ''
}

function eliminarItem(posicionItem) {
    miArray.splice(posicion, 1)
    refrescarLista()
}

function refrescarLista() {
    document.querySelector("#lista").innerHTML = ""
    miArray.forEach((item, posicion) => {
        claseTachado = ""
        if(productosCheck.indexOf(`${item}`) == -1){
            claseTachado = ''
        } else {
            claseTachado = "text-decoration-line-through"
        }
        document.querySelector("#lista").innerHTML += `
            <li class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <span id="${claseTachado}">${posicion+1}. ${item}</span>
                    <div>
                        <button class="btn btn-success" onclick="checkItem(${posicion})">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="btn btn-danger" onclick="eliminarItem(${posicion})">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </li>
         `
    });
}

function checkItem(posicionItem) {
    document.querySelector(`item${posicionItem}`).classList.add('text-decoration-line-through')
    productosCheck.push(item)
    refrescarLista()
}