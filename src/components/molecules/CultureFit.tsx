import type { FC } from 'react';
import { Grid, Stack } from '@mui/material';
import { TipsAndUpdates, TagFaces, Settings } from '@mui/icons-material';
import { GlassCard } from '@components/atoms';

const style = {
  w100: {
    width: '100%',
  },
  iconRightMargin: {
    marginRight: '8px',
  },
  text: {
    color: '#999a9d',
    fontSize: '14px',
  },
  h2Color: {
    color: '#f7e057',
  },
} as const;

export const CultureFit: FC = () => {
  return (
    <Grid container sx={style.w100}>
      <Grid item xs={12} sx={style.w100}>
        <Stack gap={4} sx={style.w100}>
          <Stack>
            <GlassCard>
              <h2 style={style.h2Color}>
                <span style={style.iconRightMargin}>
                  <TipsAndUpdates />
                </span>
                10가지의 기능 보다 중요한건
              </h2>
              <p>사용자들에게 줄 수 있는 임팩트</p>
              <p>가치 중심적 사고방식</p>
              <p style={style.text}>#우선순위 #비교판단 #무엇이 더 중요한지</p>
            </GlassCard>
          </Stack>
          <Stack>
            <GlassCard>
              <h2 style={style.h2Color}>
                <span style={style.iconRightMargin}>
                  <TagFaces />
                </span>
                긍정적인 마인드
              </h2>
              <p>항상 열린 마음으로 상대방의 의사를 존중해요</p>
              <p>모든 구성원은 프로젝트를 성공으로 이끌어가요</p>
              <p style={style.text}>#Naming Rules #유지보수 #규칙준수</p>
            </GlassCard>
          </Stack>
          <Stack>
            <GlassCard>
              <h2 style={style.h2Color}>
                <span style={style.iconRightMargin}>
                  <Settings />
                </span>
                문제 해결
              </h2>
              <p>해결 할 때까지 삽질 할 수 있는</p>
              <p>끈기가 문제를 해결 해줘요</p>
              <p style={style.text}>#해결되면 뿌듯 #이맛에 코딩하지.. #성취감이 원동력</p>
            </GlassCard>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
