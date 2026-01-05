//^ SERVER COMPONENT
import ListWrapper from "./_components/ListWrapper";
import SsrFetcher from "./_hooks/SsrFetcher";

const SsrPage = async () => {
  const data = await SsrFetcher("https://jsonplaceholder.typicode.com/users");

  return <div>{data ? <ListWrapper list={data} /> : null}</div>;
};

export default SsrPage;
