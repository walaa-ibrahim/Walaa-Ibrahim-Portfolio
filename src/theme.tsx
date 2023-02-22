import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#e38528",
      light: "#fcf2e8",
    },
    secondary: {
      main: "#1c2b53",
      light: "#21325e",
    },
    background: {
      paper: "#fff",
    },
    success: {
      main: "#fef4f5",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "'Mulish', sans-serif",
      color: "#1c2b53",
    },
  },
});

