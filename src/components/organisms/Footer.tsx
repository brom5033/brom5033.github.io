import { Container } from '@mui/material';

const style = {
  container: {
    py: '30px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#333',
    minWidth: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#0af',
    marginRight: '3px',
  },
} as const;

export const Footer = () => {
  return (
    <Container component="footer" sx={style.container}>
      <a
        href="https://github.com/brom5033/brom5033.github.io/blob/main/LICENSE"
        target="_blank"
        rel="noreferrer"
        style={style.link}
      >
        MIT LICENSE
      </a>
      2023 by brom5033 Minjeong Park
    </Container>
  );
};
