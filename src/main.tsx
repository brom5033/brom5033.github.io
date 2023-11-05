import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/fonts/font.css';
import { Title } from '@components/atoms/Title';
import { SubText } from '@components/atoms/SubText';
import { DetailText } from '@components/atoms/DetailText';
import { BoxBorder } from '@components/atoms/BoxBorder';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <div style={{ backgroundColor: '#35353f', height: '3000px' }}>
        <div>
          <Title>안녕하세요 프론트엔드 </Title>
        </div>
        <BoxBorder>
          <SubText>깃허브주소</SubText>
          <SubText>노션주소</SubText>
          <SubText>피그마주소</SubText>
        </BoxBorder>
        <DetailText>
          상세텍스트입니다상세텍스트입니다상세 텍스트입니다상세텍스 트입니다상세텍스트 입 니 다 상세 텍스트입니 다상 세
          텍스트입 니다
        </DetailText>
        <BoxBorder style={{ width: '300px', height: '300px' }}>
          <div style={{ borderRadius: '50px', width: '300px' }}>
            <img src="./images/image.jpg" alt="" height={300} width={300} />
          </div>
        </BoxBorder>
      </div>
    </div>
  </React.StrictMode>,
);
