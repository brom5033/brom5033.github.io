import type { FC } from 'react';
import { ColorSection } from '@components/atoms';
import { Grid, Box, Stack, Typography, Button, Tooltip } from '@mui/material';

const style = {
  yellowBox: {
    backgroundColor: '#f7e057',
    transform: 'rotate(-30deg) translate(-50%, -50%)',
    overflow: 'hidden',
    width: '200%',
    height: '200%',
    position: 'absolute',
    top: '0%',
    left: '-35%',
  },
  grayBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  mAuto: {
    margin: 'auto',
  },
  wFitContent: {
    width: 'fit-content',
  },
  blackButton: {
    color: '#1c1c1c',
    border: '1px solid #1c1c1c',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
  },
  whiteButton: {
    color: 'white',
    border: '1px solid white',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 255, .2)',
  },
} as const;

export const Third: FC = () => {
  return (
    <ColorSection color="#999a9d">
      <Box sx={style.yellowBox} />
      <Grid container sx={style.grayBox}>
        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <img src="/images/zoodiary.jpg" width={250} height={300} style={style.mAuto} />
            <Typography variant="h4" color="#67676a" sx={{ fontWeight: 'bolder' }}>
              Zoodiary
            </Typography>
            <Typography variant="body1" color="#6f6e68">
              반려동물과 함께하는 일상을 공유하기
            </Typography>
            <Stack direction="row" gap="12px" sx={Object.assign({}, style.mAuto, style.wFitContent)}>
              <Tooltip title={<h3>자세한 프로젝트 내용은 readme에 작성했어요</h3>} placement="bottom" arrow>
                <Button sx={style.blackButton} href="https://github.com/brom5033/ZooDiary" target="_blank">
                  깃허브
                </Button>
              </Tooltip>
              <Button
                sx={style.blackButton}
                href="https://gaudy-baryonyx-7e4.notion.site/Zoo-Diary-8ae3a505ff5c47dabbd326e271dc2e29?pvs=4"
                target="_blank"
              >
                노션
              </Button>
              <Button
                sx={style.blackButton}
                href="https://www.figma.com/file/R3RnoAUBlLY1ASy45ME2C8/Zoo-Diary?type=design&t=BtTpILJgZXhtSuPj-6"
                target="_blank"
              >
                피그마
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <img src="/images/rozet.jpg" width={250} height={300} style={style.mAuto} />
            <Typography variant="h4" color="#f7e057" sx={{ fontWeight: 'bolder' }}>
              Rozet
            </Typography>
            <Typography variant="body1" color="#f7e057">
              타로카드로 오늘의 운세 보기
            </Typography>
            <Stack direction="row" gap="12px" sx={Object.assign({}, style.mAuto, style.wFitContent)}>
              <Tooltip title={<h3>자세한 프로젝트 내용은 readme에 작성했어요</h3>} placement="bottom" arrow>
                <Button sx={style.whiteButton} href="https://github.com/brom5033/rozet" target="_blank">
                  깃허브
                </Button>
              </Tooltip>
              <Button
                sx={style.whiteButton}
                href="https://gaudy-baryonyx-7e4.notion.site/Rozet-f430db6ee9044cd7a6c094e11c7edffb?pvs=4"
                target="_blank"
              >
                노션
              </Button>
              <Button
                sx={style.whiteButton}
                href="https://www.figma.com/file/lrJ23tmQquC2itAwnH0pqZ/ROZET?type=design&t=BtTpILJgZXhtSuPj-6"
                target="_blank"
              >
                피그마
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ColorSection>
  );
};
