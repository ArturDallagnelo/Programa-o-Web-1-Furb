function ReadJSON() {
    var [listaUsers,setListaUsers] = React.useState([]);

    React.useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setListaUsers(json));
            //.catch(setListaUsers([{ id: 0, name: "Houve erro na leitura" }]));
        }
    ,[]);

    return <>
        <h4>{listaUsers.length}</h4>
        <ul>
            {listaUsers.map((user) => <li key={user.id}>{user.id} - {user.name}</li>)}
        </ul>
    </>
}