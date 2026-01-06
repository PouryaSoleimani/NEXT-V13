"use server";
import { Suspense } from "react";
import useServerSideFetcher from "../ssr/_hooks/useServerSideFetcher";
import TodosWrapper from "./_components/TodosWrapper";
import Loading from "../loading";

const SsrPage2 = async () => {
  const todos = await useServerSideFetcher("https://jsonplaceholder.typicode.com/todos", "default");
  console.log("SERVER SIDE COMPONENT");
  return (
    <div className='py-10 center bg-black'>
      <Suspense fallback={<Loading />}>
        <TodosWrapper list={todos} />
      </Suspense>
    </div>
  );
};

export default SsrPage2;
