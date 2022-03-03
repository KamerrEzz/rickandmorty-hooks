import { ThemeContext } from "../context/Context";
import { useContext, useEffect } from "react";

const useThemeMode = () => {
  const { themeMode } = useContext(ThemeContext);
  const mode = themeMode.item;
  const modeTheme = mode === "light" ? "dark" : "light";
  const setMode = themeMode.saveItem;

  console.log({
    mode,
    modeTheme,
  });

  const root = window.document.documentElement;
  root.classList.remove(modeTheme);
  root.classList.add(mode);

  return [mode, setMode];
};

export default useThemeMode;
