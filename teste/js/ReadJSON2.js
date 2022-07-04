//import useFetch from "./useFetch";
function ReadJSON2() {
/*    const [vetPosts,setPosts] = React.useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((dadosBrutos) => dadosBrutos.json())
    .then((dadosPosts) => setPosts(dadosPosts));*/

    const [vetPosts] = useFetch("https://jsonplaceholder.typicode.com/posts");

    return <>
        <ul>
            {vetPosts &&
            vetPosts.map(
                (post) => (post.userId == 1) ? <li key={post.id}>{post.title})</li> : ""
            )}
        </ul>
    </>;
}