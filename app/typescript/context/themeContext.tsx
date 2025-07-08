import React from "react";
import themes from "./themes";

export const ThemeContext = React.createContext(themes);

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [theme, setTheme] = React.useState(themes.primary);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.primary ? themes.secondary : themes.primary
    );
  };

  return (
    <ThemeContext.Provider value={themes}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
