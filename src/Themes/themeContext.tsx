"use client";
import React, { createContext, useMemo, useState, useCallback } from "react";
import useCustomEffect from "@/hooks/useCustomEffect.hook";

export interface ThemeContextProps {
  themeName: string;
  setThemeName: (themeName: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeName: "default",
  setThemeName: () => {},
  theme: "default",
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  initialThemeName = "default",
  value = "default",
  children,
}: {
  initialThemeName?: string;
  value?: string;
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<string>(initialThemeName);
  useCustomEffect(() => {
    const storedThemeName = localStorage.getItem("themeName");
    if (storedThemeName) {
      setThemeName(storedThemeName);
    }
  }, []);
  const [theme, setTheme] = useState<string>(value);

  useCustomEffect(() => {
    const storedThemeName = localStorage.getItem("themeName");
    applyTheme(storedThemeName || "default");
    const storedTheme = localStorage.getItem("theme");
    applyTheme(storedTheme || "default");
  }, []);

  const applyTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  const handleThemeChange = useCallback((newTheme: string) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  }, []);

  const themeContextValue = useMemo(
    () => ({
      themeName,
      setThemeName: handleThemeChange,
      theme,
      setTheme: handleThemeChange,
    }),
    [handleThemeChange, theme, themeName]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
