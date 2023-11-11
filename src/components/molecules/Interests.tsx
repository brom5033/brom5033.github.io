import { Grid, Stack } from '@mui/material';
import { TipsAndUpdates, TagFaces, Settings } from '@mui/icons-material';
import { GlassCard } from '@components/atoms';

const style = {
  w100: {
    width: '100%',
  },
  h2Color: {
    color: '#f7e057',
  },
  iconRightMargin: {
    marginRight: '8px',
  },
  text: {
    color: '#999a9d',
    fontSize: '14px',
  },
} as const;

export const Interests = () => {
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
                인터랙티브 웹 개발
              </h2>
              <p>역동적이고 애니메이션적인 부분을 강조한 웹</p>
              <p>로띠를 공부하고 싶어요</p>
              <p style={style.text}>#부드러운 애니메이션 #역동적이되 한눈에 들어오는 UI # 편안한 UX</p>
            </GlassCard>
          </Stack>
          <Stack>
            <GlassCard>
              <h2 style={style.h2Color}>
                <span style={style.iconRightMargin}>
                  <TagFaces />
                </span>
                UI 디자인 트렌드
              </h2>
              <p>미니멀리즘, 뉴모피즘, 글래스모피즘</p>
              <p>탁월한 사용자 경험, 직관적인 인터페이스</p>
              <p style={style.text}>#사용자 만족도가 서비스 #마이크로 인터랙션 #클레이 모피즘</p>
            </GlassCard>
          </Stack>
          <Stack>
            <GlassCard>
              <h2 style={style.h2Color}>
                <span style={style.iconRightMargin}>
                  <Settings />
                </span>
                OSS 공헌
              </h2>
              <p>발전하고 지식을 나누고 싶어요</p>
              <p>혼자만의 성장이 아닌 모두가 성장 할 수 있는 사회</p>
              <p style={style.text}>#받은만큼 더 베풀기 #행복을 나누면 2배 #자신이 발전해야 그만큼 공헌도 할수있어요</p>
            </GlassCard>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
