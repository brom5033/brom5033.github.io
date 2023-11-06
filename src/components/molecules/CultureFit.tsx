import { Grid, Stack } from '@mui/material';
import { GlassCard } from '@components/atoms/GlassCard';
import { TipsAndUpdates, TagFaces, Settings } from '@mui/icons-material';

export const CultureFit = () => {
  return (
    <Grid container sx={{ width: '100%' }}>
      <Grid item xs={12} sx={{ width: '100%' }}>
        <Stack gap={4} sx={{ width: '100%' }}>
          <Stack>
            <GlassCard>
              <h2 style={{ color: '#f7e057' }}>
                <span style={{ marginRight: '8px' }}>
                  <TipsAndUpdates />
                </span>
                10가지의 기능 보다 중요한건
              </h2>
              <p>사용자들에게 줄 수 있는 임팩트</p>
              <p>가치 중심적 사고방식</p>
              <p style={{ color: '#999a9d', fontSize: '14px' }}>#우선순위 #비교판단 #무엇이 더 중요한지</p>
            </GlassCard>
          </Stack>
          <Stack>
            <GlassCard>
              <h2 style={{ color: '#f7e057' }}>
                <span style={{ marginRight: '8px' }}>
                  <TagFaces />
                </span>
                긍정적인 마인드
              </h2>
              <p>항상 열린 마음으로 상대방의 의사를 존중해요</p>
              <p>모든 구성원은 프로젝트를 성공으로 이끌어가요</p>
              <p style={{ color: '#999a9d', fontSize: '14px' }}>#Naming Rules #유지보수 #규칙준수</p>
            </GlassCard>
          </Stack>
          <Stack>
            <GlassCard>
              <h2 style={{ color: '#f7e057' }}>
                <span style={{ marginRight: '8px' }}>
                  <Settings />
                </span>
                문제 해결
              </h2>
              <p>해결 할 때까지 삽질 할 수 있는</p>
              <p>끈기가 문제를 해결 해줘요</p>
              <p style={{ color: '#999a9d', fontSize: '14px' }}>#해결되면 뿌듯 #이맛에 코딩하지.. #성취감이 원동력</p>
            </GlassCard>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
