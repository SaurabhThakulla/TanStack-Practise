import { useQuery } from "@tanstack/react-query";
function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export default function App() {
   const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error fetching posts</h2>;

  return (
    <div>
      <h1>Posts</h1>
      {data.slice(0, 10).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

