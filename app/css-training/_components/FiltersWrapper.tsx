"use client";
import CardComponent from "@/components/modules/CardComponent";
import { useNumbersFilterStore } from "@/zustand/useNumberFiltersStore";
import { items } from "../data/items";
import { useDoctorsStore } from "@/zustand/useDoctorsStore";
import { SingleFilterButtonType, SingleGenderType } from "@/types/types";
import { mockDoctors } from "@/mock/mockDoctors";
import { cn } from "@/lib/utils";

const FiltersWrapper = () => {
  // STORE ______________________________________________________________________________________________
  const type = useNumbersFilterStore((s) => s.filterType);
  const typeGender = useDoctorsStore(s => s.filterType)
  const setter = useNumbersFilterStore.setState;
  const doctorsSetter = useDoctorsStore.setState

  // MOCK DATAS _________________________________________________________________________________________
  const filterButtonsArray: SingleFilterButtonType[] = [
    { id: 1, handler: allNumbersHandler, label: "همه", type: "ALL" },
    { id: 2, handler: evenNumbersHandler, label: "روزهای زوج", type: "EVEN" },
    { id: 3, handler: oddNumbersHandler, label: "روزهای فرد", type: "ODD" },
  ];

  const mockGenders: SingleGenderType[] = [
    { id: 1, label: 'همه', type: "ALL", handler: allHandler },
    { id: 2, label: 'آقایان', type: "MALE", handler: maleHandler },
    { id: 3, label: 'بانوان', type: "FEMALE", handler: femaleHandler }
  ]


  // FUNCTIONS ___________________________________________________________________________________________
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

  function maleHandler() {
    const maleDoctors = mockDoctors?.filter((item) => item.gender === 'MALE')
    doctorsSetter({ doctors: maleDoctors, filterType: 'MALE' })
  }

  function femaleHandler() {
    const femaleDoctors = mockDoctors?.filter((item) => item.gender === 'FEMALE')
    doctorsSetter({ doctors: femaleDoctors, filterType: "FEMALE" })
  }

  function allHandler() {
    doctorsSetter({ doctors: mockDoctors, filterType: 'ALL' })
  }

  // RETURN __________________________________________________________________________________________________________
  return (
    <div className='filters border-l border-l-pink-500 col-span-1 flex flex-row lg:flex-col justify-start items-end gap-3 p-3'>
      {/* NUMBER FILTER BUTTONS */}
      {filterButtonsArray.map((btn) => (
        <CardComponent
          key={btn.id}
          handler={btn.handler}
          type={btn.type}>
          {btn.label}
        </CardComponent>
      ))}

      {/* TYPE STATUS BADGE */}
      <div className='center lg:w-1/2 mx-1.5 '>
        <h2 className='font-vazir rounded-sm w-full pb-1 text-center  bg-stone-900 px-3 border-b-4 border-b-pink-500'>
          {type === "ALL" ? "همه" : type === "EVEN" ? "روزهای زوج" : "روزهای فرد"}
        </h2>
      </div>

      {/* GENDER FILTER BUTTONS  */}
      <div className="border-t-2 pt-3 border-stone-600 flex flex-row lg:flex-col gap-2">
        {mockGenders.map((item) => (
          <CardComponent
            key={item.id}
            handler={item.handler}
            typeGender={item.type}
            isDoctor
          >
            {item.label}
          </CardComponent>
        ))}

        {/* GENDER STATUS BADGE */}
        <div className='center  mx-1 mt-2 '>
          <h2 className={cn('font-vazir rounded-sm w-full p-1 text-center  bg-stone-900 px-3 border-b-4', typeGender === 'FEMALE' ? 'border-b-pink-500' : typeGender === 'MALE' ? "border-b-blue-500" : 'border-b-stone-300')}>
            {typeGender === "ALL" ? "همه" : typeGender === "MALE" ? <span>آقایان</span> : <span>بانوان</span>}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FiltersWrapper;

