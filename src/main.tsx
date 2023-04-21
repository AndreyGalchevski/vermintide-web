import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
