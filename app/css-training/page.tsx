"use client";
import CardComponent from "@/components/modules/CardComponent";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { ReactElement } from "react";
import toast from "react-hot-toast";

const CssTrainingPage = (): ReactElement => {
  return (
    <>
      <div className={cn("container center mx-auto p-3")}>
        <CardComponent>THIS IS CONTENT</CardComponent>
        <CardComponent>CHILDREN</CardComponent>
      </div>
      <div className='grid grid-cols-4 border p-5 rounded-lg border-stone-500 gap-3 w-fit mx-auto place-items-center'>
        {Array(32)
          .fill(null)
          .map((_, i) => (
            <Button
              variant={"default"}
              onClick={() =>
                toast.success(`NUMBER : ${i.toString()}`, {
                  position: "top-right",
                  icon: <Info />,
                  className: "bg-black",
                  style: {
                    backgroundColor: "black",
                    width: "200px",
                    borderRadius: "10px",
                    border: "2px solid darkgray",
                    color: "white",
                  },
                })
              }
              key={i}
              className='px-3 py-2 rounded bg-stone-700 hover:border-black hover:bg-white hover:text-black transition-all duration-200 cursor-pointer w-32 center border-2 border-stone-600 h-16'>
              {i + 1}
            </Button>
          ))}
      </div>
    </>
  );
};

export default CssTrainingPage;
