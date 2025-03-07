//codigo escrito con ayuda del modelos de IA phi4 corriendo localmente en ollama.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');

        // Agregar texto del amigo con su número
        li.textContent = `${index + 1}. ${amigo}`;

        // Crear un botón para eliminar el amigo
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.classList.add('btn-eliminar'); // Añade una clase específica al boton para poder editarlo mediante css
        botonEliminar.onclick = () => eliminarAmigo(index);

        // Añadir el botón al elemento de lista
        li.appendChild(botonEliminar);

        lista.appendChild(li);
    });
}

function eliminarAmigo(indice) {
    amigos.splice(indice, 1); // Eliminar el amigo en la posición dada
    actualizarLista(); // Actualizar la lista después de la eliminación
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Ingresar al menos a 2 amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(indiceAleatorio, 1)[0];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    // Actualizar la lista de amigos para reflejar el cambio
    actualizarLista();
}

//creamos una funcion que nos permita reiniciar la aplicacion
function reiniciarAplicacion(){
    amigos = [];
    actualizarLista();
    
    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = '';
    }
}
//reinicio al hacer click en el boton
document.getElementById('reinicio').onclick = reiniciarAplicacion;