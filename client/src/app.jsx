import { useQuery } from "@tanstack/react-query";
import Posted from "./api/api"

export default function App() {
  console.log("APP rendered")
  const { data, isLoading, isError, status } = useQuery({
    queryKey: ["posts"],
    queryFn: Posted
  })
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error fetching posts</h1>;
  console.log(data, isLoading, status)
  return (
    <div>
      Hello World
    </div>
  );
}

