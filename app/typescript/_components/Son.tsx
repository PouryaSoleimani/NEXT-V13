"use client";
import React, { useEffect, useRef, useState } from "react";
import { SonPropsType } from "./Father";

const Son: React.FC<SonPropsType> = ({ title, availables, isBlack, theme }) => {
  const [value, setvalue] = useState("");
  const elem = useRef<HTMLInputElement>(null);

  console.group("%c SON PROPS", "color: cyan");
  console.info("%c title :", "color: yellow", title);
  console.info("%c availables :", "color: yellow ", availables);
  console.info("%c isBlack : ", "color: yellow", isBlack);
  console.info("%c theme : ", "color: yellow", theme);
  console.groupEnd();

  useEffect(() => {
    console.info("USE REF ===>", elem.current?.value);
  }, [value]);

  return (
    <div>
      <h2 style={styles}>STYLED FROM REACT</h2>
      <input
        type="text"
        ref={elem}
        placeholder="TEXT"
        className="text-black"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </div>
  );
};

export default Son;

const styles: React.CSSProperties = {
  color: "cornflowerblue",
  backgroundColor: "#c5eaf3",
  border: "5px solid cornflowerblue",
  padding: "10px",
  width: "300px",
  fontSize: "30px",
  fontWeight: "bolder",
  borderRadius: "10px",
  margin: "10px auto",
  textAlign: "center",
};
