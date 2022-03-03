import { createContext } from "react";
import useLocalStorage from "../hooks/localStorage";

const ThemeContext = createContext();

const ThemeProvaider = ({ children }) => {
  const favoriteCharacters = useLocalStorage("favoriteCharacters", []);
  const themeMode = useLocalStorage("themeMode", "light");

  return (
    <ThemeContext.Provider value={{ favoriteCharacters, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvaider };
