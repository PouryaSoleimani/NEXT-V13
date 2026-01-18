import CardComponent from "@/components/modules/CardComponent";
import React from "react";

const FiltersWrapper = () => {
  return (
    <div className='filters border-l border-l-pink-500  col-span-1 flex flex-col justify-start items-end gap-3 p-3'>
      <CardComponent>همه</CardComponent>
      <CardComponent>روزهای زوج</CardComponent>
      <CardComponent>روز های فرد</CardComponent>
    </div>
  );
};

export default FiltersWrapper;
