//^ HOMEPAGE
import Image from "next/image";
import Header from "./components/Header";
import Datas from "./components/Datas";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-end space-x-10 p-4">
        <Datas />
        <Products />
      </div>
    </>
  );
}
