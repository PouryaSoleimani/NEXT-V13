//^ HOMEPAGE 
import Header from "./components/Header";
import Datas from "./components/Datas";
import Products from "./components/Products";


export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center space-x-10 p-4 w-full">
        <Datas />
        <Products />
      </div>
    </>
  );
} 
