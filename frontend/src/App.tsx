import React, { FC } from 'react';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { BrowserRouter } from 'react-router-dom';
import { FallbackProvider } from 'src/providers/FallbackProvider';
import { Routes } from 'src/routes';
import GlobalStyle from 'src/styles/global.style';

import ErrorBoundary from 'src/components/ErrorBoundary';

export const App: FC = () => (
    <ErrorBoundary>
      <MantineProvider withGlobalStyles={true} withNormalizeCSS={true}>
        <GlobalStyle />
        <NotificationsProvider position='top-right'>
          <BrowserRouter>
            <FallbackProvider>
              <Routes />
            </FallbackProvider>
          </BrowserRouter>
        </NotificationsProvider>
      </MantineProvider>
    </ErrorBoundary>
  );

export default App;
