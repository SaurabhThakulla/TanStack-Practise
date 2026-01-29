const Posted = async () => {
    const response = await fetch("http://localhost:3000/posts?_sort=-id");

    const postdata = await response.json();
    return postdata;
}
export default Posted;

// npx json-server --watch src/api/data.json --port 3000