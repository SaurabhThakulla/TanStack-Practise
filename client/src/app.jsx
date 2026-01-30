import { useQuery } from "@tanstack/react-query";
import Posted from "./api/api"

export default function App() {
  const { data=[] } = useQuery({
    queryKey: ['posts'],
    queryFn: Posted,
  })
  console.log(data);

  return (
    <div>
      {data.map((e) => {
        const { title, views } = e;
        return (
          <div key={e.id}>
            <div>Title : {title}</div>
            <div>views : {views}</div>
          </div>
        )
       })}
    </div>
  );
}                             