import { ColorSection } from '@components/atoms/ColorSection';
import { Grid, Stack, Button } from '@mui/material';

const style = {
  marginText: {
    margin: '0px 8px',
  },
  itemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const Third = () => {
  return (
    <ColorSection color="#f7e057">
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <Stack sx={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
            <Stack
              sx={{
                height: '400px',
                width: '300px',
                borderRadius: '18px',
                border: '3px solid rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/images/zoodiary.jpg"
                alt="zoodiary"
                width={294}
                height={394}
                style={{ borderRadius: '15px' }}
              />
            </Stack>
            <Stack
              sx={{
                height: '400px',
                width: '300px',
                marginTop: '30px',
                borderRadius: '18px',
                border: '3px solid rgba(0,0,0,0.2)',
              }}
            >
              <img src="/images/rozet.jpg" alt="rozet" width={294} height={394} style={{ borderRadius: '15px' }} />
            </Stack>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: '#999a9d', height: '100%', display: 'flex', alignItems: 'center' }}
        >
          <Stack spacing={1}>
            <Stack spacing={1} sx={style.itemCenter}>
              <Button
                sx={{ color: '#fff', border: '1px solid white' }}
                href="https://brom5033.github.io/rozet/"
                target="_blank"
              >
                ZooDiary
              </Button>
              <div style={style.marginText}>
                <p>
                  zoodiary 소개: 반려동물의 하루를 기록하기 위한 일기장이에요. 반려동물의 하루를 기록하고, 다른 사람들과
                  공유하며 추천을 누를 수 있어요.
                </p>
                <p>
                  제작하게 된 이유: 막연하게 무언가를 개발 하고 싶었지만 시중에 많이 나와있는 앱들을 개발하고 개선점을
                  보완하여도 제가 만든 프로젝트가 과연 대중화 되있는 앱보다 활용도가 높을지 고민해봤어요. 그러다 제가
                  키우는 강아지를 보며 다른 사람들과도 함께보면 좋지않을까? 하는 생각에 앱을 찾아봤는데 반려동물 일기는
                  없기에 개발을 결심하게 됐어요.
                </p>
                <p>
                  기술스택 선정 이유: React를 사용 한 이유는 넓은 커뮤니티와 다양한 라이브러리를 사용할 수 있기
                  때문이에요. 또한 완성도 높은 결과물을 위해 TypeScript 도 함께 사용했어요. 그리고 휴대폰 앱으로도
                  사용할 수 있게 PWA를 적용 시켰고, pc화면에서의 대응도 가능 하도록 반응형으로 제작했어요.
                </p>
                <p>
                  느낀점: 처음으로 백엔드개발자와의 협업을 경험했어요. 중간에 cols오류 문서작성오류 등 어려움이 있었지만
                  서로 소통하고 문제점을 개선하여 프로젝트를 완성 시켰어요.
                </p>
              </div>
            </Stack>
            <Stack spacing={1} sx={style.itemCenter}>
              <Button
                sx={{ color: '#fff', border: '1px solid white' }}
                href="https://brom5033.github.io/rozet/"
                target="_blank"
              >
                Rozet
              </Button>

              <p style={{ margin: '0px 8px', marginTop: '17px' }}>
                Rozet 소개: 귀여운 토끼 타로카드를 이용하여 하루 운세를 볼 수 있는 웹사이트에요. 카드를 뽑고 카드의
                의미를 확인할 수 있어요.
              </p>
              <p style={style.marginText}>
                제작하게된 이유: 한동안 코로나로 인해 집에서 머무는 시간이 많아졌어요. 그러다 타로카드 라는 것을 알게
                되었고 이 카드로 하루 운세를 볼 수 있다는 점이 좋았지만 카드를 구매하고 싶지 않았어요. 그래서 카드를
                구매하지 않고도 카드를 볼 수 있는 웹사이트를 만들어 보았어요.
              </p>
              <p style={style.marginText}>
                기술스택 선정이유: React와 JavaScript를 사용한 이유는 사이드 프로젝트에서 직접 기술을 사용 해보고
                싶었고, 또한 React를 사용하면서 더 많은 것을 배울 수 있을 것 같아서 선택했어요. TS를 사용하지 않은
                이유는 JS에 경험이 좀 더 필요하다고 느꼈기 때문이에요.
              </p>
              <p style={style.marginText}>
                느낀점: 타로카드 특성 상 카드의 그림과 해설 데이터가 많이 필요했고 이 문제를 해결하기 위해 AI 주도
                개발을 진행했어요. 카드 이미지는 스테이블디퓨전에서 모델을 사용하여 만들었고, 카드의 해설을 Chat GPT를
                사용하여 객체형태로 데이터를 만들었어요. 첫 사이드 프로젝트였어서 많이 아쉬웠지만, 앞으로 더 많은 것을
                배우고 더 좋은 결과물을 만들어 보고 싶어요.
              </p>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ColorSection>
  );
};
