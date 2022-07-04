function MontaJSON() {
    var pessoas = [
        {id : 1, nome: "Marcos"},
        {id : 2, nome: "Rogério"},
        {id : 3, nome: "Cardoso"}
    ];

    return (
        <ul>
            {pessoas.map( (pessoa) => <li key={pessoa.id}>{pessoa.nome}</li> )}
        </ul>
    )
}