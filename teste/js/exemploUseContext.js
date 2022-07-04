function MyUseContext() {
    var nomeInterno = React.useContext(NomeContext);
    return <p>Aqui o nome &eacute; {nomeInterno}</p>;
}