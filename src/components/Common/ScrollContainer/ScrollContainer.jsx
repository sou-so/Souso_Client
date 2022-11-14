import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import * as S from './styles';

export const ScrollContainer = ({ children, padding }) => {
  return (
    <S.Scrollbar padding={padding}>
      <Scrollbars autoHide>{children}</Scrollbars>
    </S.Scrollbar>
  );
};
