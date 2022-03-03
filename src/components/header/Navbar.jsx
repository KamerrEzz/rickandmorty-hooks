import React from "react";
import useThemeMode from "../../hooks/themeMode"

function Navbar() {
  const [mode, setMode] = useThemeMode();
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <nav className="flex justify-around items-center">
      <div>
        <img src="" alt="logo" />
      </div>
      <ul>
        <button onClick={() => toggleMode()}>{mode === "light" ? "dark" : "light"}</button>
      </ul>
    </nav>
  );
}

export default Navbar;
