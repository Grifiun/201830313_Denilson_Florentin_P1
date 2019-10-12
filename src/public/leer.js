var contenido = document.getElementById('contenido-archivo');
var contenido2 = document.getElementById('contenido-archivo2');
var cantidadLineas;
function verificar() {
  contenido2.innerHTML = contenido.innerHTML; 
  var strTemp =  contenido;
  console.log(strTemp);     
}

stringCut = function (str) {
    var nstr = str.split(/\n/);
    return nstr.slice(0,10);
}