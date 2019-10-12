//Creamos 2 constantes, 1 encargada de recibir el contenido del archivo de texto
//Y la otra encargada de realizar el evento en caso de ser presionado
var contenido2 = document.getElementById('contenido-archivo2');

//contenido2.innerHTML = contenido.innerHTML;  

// Enviar el analizador con Axios
const getData = () => {
    console.log('get'):
    axios.get('http://172.16.6.136:3000/users').then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};


//Agregamos el accion al boton cuando sea presionado
document.getElementById('btnReconocer2')
    .addEventListener('click', getData);