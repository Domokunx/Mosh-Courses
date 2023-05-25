import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './theme.ts';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      <Analytics />
    </ChakraProvider>
  </React.StrictMode>,
);
