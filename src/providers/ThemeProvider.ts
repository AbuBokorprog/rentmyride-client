import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      "50": "#fff1f2",
      "100": "#ffe4e6",
      "200": "#fecdd3",
      "300": "#fda4af",
      "400": "#fb7185",
      "500": "#f43f5e",
      "600": "#e11d48",
      "700": "#be123c",
      "800": "#9f1239",
      "900": "#881337",
      main: "#f43f5e", // main color for primary
      contrastText: "#ffffff", // text color against primary color
    },
    secondary: {
      50: "#f6f7f9",
      100: "#eceef2",
      200: "#d5d9e2",
      300: "#b1bbc8",
      400: "#8695aa",
      500: "#64748b",
      600: "#526077",
      700: "#434e61",
      800: "#3a4252",
      900: "#343a46",
      //   950: "#23272e",
      main: "#64748b", // main color for secondary
      contrastText: "#ffffff", // text color against secondary color
    },
    warning: {
      main: "#ffa726",
      contrastText: "#000000",
    },
    success: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    error: {
      main: "#e11d3f", // Similar to primary[600]
      contrastText: "#ffffff",
    },
    background: {
      default: "#f6f7f9",
      paper: "#ffffff",
    },
  },
  typography: {
    // You can customize typography here if needed
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;
