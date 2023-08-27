import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global-styles";
import { theme } from "./styles/theme";
//import Home from "./templates/app";
import Resume from "./templates/resume";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Resume />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
