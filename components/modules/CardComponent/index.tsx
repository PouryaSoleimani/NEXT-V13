import { PropsWithChildren } from "react";
import styles from "./card.module.css";

type Props = PropsWithChildren;

const CardComponent = ({ children }: Props) => {
  return (
    <div className='bg-stone-900 border-r-2 border-r-transparent hover:border-r-pink-500 cursor-pointer rounded-lg px-3 py-2 w-32 text-xs font-thin text-center font-vazir center hover:bg-stone-800 transition-all duration-300'>
      {children}
    </div>
  );
};

export default CardComponent;
