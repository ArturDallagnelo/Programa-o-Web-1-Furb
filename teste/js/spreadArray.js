function SpreadOperator() {
    var vet1 = [1, true, 3];
    var vet2 = [{nome: "Marcos", idade: "49"}, 5, "Marcos"];
    var vet3 = [...vet1,...vet2];
    var [pos1,pos2, ...resto] = vet3;
    var [,, ...resto2] = vet3;
    var pessoa1 = {
        nome: "Marcos",
        idade: "49",
        cargo: "Analista de sistemas"
    };
    var pessoa2 = {
        cargo: "Professor",
        departamento: "DSC"
    }
    var pessoaCompleto = {...pessoa1, ...pessoa2};
    console.log(pessoaCompleto);

    console.log(vet1);
    console.log(vet2);
    console.log(vet3);
    console.log(resto);
    console.log(resto2);

return <>
        <p>{vet3.length}</p>
        <p>{pos1+" "+pos2+" "+resto.length}</p>
        <p>{pessoaCompleto.nome+" "+pessoaCompleto.idade+" "+pessoaCompleto.cargo+" "+pessoaCompleto.departamento}</p>
    </>;
}