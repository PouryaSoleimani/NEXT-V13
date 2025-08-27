"use client";
import useCounterStore from "@/zustand/store";
import React from "react";

const ZustandPage2 = () => {
  const { count } = useCounterStore() as any;
  return <div className="text-6xl text-center font-bold">{count}</div>;
};

export default ZustandPage2;
