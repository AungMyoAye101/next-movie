// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;
  const handleClick = () => {
    setDark((pre) => !pre);
    if (dark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="size-8 flex justify-center items-center text-gray-700 bg-purple-100 rounded-full shadow-md"
    >
      {dark ? <FaLightbulb /> : <FaMoon />}
    </button>
  );
}
