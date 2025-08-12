"use client"
import { useState, CSSProperties } from "react";
import { ClipLoader, GridLoader, ScaleLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function ReactSpinners() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <div className="flex items-center justify-center py-10">
        <button className="btn mx-auto" onClick={() => setLoading(!loading)}>Toggle Loader</button>
      </div>
      <div className="flex items-center justify-center">
        <ScaleLoader color={color} loading={loading} cssOverride={override} width={15} height={60} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    </div>
  );
}

export default ReactSpinners;