import type { FC } from 'react';
import { Typography, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { ColorSection } from '@components/atoms';

const style = {
  image: {
    position: 'absolute',
    zIndex: '100',
    left: '50%',
    top: '29%',
    height: '300px',
  },
  h2: {
    position: 'absolute',
    zIndex: '101',
    left: '50%',
    top: '55%',
    transform: 'translate(-50%,-10%)',
    width: '100%',
    fontSize: {
      xs: '1.9rem',
      sm: '3.75rem',
    },
  },
} as const;

export const First: FC = () => {
  return (
    <ColorSection color="#BD3455">
      <Typography
        component="h1"
        variant="h1"
        sx={{
          fontSize: {
            xs: '3rem',
            sm: '6rem',
          },
        }}
      >
        FRONTEND
      </Typography>
      <Tooltip title={<h1>백엔드도 해볼까..</h1>} placement="top-end" arrow>
        <img src="/images/myImage.png" alt="백엔드도 해볼까.." style={style.image} />
      </Tooltip>

      <Typography component="h2" variant="h2" sx={style.h2}>
        <motion.span
          style={{
            textShadow:
              ' 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f7e057,0 0 92px #f7e057, 0 0 102px #f7e057, 0 0 112px #f7e057, 0 0 161px #f7e057',
          }}
          animate={{ color: ['#bc7f7f', '#f19c9c'] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          개발자 박민정
        </motion.span>
        이에요
      </Typography>
    </ColorSection>
  );
};
