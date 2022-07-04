function ExEvento() {
    var [valorCampo,setValorCampo] = React.useState("");

    function mostra(pMsg) {
      alert(pMsg);
    }

    return <>
      <input type="text" onChange={(evento) => setValorCampo(evento.target.value)}></input>
      <h4>O valor do campo &eacute; [{valorCampo}]</h4>
      <button type="button" onClick={(evento) => mostra("Mensagem "+evento.type)}>Clique aqui!</button>
    </>
}