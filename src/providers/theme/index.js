import { createContext, useContext, useState, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const [currentTheme, setCurrentTheme] = useState("light");
  // const getOppositeTheme = useCallback(
  //   () => (currentTheme === "light" ? "dark" : "light"),
  //   [currentTheme]
  // );
  const [theme, setTheme] = useState("light");
  const getOppositeTheme = useCallback(
    () => (theme === "light" ? "dark" : "light"),
    [theme]
  );
  const changeTheme = () => {
    setTheme(getOppositeTheme());
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
