"use client";
import CardComponent from "@/components/modules/CardComponent";
import { FilterType, useNumbersFilterStore } from "@/zustand/useNumberFiltersStore";
import { items } from "../data/items";
type SingleFilterButtonType = {
  id: number;
  handler: () => void;
  label: string;
  type: FilterType;
};
const FiltersWrapper = () => {
  const type = useNumbersFilterStore((s) => s.filterType);
  const filterButtonsArray: SingleFilterButtonType[] = [
    { id: 1, handler: allNumbersHandler, label: "همه", type: "ALL" },
    { id: 2, handler: evenNumbersHandler, label: "روزهای زوج", type: "EVEN" },
    { id: 3, handler: oddNumbersHandler, label: "روزهای فرد", type: "ODD" },
  ];

  const setter = useNumbersFilterStore.setState;
  function allNumbersHandler() {
    setter({ numbers: items, filterType: "ALL" });
  }
  function evenNumbersHandler() {
    const oddNumbers = items.filter((item) => item % 2 === 0);
    setter({ numbers: oddNumbers, filterType: "EVEN" });
  }
  function oddNumbersHandler() {
    const oddNumbers = items.filter((item) => item % 2 !== 0);
    setter({ numbers: oddNumbers, filterType: "ODD" });
  }
  1;
  return (
    <div className='filters border-l border-l-pink-500  col-span-1 flex flex-col justify-start items-end gap-3 p-3'>
      {filterButtonsArray.map((btn) => (
        <CardComponent
          key={btn.id}
          handler={btn.handler}
          type={btn.type}>
          {btn.label}
        </CardComponent>
      ))}
      <div className='center '>
        <h2 className='font-vazir rounded-md  pb-1 text-center  bg-stone-900 px-3 border-b-4 border-b-pink-500'>
          {type === "ALL" ? "همه" : type === "EVEN" ? "روزهای زوج" : "روزهای فرد"}
        </h2>
      </div>
    </div>
  );
};

export default FiltersWrapper;
