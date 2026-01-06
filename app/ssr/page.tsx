'use server'
//^ SERVER SIDE PAGE _________________________________________________________________________________________________________
import Loading from "../loading";
import ListWrapper from "./_components/ListWrapper";
import useServerSideFetcher from "./_hooks/useServerSideFetcher";

const SsrPage = async () => {
  const users = await useServerSideFetcher("https://jsonplaceholder.typicode.com/users", "no-store");

  if (!users) {
    return <Loading />;
  }

  return <div>{users ? <ListWrapper list={users} /> : null}</div>;
};

export default SsrPage;

//^ PRE-RENDERING IN NEXT.JS
// DEFAULT => SSG 
// NO-STORE => SSR
// REVALIDATE => ISR
// USESWR() => CSR  