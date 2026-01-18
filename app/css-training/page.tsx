import FiltersWrapper from "./_components/FiltersWrapper";
import ResultsWrapper from "./_components/ResultsWrapper";

const Page = async (props: PageProps<"/css-training">) => {
  const params = await props.searchParams;
  console.info("props", params);
  return (
    <section className='container mx-auto '>
      <div className='h-0 grid grid-cols-6 min-h-full'>
        <ResultsWrapper />
        <FiltersWrapper />
      </div>
    </section>
  );
};

export default Page;
