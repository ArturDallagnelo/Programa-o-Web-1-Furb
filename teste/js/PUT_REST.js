function Put_REST() {
    fetch('https://jsonplaceholder.typicode.com/todos/1',
        {
            method: 'PUT',
            body: JSON.stringify(
                {
                    userId: 5,
                    title: "Título novo",
                    completed: true
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
    )
    .then(dadosBrutos => dadosBrutos.json())
    .then(dadosJSON => console.log(dadosJSON));

    return <p>PUT REST feito!</p>;
}