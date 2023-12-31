import type { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

interface Props extends PropsWithChildren {
  color: string | string[];
  mobileDoubleHeight?: boolean;
}

export const ColorSection: FC<Props> = ({ children, color, mobileDoubleHeight }) => {
  const style = {
    container: {
      display: 'table',
      position: 'relative',
      color: 'white',
      height: { xs: mobileDoubleHeight ? '200vh' : '100vh', sm: '100vh' },
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      '& > *': {
        display: 'table-cell',
        verticalAlign: 'middle',
      },
    },
  } as const;

  return (
    <Container
      initial={typeof color === 'string' ? { backgroundColor: color } : true}
      animate={{ backgroundColor: color }}
      transition={{ ease: 'easeOut', duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      disableGutters
      maxWidth={false}
      component={motion.section}
      sx={style.container}
    >
      {children}
    </Container>
  );
};
