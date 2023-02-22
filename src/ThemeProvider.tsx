import React from "react";
import { theme } from './theme';
type ThemeProvidersProps = {
  children: React.ReactNode;
};
import { ThemeProvider } from "@mui/material/styles";

export const ThemeContextProvider = ({children}:ThemeProvidersProps) => {
    return <ThemeProvider theme={theme}>{children }</ThemeProvider>
}