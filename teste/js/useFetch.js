//export default function useFetch(pURL) {
function useFetch(pURL) {
    const [dados,setDados] = React.useState(null);

    React.useEffect(
        () => {
            fetch(pURL)
            .then(dadosBrutos=> dadosBrutos.json())
            .then(dadosJSON => setDados(dadosJSON))
        }
    ,[pURL]);

    return [dados];
}