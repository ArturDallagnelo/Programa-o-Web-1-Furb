
function somar(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var n3 = parseInt(n1) + parseInt(n2);
    // alert(n3);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = n3;
    // return n3;
}

function validar(){
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var resultado = document.getElementById("resultado2");
    if (n1 > n2){
        resultado.innerHTML = "Primeiro número é maior";
        resultado.style.cssText = "background-color: red";
    }else if(n1 < n2){
        resultado.innerHTML = "Segundo número é maior";
        resultado.style.cssText = "background-color: green";
    }else if(n1 = n2){
        resultado.innerHTML = "Ambos são iguais";
        resultado.style.cssText = "background-color: yellow";
    }
}