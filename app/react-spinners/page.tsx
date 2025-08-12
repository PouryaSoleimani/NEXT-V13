"use client"
import { useState } from "react";
import { FadeLoader } from "react-spinners";

function ReactSpinners() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

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
    </div>
  );
}

export default ReactSpinners;