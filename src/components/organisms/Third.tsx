import type { FC } from 'react';
import { Grid, Box, Stack, Typography, Button, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { ColorSection } from '@components/atoms';

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
    margin: 'auto',
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
    <ColorSection color="#999a9d" mobileDoubleHeight>
      <Box sx={style.yellowBox} />
      <Grid container sx={style.grayBox} rowSpacing={14}>
        <Grid item xs={12} md={6}>
          <Stack gap="12px">
            <picture>
              <source srcSet="/images/zoodiary.webp" type="image/webp" />
              <motion.img
                src="/images/zoodiary.jpg"
                alt="zoodiary"
                width={250}
                height={300}
                style={style.mAuto}
                initial={{ borderRadius: 15, border: '0px' }}
                whileInView={{ border: '10px solid #999a9d' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </picture>
            <Typography component="h3" variant="h4" color="#67676a" sx={{ fontWeight: 'bolder' }}>
              Zoodiary
            </Typography>
            <Typography variant="body1" color="#6f6e68">
              반려동물과 함께하는 일상을 공유하기
            </Typography>
            <Stack direction="row" gap="12px" sx={Object.assign({}, style.mAuto, style.wFitContent)}>
              <Button
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                sx={style.blackButton}
                href="http://zoodiary.kro.kr/"
                target="_blank"
              >
                바로가기
              </Button>
              <Tooltip title={<h3>자세한 프로젝트 내용은 readme에 작성했어요</h3>} placement="bottom" arrow>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.1 }}
                  sx={style.blackButton}
                  href="https://github.com/brom5033/ZooDiary"
                  target="_blank"
                >
                  깃허브
                </Button>
              </Tooltip>
              <Button
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                sx={style.blackButton}
                href="https://gaudy-baryonyx-7e4.notion.site/Zoo-Diary-8ae3a505ff5c47dabbd326e271dc2e29?pvs=4"
                target="_blank"
              >
                노션
              </Button>
              <Button
                component={motion.a}
                whileHover={{ scale: 1.1 }}
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
            <picture>
              <source srcSet="/images/rozet.webp" type="image/webp" />
              <motion.img
                src="/images/rozet.jpg"
                alt="rozet"
                width={250}
                height={300}
                style={style.mAuto}
                initial={{ borderRadius: 15, border: '0px' }}
                whileInView={{ border: '10px solid #f7e057' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </picture>
            <Typography component="h3" variant="h4" color="#f7e057" sx={{ fontWeight: 'bolder' }}>
              Rozet
            </Typography>
            <Typography variant="body1" sx={{ color: { xs: '#fff', sm: '#f7e057' } }}>
              타로카드로 오늘의 운세 보기
            </Typography>
            <Stack direction="row" gap="12px" sx={Object.assign({}, style.mAuto, style.wFitContent)}>
              <Button
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                sx={style.whiteButton}
                href="https://brom5033.github.io/rozet/"
                target="_blank"
              >
                바로가기
              </Button>
              <Tooltip title={<h3>자세한 프로젝트 내용은 readme에 작성했어요</h3>} placement="bottom" arrow>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.1 }}
                  sx={style.whiteButton}
                  href="https://github.com/brom5033/rozet"
                  target="_blank"
                >
                  깃허브
                </Button>
              </Tooltip>
              <Button
                component={motion.a}
                whileHover={{ scale: 1.1 }}
                sx={style.whiteButton}
                href="https://gaudy-baryonyx-7e4.notion.site/Rozet-f430db6ee9044cd7a6c094e11c7edffb?pvs=4"
                target="_blank"
              >
                노션
              </Button>
              <Button
                component={motion.a}
                whileHover={{ scale: 1.1 }}
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
