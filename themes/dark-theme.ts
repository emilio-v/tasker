import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#060812",
      paper: "#121629",
    },
    primary: {
      // main: "#fffffe",
      // main: "#b8c1ec",
      main: "#eebbc3",
    },
    secondary: {
      main: "#19857B",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#fffffe",
    },
  },

  typography: {
    allVariants: {
      fontFamily: "Nunito",
      lineHeight: "normal",
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#060812",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e3868",
          backgroundImage: "none",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e3868",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e3868",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#121629",
        },
      },
    },
  },
});
