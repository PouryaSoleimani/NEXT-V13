import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

const Theme = () => {
  const Theme = useContext(ThemeContext);

  console.info("THEME ==>", Theme);

  const Style: React.CSSProperties = {
    backgroundColor: Theme.primary,
    color: Theme.textPrimary,
    border: `3px solid ${Theme.secondary}`,
    margin: "4rem",
    fontWeight: "bolder",
  };

  return <div style={Style}>Theme Component</div>;
};

export default Theme;
