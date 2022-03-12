import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("@theme: KenzieShop") || "light"
  );
  const getOppositeTheme = () => (theme === "light" ? "dark" : "light");
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
