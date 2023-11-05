import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/fonts/font.css';
import { ColorSection } from '@components/atoms/ColorSection';
import { Typography, CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <CssBaseline />
      <ColorSection color="#BD3455">
        <Typography component="h1" variant="h1">
          FRONTEND
        </Typography>
        <img
          src="/images/myImage.png"
          alt=""
          style={{ position: 'absolute', zIndex: '100', left: '50%', top: '29%', height: '300px' }}
        />
        <Typography component="h1" variant="h1" sx={{ position: 'absolute', zIndex: '101', left: '20%', top: '55%' }}>
          <span style={{ color: 'yellow' }}>개발자 박민정</span>입니다
        </Typography>
      </ColorSection>
      <ColorSection color="#5D5DA8">
        <Typography component="h1" variant="h1">
          FRONTEND
        </Typography>
      </ColorSection>
    </>
  </React.StrictMode>,
);
