//^ SERVER COMPONENT
import ListWrapper from "./_components/ListWrapper";

const SsrPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" }); //^ SSR
  const data = await res.json();

  return <div>{data ? <ListWrapper list={data} /> : null}</div>;
};

export default SsrPage;
