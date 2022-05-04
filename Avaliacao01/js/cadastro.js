function enviar(){
    var select = document.getElementById('select');
    var value = select.options[select.selectedIndex].value;
    var cadastro = document.getElementById('cadastro');
    var campos = document.getElementsByClassName('campos');
    var botao = document.getElementById('botao');

    if (value == 'custom'){
        cadastro.style.backgroundColor = '#38afda';
        cadastro.style.fontFamily = 'Arial';
        campos.style.backgroundColor = '#21d715';
        botao.style.borderRadius = '25px';
        botao.style.backgroundColor = 'red';
    }

}

function redirecionar(){
    window.location.href='index.html'
}