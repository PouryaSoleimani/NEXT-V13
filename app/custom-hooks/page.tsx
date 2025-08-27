"use client";
import React from "react";

import { useToggle } from "@/hooks/useToggle";

const CustomHooksPage = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div>
      CustomHooksPage
      <button className="btn" onClick={toggleIsOn as any}>
        {isOn ? "ON" : "OFF"}
      </button>
      <h2 className="text-2xl m-10 font-black">THIS IS {isOn ? "ON" : "OFF"}</h2>
    </div>
  );
};

export default CustomHooksPage;
