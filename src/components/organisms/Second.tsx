import { ColorSection } from '@components/atoms';
import { Typography, Grid, Tooltip, Button } from '@mui/material';

const skillList = [
  {
    skillName: 'react',
    src: 'https://ko.legacy.reactjs.org/',
    comment: '넓은 커뮤니티를 통해 낮은 진입장벽이었으며, 리액트만의 리코일등 생태계가 마음에 들었어요.',
  },
  {
    skillName: 'TypeScript',
    src: 'https://www.typescriptlang.org/',
    comment: '타입을 지정해줌으로써 오류가 적고 프로젝트가 견고해지는 것 같았어요.',
  },
  {
    skillName: 'JavaScript',
    src: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    comment: '자바스크립트는 늘 새롭고 재밌어요.',
  },
  { skillName: 'MUI', src: 'https://mui.com/', comment: 'MUI는 빠르고 쉽고 예쁘고 재밌어요.' },
  {
    skillName: 'StackFlow',
    src: 'https://stackflow.so/',
    comment: '당근마켓에서 사용하는 모바일라우터라서 비슷한 결과물을 기대하며 사용해봤어요.',
  },
  {
    skillName: 'Axios',
    src: 'https://github.com/axios/axios',
    comment: '대표적인 프론트엔드 HTTP 통신 라이브러리여서 필수로 공부해봤어요.',
  },
  { skillName: 'Zustand', src: 'https://github.com/pmndrs/zustand', comment: '리덕스보다 가볍고 간단해서 좋았어요.' },
  { skillName: 'Emotion', src: 'https://emotion.sh/', comment: 'CSS-in-JS 라이브러리로서 사용해봤어요.' },
  { skillName: 'Node.js', src: 'https://nodejs.org/', comment: '백엔드도 해볼까..?' },
  { skillName: 'Framer-Motion', src: 'https://www.framer.com/motion/', comment: '애니메이션을 쉽게 구현할 수 있어요.' },
  { skillName: 'Recoil', src: 'https://recoiljs.org/', comment: '전역상태관리를 위해서 사용해봤어요.' },
  { skillName: 'Swagger', src: 'https://swagger.io/', comment: 'API 문서를 쉽게 볼 수 있었어요.' },
  {
    skillName: 'PWA',
    src: 'https://web.dev/progressive-web-apps/',
    comment: '트위터에서 사용해봤다고 해서 관심을 가졌어요.',
  },
  { skillName: 'Prettier', src: 'https://prettier.io/', comment: '코드를 예쁘게 만들어줘서 좋았어요.' },
  { skillName: 'Core-js', src: 'https://github.com/zloirock/core-js', comment: '폴리필을 쉽게 사용할 수 있었어요.' },
  { skillName: 'Git', src: 'https://git-scm.com/', comment: '버전관리를 위해서 사용해봤어요.' },
  { skillName: 'EsLint', src: 'https://eslint.org/', comment: '오류를 사전에 검사하고 안티패턴을 찾아줘서 좋았어요.' },
  { skillName: 'CommitLint', src: 'https://commitlint.js.org/#/', comment: '커밋메시지를 검사해줘서 좋았어요.' },
  { skillName: 'Husky', src: 'https://typicode.github.io/husky/#/', comment: 'Git Hooks를 쉽게 사용할 수 있었어요.' },
  { skillName: 'Vite', src: 'https://vitejs.dev/', comment: '웹팩보다 빠르고 간단해서 좋았어요.' },
  {
    skillName: 'Lint-Staged',
    src: 'https://github.com/okonet/lint-staged',
    comment: '스테이징된 파일만 검사해줘서 좋았어요.',
  },
  { skillName: 'Babel', src: 'https://babeljs.io/', comment: '최신 문법을 사용할 수 있었어요.' },
] as const;

export const Second = () => {
  return (
    <ColorSection color="#5D5DA8">
      <div>
        <Grid container justifyContent="center" sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={6}>
            <Typography component="h1" variant="h1">
              기술스택
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid container gap="8px">
              {skillList.map(({ skillName, src, comment }) => {
                return (
                  <Tooltip key={skillName} title={<h3>{comment}</h3>} placement="top" arrow>
                    <Button sx={{ color: '#fff', border: '1px solid white' }} href={src} target="_blank">
                      {skillName}
                    </Button>
                  </Tooltip>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ColorSection>
  );
};
