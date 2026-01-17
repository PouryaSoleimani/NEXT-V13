"use client";
import React from "react";

import useCounterStore from "@/zustand/store";

const ZustandPage2 = () => {
  const { count } = useCounterStore() as any;
  return <div className='text-6xl text-center font-bold'>{count}</div>;
};

export default ZustandPage2;
