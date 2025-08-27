import { useChangeLocale } from "@/locales/client";
import Image from "next/image";
import React from "react";

function Header() {
  const changeLocale = useChangeLocale();

  return (
    <div className="px-5 w-screen">
      <div id="BUTTONS" className="mt-4 flex items-center mx-10 justify-between gap-4 bg-black p-5 rounded-lg">
        <div>LOGO</div>
        <div className="flex gap-3">
          <button className="hover:scale-110 duration-300" onClick={() => changeLocale("fa")}>
            <Image src={"/images/iran.svg"} width={35} height={30} alt="farsi" />
          </button>
          <button className="hover:scale-110 duration-300" onClick={() => changeLocale("en")}>
            <Image src={"/images/england.svg"} width={35} height={30} alt="english" />
          </button>
          <button className="hover:scale-110 duration-300" onClick={() => changeLocale("ar")}>
            <Image src={"/images/saudi-arabia.svg"} width={35} height={30} alt="arabic" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
