//Leemos el archivo
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
    return;
    }
    //Leemos el archivo de texto con FileReader y le asignamos el contenido a la variable "contenido"
    var lector = new FileReader();
    lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    };
    lector.readAsText(archivo);
}

//Mostramos el contenido del archivo en el contenedor con id 'contenido-archivo'
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
}

//Agregamos el evento cuando se cargue un nuevo archivo mediante el botón de cargar archivos
document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);