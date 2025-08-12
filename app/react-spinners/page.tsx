"use client"
import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";


function ReactSpinners() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading flex flex-col items-center">
      <button onClick={() => setLoading(!loading)} className="btn mx-auto my-10">Toggle Loader</button>
      <ClipLoader color={color} loading={loading} speedMultiplier={0.8} size={35} className="stroke-3" aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
}

export default ReactSpinners;