"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

function Theme() {
  const { mode, setMode } = useTheme();
  function modeChange() {
    let newMode: string = "";

    if (mode === "light") {
      newMode = "dark";
    } else if (mode === "dark") {
      newMode = "light";
    }
    setMode(newMode);
    // if (newMode && newMode !== "system") {
    if (newMode) {
      localStorage.theme = newMode;
    } else {
      // Reset to system theme (remove from local storage)
      localStorage.removeItem("theme");
    }
  }

  return (
    <div className="cursor-pointer" onClick={() => modeChange()}>
      {mode === "light" ? (
        <Image
          src="/assets/icons/sun.svg"
          alt="sun"
          width={20}
          height={20}
          className="active-theme"
        />
      ) : (
        <Image
          src="/assets/icons/moon.svg"
          alt="moon"
          width={20}
          height={20}
          className="active-theme"
        />
      )}
    </div>
  );
}

export default Theme;
