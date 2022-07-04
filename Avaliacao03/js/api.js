var url = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/"


function fazerRequisicaoGet() {
    var id = document.getElementById('id').value;
    var resposta = document.getElementById("resposta");

    fetch(url + id)
        .then(res => {
            if (res.ok) { resposta.style.backgroundColor = "green"; }
            else { resposta.style.backgroundColor = "red"; }
            return res
        })
        // .then(res => res.json())
        // .then(data => console.log(data))
        .then(res => res.text())
        .then(data => document.getElementById("resposta2").innerHTML = data)
        .catch(error => console.log(error))

}

function fazerRequisicaoDelete(){
    var url = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";
    var id = document.getElementById('id').value;
    var resposta = document.getElementById("resposta3");

    fetch(url + id, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) { resposta.style.backgroundColor = "green"; }
            else { resposta.style.backgroundColor = "red"; }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

function fazerRequisicaoPost() {
    var nome = document.getElementById('nome2').value;
    var email = document.getElementById('email2').value;
    var resposta = document.getElementById("resposta4");

    fetch("https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/", {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {name: nome + email}
        )
    }).then(res => {
        if (res.ok) { resposta.style.backgroundColor = "green"; }
        else { resposta.style.backgroundColor = "red"; }
        return res
    }).then(res => res.json())
      .then(data => console.log(data))
}