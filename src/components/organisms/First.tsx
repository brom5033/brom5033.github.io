import { Typography, Tooltip } from '@mui/material';
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
  },
} as const;

export const First = () => {
  return (
    <ColorSection color="#BD3455">
      <Typography component="h1" variant="h1">
        FRONTEND
      </Typography>
      <Tooltip title={<h1>백엔드도 해볼까..</h1>} placement="top-end" arrow>
        <img src="/images/myImage.png" alt="백엔드도 해볼까.." style={style.image} />
      </Tooltip>
      <Typography component="h2" variant="h2" sx={style.h2}>
        <span style={{ color: '#f7e057' }}>개발자 박민정</span>이에요
      </Typography>
    </ColorSection>
  );
};
