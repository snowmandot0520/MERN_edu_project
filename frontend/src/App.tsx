import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { FallbackProvider } from "react-current-page-fallback";
import { Routes } from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalStyle from "./styles/global.style";

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <GlobalStyle />
        <BrowserRouter>
          <FallbackProvider>
            <Routes />
          </FallbackProvider>
        </BrowserRouter>
      </MantineProvider>
    </ErrorBoundary>
  );
};

export default App;
