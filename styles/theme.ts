import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: {
      light: "#fcfdfe",
      dark: "#062e4c",
    },
    secondary: {
      light: "#27272c",
      dark: "#d6d1ac",
    },
    primaryAccent: {
      light: "#006fa5",
      dark: "#ba424f",
    },
    secondaryAccent: {
      light: "#e00847",
      dark: "#45adbe",
    },
  },
  breakpoints: {
    sm: "320px",
    sm_md: "600px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
