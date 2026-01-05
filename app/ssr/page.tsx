//^ SERVER COMPONENT
import Loading from "../loading";
import ListWrapper from "./_components/ListWrapper";
import useServerSideFetcher from "./_hooks/useServerSideFetcher";

const SsrPage = async () => {
  const data = await useServerSideFetcher("https://jsonplaceholder.typicode.com/users");
  if (!data) {
    return <Loading />;
  }
  return <div>{data ? <ListWrapper list={data} /> : null}</div>;
};

export default SsrPage;
  