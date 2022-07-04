function Ternario(props) {
    var retorno = "";
    /*if ((props.numero % 2) == 0) {
        retorno = props.numero+" é par!";
    } else {
        retorno = props.numero+" é ímpar!";
    }*/

    retorno = ((props.numero % 2) == 0) ? props.numero+" é par!" : props.numero+" é ímpar!";

    return <h4>{retorno}</h4>;
}