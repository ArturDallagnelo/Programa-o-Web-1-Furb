function trim(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '' );
}

var n1 = document.getElementById('numero1');
var n2 = document.getElementById('numero2');

n1.onkeyup = function(){
    n2.innerHTML = trim(n1.value);
}

function calcular() {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = n1.value.length;
}