//import { useState, useMemo} from "react";
//import ReactDOM from "react-dom/client";
function MyHook1() {
    var [nome,setNome] = React.useState("Marcos");
    var [contador,setContador] = React.useState(0);
    var [pessoa,setPessoa] = React.useState(
        {
            nome: "Marcos R. Cardoso",
            cidade: "Blumenau",
            uf: "SC"
        }
    );
    var [vetCidades,addCidade] = React.useState(["Blumenau","Gaspar","Indaial"]);
    //var chamaCalcula = calcula(contador);
    var chamaCalcula = React.useMemo(
        () => calcula(contador)
    ,[contador]);

    function calcula(pNumero) {
        console.log('Calculando!');
        for (let i = 0; i <= 2000000000; i++) {
            pNumero += 1;
        }
        return pNumero;
    }

    return <>
        <NomeContext.Provider value={nome}>
            <h4>Meu nome &eacute; {nome}</h4>
            <MyUseContext nome={nome}/>
        </NomeContext.Provider>
        <button className="btn btn-primary" type="button" onClick={() => setNome("Cardoso")}>Altera nome</button>
        <h4>Voc&ecirc; clicou no bot&atilde;o {contador} vez(es).</h4>
        <button type="button" onClick={() => setContador((contador+1))}>Aumenta contador</button>
        <h4>A pessoa &eacute; {pessoa.nome}, mora em {pessoa.cidade} - {pessoa.uf}</h4>
        <button type="button" onClick={() => setPessoa({...pessoa, cidade: "São Paulo", uf: "SP"})}>Altera resid&ecirc;ncia</button>
        <ul>
            {vetCidades.map( (cidade,ind) => (<li key={ind}>{cidade}</li>) )}
        </ul>
        <button type="button" onClick={() => addCidade([...vetCidades,"Timbó"])}>Adiciona cidade</button>
        <p>{chamaCalcula}</p>
    </>
}