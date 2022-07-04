function Post_REST() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    userId: 1,
                    title: "Título qualquer",
                    body: "Corpo qualquer"
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
    )
    .then(dadosBrutos => dadosBrutos.json())
    .then(dadosJSON => console.log(dadosJSON));

    return <p>POST REST feito!</p>;
}