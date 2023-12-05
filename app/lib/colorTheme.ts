import { createTheme } from "@mui/material/styles";
import { indigo, amber } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: amber[500],
    },
  },
});
