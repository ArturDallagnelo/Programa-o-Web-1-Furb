function MontaArray() {
    var vetCarros = ["Fusca","Onix","Polo","Corvette"];
    return(
        <ul>
            {vetCarros.map(
                (pCarro, pPos) => <li key={pPos}>{pCarro}</li>
            )}
        </ul>
    );
}