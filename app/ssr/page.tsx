//^ SERVER COMPONENT
import Loading from "../loading";
import ListWrapper from "./_components/ListWrapper";
import useServerSideFetcher from "./_hooks/useServerSideFetcher";

const SsrPage = async () => {
  const users = await useServerSideFetcher("https://jsonplaceholder.typicode.com/users", "default", 50);
  if (!users) {
    return <Loading />;
  }
  return <div>{users ? <ListWrapper list={users} /> : null}</div>;
};

export default SsrPage;
