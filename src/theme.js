import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  shadows: ["none"],
  typography: {
    bodyFontFamily: "Droid Sans, roboto, Arial",
    fontWeight: 200,
    logoFontFamily: "Abril fatface, Playfair Display, serif",
    headerFontFamily: "Playfair Display, serif",
  },
  titleDesktop: "3.4rem",
  titleTablet: "3.0rem",
  titlePhone: "2.0rem",
  textDesktop: "2.1rem",
  textTablet: "2.0rem,",
  textPhone: "1.7rem",
  titleBig: "35px",
  titleSmall: "25px",
  textBig: "20px",
  textSmall: "16px",
  palette: {
    primary: {
      main: "#F5FFF5",
    },
    secondary: {
      main: "#19857b",
    },
    textPrimary: {
      main: "#3B454E",
    },
    textSecondary: {
      main: "#fff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    icon: {
      main: "#fff",
    },
    lightGreen: "#EDFFF4",
    midGreen: "#0C501F",
    charcoal: "#3B454E",
    lightGrey: "#D8D8D8",
    beige: "#FFF",
    brown: "#775253",
  },
});

export default theme;
