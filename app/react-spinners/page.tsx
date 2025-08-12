"use client"
import { useState } from "react";
import { FadeLoader } from "react-spinners";

function ReactSpinners() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#e10808");

  setTimeout(() => { setLoading(false) }, 2000);

  return (
    <div className="sweet-loading">
      <div className="flex items-center justify-center py-10">
        <button className="btn mx-auto" onClick={() => setLoading(!loading)} >
          Toggle Loader
        </button>
      </div>
      <div className="flex items-center justify-center">
        <FadeLoader color={color} loading={loading} speedMultiplier={0.8} width={5} height={15} className="scale-50" aria-label="Loading Spinner" data-testid="loader" />
      </div>
      {!loading && (
        <div className="flex items-center justify-center text-xl font-black bg-emerald-800 w-fit mx-auto px-5 py-2 rounded-xl">
          <h2>DONE</h2>
        </div>
      )}
    </div>
  );
}

export default ReactSpinners;