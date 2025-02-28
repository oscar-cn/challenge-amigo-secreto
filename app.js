const amigos = []; // Almacena los nombres
let amigosDisponibles = []; // Lista de amigos aún no sorteados

function agregarAmigo() {
    const inputNombres = document.getElementById("amigo");
    const nombres = inputNombres.value.trim();
    
    if (!nombres) {
        alert("Por favor agrega el nombre de un amigo");
        return;
    }
    
    if (amigos.includes(nombres)) { // Verifica si el amigo ya está en la lista 
        alert("Este amigo ya ha sido agregado.");
        return;
    }

    amigos.push(nombres);
    amigosDisponibles.push(nombres); // También lo agregamos a la lista de disponibles
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
    if (amigosDisponibles.length === 0) { 
        alert("Has sorteado a todos tus amigos."); 
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
    
    // Obtener el nombre sorteado y eliminarlo de la lista disponible
    const amigoSorteado = amigosDisponibles.splice(indiceAleatorio, 1)[0]; 

    // Mostrar el resultado en el elemento con id "resultado"
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar el resultado anterior

    const nuevoResultado = document.createElement("p"); // Se cambia <li> por <p> para evitar lista
    nuevoResultado.classList.add("result-item");
    nuevoResultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    
    resultadoLista.appendChild(nuevoResultado); 

    // Verificar si ya no quedan amigos disponibles para sortear
    if (amigosDisponibles.length === -1) { 
        alert("Has sorteado a todos tus amigos."); 
    }
}

function reiniciarJuego() {
    amigos.length = 0; // Vaciar el array de amigos
    actualizarLista(); // Limpiar la lista de amigos en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}
