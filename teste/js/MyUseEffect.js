function MyUseEffect() {
    var [contador, setContador] = React.useState(0);
    var [valorCampo,setValorCampo] = React.useState("");

    React.useEffect(
        () => {
            setTimeout(() => setContador(contador+1),1000);
        }
    ,[valorCampo]);

    return <>
        <div>
        <h4>Este componente foi renderizado {contador} vez(es).</h4>
        <input type="text" onChange={(evento) => setValorCampo(evento.target.value)}></input>
        </div>
    </>
}