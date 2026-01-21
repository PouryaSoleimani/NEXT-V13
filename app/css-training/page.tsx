import { Suspense } from "react";
import FiltersWrapper from "./_components/FiltersWrapper";
import ResultsWrapper from "./_components/ResultsWrapper";
import SuspenseComponent, { LoadingDoctorSmall } from "./_components/SuspenseComponent";

const Page = async (props: PageProps<"/css-training">) => {
  const params = await props.searchParams;
  console.info("props", params.name);


  return (
    <section dir="rtl" className='container mx-auto'>
      <div className='h-0 flex flex-col lg:grid lg:grid-cols-6 min-h-full py-10'>
        <FiltersWrapper />
        <ResultsWrapper params={params as any} />
        <Suspense fallback={<LoadingDoctorSmall />}>
          <SuspenseComponent />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
