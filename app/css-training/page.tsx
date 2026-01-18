import CardComponent from "@/components/modules/CardComponent";
import React from "react";
import FiltersWrapper from "./_components/FiltersWrapper";
import ResultsWrapper from "./_components/ResultsWrapper";

const CssTrainingPage = () => {
  return (
    <section className='container mx-auto '>
      <div className='h-0 grid grid-cols-6 min-h-full'>
        <ResultsWrapper />
        <FiltersWrapper />
      </div>
    </section>
  );
};

export default CssTrainingPage;
