const amigos=[]; // almacena los  nombres

function agregarAmigo(){ // Esta es la funcion para agregar amigos 
    const inputNombres = document.getElementById("amigo");
    const nombres=inputNombres.value.trim ();
    if (nombres=== ""){
        alert ("Por favor agrega el nombre de un amigo");
        return;
    }

    amigos.push(nombres);
    console.log("Lista de amigos:", amigos);  //verificamos en la consola que aparezcan los nombres 

    //crea un nuevo elemento a la lista 
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    inputNombres.value = ""; // limpia el campo de entrada 
}