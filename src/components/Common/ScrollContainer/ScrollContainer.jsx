import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import * as S from './styles';

export const ScrollContainer = ({ children }) => {
  return (
    <S.Scrollbar>
      <Scrollbars autoHide>{children}</Scrollbars>
    </S.Scrollbar>
  );
};
