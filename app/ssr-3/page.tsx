"use server";

import TodosWrapper2 from "./_components/TodosWrapper2";
import useServerSideFetcher from "./_hooks/useServerSideFetcher";

const SsrPage3 = async () => {
const todos = await useServerSideFetcher({ url: "https://jsonplaceholder.typicode.com/todos", cache: "no-store", });

  return (
    <div className='center'>
      <TodosWrapper2 data={todos} />
    </div>
  );
};

export default SsrPage3;

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json());

  return posts.slice(0, 50).map((post: any) => ({ slug: post.slug }));
}