import { useQuery } from "@tanstack/react-query";
import Posted from "./api/api"

export default function App() {
  const { data, isLoading, } = useQuery({
    queryKey: ["posts"],
    queryFn: Posted
  })
  console.log(data, isLoading)
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error fetching posts</h1>;
  return (
    <div>
      Hello 
    </div>
  );
}

