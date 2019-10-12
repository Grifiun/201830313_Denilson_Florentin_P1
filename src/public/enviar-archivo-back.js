//Creamos 2 constantes, 1 encargada de recibir el contenido del archivo de texto
//Y la otra encargada de realizar el evento en caso de ser presionado
const respuesta = document.querySelector('#contenido-archivo');
const boton = document.querySelector('#btnReconocer');

const urlp = "http://localhost:3000/analizador";

// Enviar el analizador con Axios
const getData = () => {
    console.log('funcional');
    axios.post('http://localhost:3000/postusers', {
            text: respuesta.value            
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('ERROR');
            console.log(error);
        });

};

//Agregamos el accion al boton cuando sea presionado
document.getElementById('btnReconocer')
    .addEventListener('click', getData);