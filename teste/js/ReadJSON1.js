//import useFetch from "./useFetch";
function ReadJSON1() {
/*    const [vetUsers,setUsers] = React.useState([]);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((dadosBrutos) => dadosBrutos.json())
    .then((dadosUsers) => setUsers(dadosUsers));
*/
    const [vetUsers] = useFetch("https://jsonplaceholder.typicode.com/users");

    return <>
    <ul>
        {vetUsers &&
        vetUsers.map(
            (user) => <li key={user.id}>{user.name} - ({user.username})</li>
        )}
    </ul>
</>;
}