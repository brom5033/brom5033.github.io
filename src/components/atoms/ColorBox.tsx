import { type FC, type PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const Box = styled.div`
  width: 100%;
  heigth: auto;
`;

interface Props extends PropsWithChildren {
  purple?: boolean;
  border?: boolean;
}

export const ColorBox: FC<Props> = ({ children, purple, border }) => {
  const style = {
    boxColor: {
      backgroundColor: purple ? '#DED0F2' : 'white',
      border: border ? '1px solid #DED0F2' : '',
    },
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Box style={style.boxColor}>{children}</Box>;
};
