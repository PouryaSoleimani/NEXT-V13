import ListWrapper from "./_components/ListWrapper";

const SsrPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
  const data = await res.json();
  console.log("DATA => ", data[0]);

  return (
    <div>
      <ListWrapper list={data} />
    </div>
  );
};

export default SsrPage;