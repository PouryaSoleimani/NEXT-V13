"use client";

import CardComponent from "@/components/modules/CardComponent";

const CssTrainingPage = () => {
  return (
    <section className='container mx-auto'>
      <div
        id='BUTTONS_WRAPPER'
        className='grid grid-cols-3 w-fit mx-auto place-items-center gap-2 py-2'>
        <CardComponent>روزهای زوج</CardComponent>
        <CardComponent>روزهای فرد</CardComponent>
        <CardComponent>همه</CardComponent>
      </div>
    </section>
  );
};

export default CssTrainingPage;
