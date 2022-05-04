function cookies(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login.length < 1 || senha.length < 1){
        alert("Preencha os campos")
    }else{
        setCookie('username', login);
        document.getElementById('identificar').innerHTML="usuário: "+getCookie('username');
        window.location.href='index.html'
    }
}

function setCookie(name, value) {
    var cookie = name + "=" + value;
    document.cookie = cookie;
}

function getCookie(pCookie) {
    var vetCookies = document.cookie.split(';');
    for (var i = 0; i < vetCookies.length; i++) {
        linhaCookie = vetCookies[i].trim();
        if (linhaCookie.indexOf(pCookie) == 0) {
            return linhaCookie.substring((pCookie.length+1),linhaCookie.length);
        }
    }
}

function redirecionar(){
    window.location.href='cadastro.html'
}