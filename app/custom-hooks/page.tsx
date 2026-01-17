"use client";

import { useToggle } from "@/hooks/useToggle";
import { Button } from "@/components/ui/button";

const CustomHooksPage = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div className='section center-col gap-6'>
      CustomHooksPage
      <Button
        variant={"blue"}
        className='btn w-44'
        onClick={toggleIsOn as any}>
        {isOn ? "ON" : "OFF"}
      </Button>
      <h2 className='text-2xl m-10 font-black'>
        THIS IS {isOn ? "ON" : "OFF"}
      </h2>
    </div>
  );
};

export default CustomHooksPage;
