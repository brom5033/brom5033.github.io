import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import '@assets/fonts/font.css';
import { Index } from '@pages/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Index />
  </React.StrictMode>,
);
