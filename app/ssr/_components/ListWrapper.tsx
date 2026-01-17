"use client";
import { AlertTriangleIcon, RefreshCcw } from "lucide-react";
import ListItem from "./ListItem";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type SingleItem = {
  id: string | number;
  name: string;
  [key: string]: string | number;
};
interface Props {
  list: SingleItem[];
}
// COMPONENT _____________________________________________________________________________
const ListWrapper = (props: Props) => {
  const router = useRouter();

  if (!props.list.length) {
    return (
      <div className='screen center'>
        <div className='text-stone-300 flex flex-col items-center justify-center gap-3 bg-black p-5 rounded-lg border border-stone-700'>
          <AlertTriangleIcon className='text-rose-900' />
          NO LIST IS AVAILABLE RIGHT NOW
          <Button
            onClick={() => {
              router.refresh();
            }}>
            <RefreshCcw /> Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black shadow-inner shadow-white/30 w-fit mx-auto p-5 rounded-xl my-32 border border-stone-800'>
      {props?.list?.map((item) => (
        <ListItem
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ListWrapper;
