// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = "";
    
    // Actualizar la lista de amigos
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizar
    lista.innerHTML = "";
    
    // Recorrer el array y agregar cada amigo como un elemento <li>
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

function reiniciarJuego() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Limpiar la lista de amigos y el resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}