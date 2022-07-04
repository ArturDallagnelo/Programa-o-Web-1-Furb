function Destructure() {
    var vetCarro = ["Fusca","1966","branca"];
    var pessoa = {
        nome: "Marcos",
        cargo: "Professor",
        endereco: {
            rua: "7 de setembro",
            cidade: "Blumenau"
        }
    };
    //var modelo = vetCarro[0];
    //var ano = vetCarro[1];
    //var cor = vetCarro[2];
    var [modelo, ano, cor] = vetCarro;
    //var vNome = pessoa.nome;
    //var vCargo = pessoa.cargo;
    var {nome, endereco: {cidade}, cargo} = pessoa;

    return(<>
        <p>{modelo}, ano {ano}, cor {cor}!</p>
        <p>{nome} - {cargo}, mora em {cidade}</p>
    </>);
}