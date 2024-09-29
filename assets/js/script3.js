key = document.querySelector("#key");
nuevo = document.querySelector("#contenedor");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        key.style.backgroundColor = "pink"
    } else if (event.key === 's') {
        key.style.backgroundColor = "orange"
    }
    else if (event.key === 'd') {
        key.style.backgroundColor = "skyblue"
    }
})



document.addEventListener("keydown", function (event) {
    // Comprobamos si la tecla presionada es "A" o "a"
    if (event.key === 'q') {
        agregarElemento();
    } else if (event.key === 'w') {
        agregarElemento2();
    }
    else if (event.key === 'e') {
        agregarElemento3();

    }
});

function agregarElemento() {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("contenedor");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    // Asignamos un texto al nuevo elemento
    nuevoElemento.style.backgroundColor = "purple";
    nuevoElemento.style.border = "2px solid black";
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
}

function agregarElemento2() {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("contenedor");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    // Asignamos un texto al nuevo elemento
    nuevoElemento.style.backgroundColor = "gray";
    nuevoElemento.style.border = "2px solid black";
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
}

function agregarElemento3() {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.getElementById("contenedor");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    // Asignamos un texto al nuevo elemento
    nuevoElemento.style.backgroundColor = "brown";
    nuevoElemento.style.border = "2px solid black";
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
}