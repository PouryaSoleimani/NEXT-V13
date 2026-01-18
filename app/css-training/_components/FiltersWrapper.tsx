"use client";
import CardComponent from "@/components/modules/CardComponent";
import { useNumbersFilterStore } from "@/zustand/useNumberFiltersStore";
import { items } from "../data/items";

const FiltersWrapper = () => {
  const setter = useNumbersFilterStore.setState;
  function allNumbersHandler() {
    setter({ numbers: items });
  }
  function evenNumbersHandler() {
    const oddNumbers = items.filter((item) => item % 2 === 0);
    setter({ numbers: oddNumbers });
  }
  function oddNumbersHandler() {
    const oddNumbers = items.filter((item) => item % 2 !== 0);
    setter({ numbers: oddNumbers });
  }
  1;
  return (
    <div className='filters border-l border-l-pink-500  col-span-1 flex flex-col justify-start items-end gap-3 p-3'>
      <CardComponent handler={allNumbersHandler}>همه</CardComponent>
      <CardComponent handler={evenNumbersHandler}>روزهای زوج</CardComponent>
      <CardComponent handler={oddNumbersHandler}>روز های فرد</CardComponent>
    </div>
  );
};

export default FiltersWrapper;
