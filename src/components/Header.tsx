"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  // ✅ Ensure component only renders after client mounts
    useEffect(() => setMounted(true), []);

    return (
    <header className="flex justify-between items-center mt-6">
    {/* <a href="/" className="text-gray-300 hover:text-white text-lg font-medium">
        Karthik
      </a> */}
    {/* {mounted && (
        <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded hover:bg-gray-800"
        >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      )} */}
    </header>
);
};
