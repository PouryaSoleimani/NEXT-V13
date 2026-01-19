import FiltersWrapper from "./_components/FiltersWrapper";
import ResultsWrapper from "./_components/ResultsWrapper";

const Page = async (props: PageProps<"/css-training">) => {
  const params = await props.searchParams;
  console.info("props", (await props.searchParams).name);
  const _result = await getDoctor("DOCTOR")
  console.info('PROMISE RESULT => ', _result)

  return (
    <section dir="rtl" className='container mx-auto '>
      <div className='h-0 grid grid-cols-6 min-h-full py-10'>
        <FiltersWrapper />
        <ResultsWrapper params={params as any} />
      </div>
    </section>
  );
};

export default Page;

async function getDoctor(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (2 == 2) { // FAKE CONDITION
      setTimeout(() => {
        const result = id
        resolve(result)
      }, 2000);
    } else {
      reject('PROMISE REJECT ! ')
    }
  })
}