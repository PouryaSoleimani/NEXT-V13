import { AlertTriangleIcon } from "lucide-react";
import ListItem from "./ListItem";

type SingleItem = { id: string | number; name: string; [key: string]: string | number };
interface Props {
  list: SingleItem[];
}
// COMPONENT _____________________________________________________________________________
const ListWrapper = (props: Props) => {
  if (!props.list.length) {
    return (
      <div className='screen center'>
        <div className='text-stone-400 flex flex-col items-center justify-center gap-3 bg-black p-5 rounded-lg border border-stone-700'>
          <AlertTriangleIcon />
          NO LIST IS AVAILABLE RIGHT NOW
        </div>
      </div>
    );
  }

  return (
    <div className='bg-black w-fit mx-auto p-5 rounded-xl my-32 border border-stone-800'>
      {props.list.map((item) => (
        <ListItem
          data={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default ListWrapper;
