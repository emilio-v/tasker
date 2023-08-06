import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#060812",
    },
    // primary: {
    //   main: "#4A148C",
    // },
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
