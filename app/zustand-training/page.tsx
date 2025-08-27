"use client";
import React from "react";

import useCounterStore from "@/zustand/store";

type CounterStoreType = {
  count: number;
  increase: () => void;
  decrease: () => void;
  changeTo100: () => void;
  reset: () => void;
};

const ZustandTraining = () => {
  const { count, increase, decrease, changeTo100, reset } = useCounterStore() as CounterStoreType;

  return (
    <div className="h-[90vh]">
      <h2 className="bg-emerald-700 text-center py-5 text-3xl font-black">Zustand Training</h2>
      <div className="bg-zinc-900 p-6 w-[90%] mx-auto flex flex-col gap-6 items-center justify-center">
        <h2 className="text-center font-black text-4xl">{count}</h2>
        <div className="space-x-4">
          <button onClick={increase} className="bg-green-800 w-24 text-xl font-bold rounded">
            {" "}
            +{" "}
          </button>
          <button onClick={decrease} className="bg-red-800 w-24 text-xl font-bold rounded">
            {" "}
            -{" "}
          </button>
          <button onClick={changeTo100} className="bg-yellow-800 w-24 text-xl font-bold rounded">
            {" "}
            100{" "}
          </button>
          <button onClick={reset} className="bg-blue-800 w-24 text-xl font-bold rounded">
            {" "}
            reset{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZustandTraining;
