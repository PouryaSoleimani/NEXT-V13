import React, { createContext, PropsWithChildren } from "react";

import themes from "./themes";

export const ThemeContext = createContext(themes);

type ThemeContextProviderProps = { children: React.ReactNode };

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
