import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
//import Home from "./templates/App";
import { NavBar } from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar>children</NavBar>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
