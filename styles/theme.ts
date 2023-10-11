import { Overpass } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    footerText?: string;
    footerHeading?: string;
    bgNav?: string
    textTab?: string
  }
}

export const overpass = Overpass({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  //   display: 'swap',
  //   fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // main: '#02A3FE',
      main: "#009EE8",
    },
    secondary: {
      main: "#F47B2B",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#445a7a",
      secondary: "#17376D",
    },
    background: {
      default: "#fff",
    },
    // primary: "#BDC5D3",
    textTab: '#BDC5D3',
    bgNav: "#17376D",
    footerHeading: "#FBB552",
    footerText: "#E3EADB",
  },
  typography: {
    fontFamily: overpass.style.fontFamily,
  },
});

export default theme;
