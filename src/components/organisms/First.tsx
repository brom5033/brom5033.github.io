import { Typography, Tooltip } from '@mui/material';
import { ColorSection } from '@components/atoms/ColorSection';

export const First = () => {
  return (
    <ColorSection color="#BD3455">
      <Typography component="h1" variant="h1">
        FRONTEND
      </Typography>
      <Tooltip title={<h1>백엔드도 해볼까..</h1>} placement="top-end" arrow>
        <img
          src="/images/myImage.png"
          alt="백엔드도 해볼까.."
          style={{ position: 'absolute', zIndex: '100', left: '50%', top: '29%', height: '300px' }}
        />
      </Tooltip>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          position: 'absolute',
          zIndex: '101',
          left: '50%',
          top: '55%',
          transform: 'translate(-50%,-10%)',
          width: '100%',
        }}
      >
        <span style={{ color: 'yellow' }}>개발자 박민정</span>입니다
      </Typography>
    </ColorSection>
  );
};
