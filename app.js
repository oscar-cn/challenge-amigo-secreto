const amigos = []; // Almacena los nombres

function agregarAmigo() {
    const inputNombres = document.getElementById("amigo");
    const nombres = inputNombres.value.trim();
    
    if (!nombres) {
        alert("Por favor agrega el nombre de un amigo");
        return;
    }
    
    amigos.push(nombres);
    console.log("Lista de amigos:", amigos); // Verificamos en la consola que aparezcan los nombres
    
    actualizarLista(); // Llamamos a la función para actualizar la lista en la interfaz
    
    inputNombres.value = ""; // Limpiamos el campo de entrada
    inputNombres.focus();// mantiene el cursos enfocado 
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiamos la lista antes de agregar nuevos elementos
    
    for (let nombres of amigos) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombres;
        nuevoElemento.classList.add("name-item"); // Agregamos clase para estilos
        listaAmigos.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento con id "resultado"
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li class="result-item">Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    limpiarListaAmigos();
}

function limpiarListaAmigos() {
    amigos.length = 0; // Vaciar el array de amigos
    actualizarLista(); // Actualizar la interfaz
}

function reiniciarJuego() {
    amigos.length = 0; // Vaciar el array de amigos
    actualizarLista(); // Limpiar la lista de amigos en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}
