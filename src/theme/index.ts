import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";

export const theme = createTheme({
  palette,
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
