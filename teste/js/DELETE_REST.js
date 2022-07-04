function Delete_REST() {
    fetch('https://jsonplaceholder.typicode.com/albums/6',
        {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'API-Key': 'asdf-asdf-234345'
            }
        }
    )
    .then(dadosBrutos => dadosBrutos.json())
    .then(dadosJSON => console.log(dadosJSON));

    return <p>DELETE REST feito!</p>;
}