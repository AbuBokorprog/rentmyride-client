import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './providers/ThemeProvider.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Toaster />
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
