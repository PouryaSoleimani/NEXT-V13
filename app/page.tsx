//^ HOMEPAGE __________________________________________________________________________________________
import { ReactElement } from "react"; 
import Datas from "../components/Datas";
import Products from "../components/Products";

export default function Home(): ReactElement {
  console.info("HELLo");

  return (
    <>
      <div className='flex items-center justify-center space-x-10 p-4 w-full'>
        <Datas />
        <Products />
      </div>
    </>
  );
}
