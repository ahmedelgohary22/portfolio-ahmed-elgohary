"use client";

import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";
import React from "react";

interface Props extends ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children, ...props }) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
