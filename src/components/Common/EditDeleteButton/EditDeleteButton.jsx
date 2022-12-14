import React, { useState } from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Dots } from 'assets/icons/dots.svg';
import { ReactComponent as Edit } from 'assets/icons/pencil.svg';
import { ReactComponent as Delete } from 'assets/icons/bin.svg';
import * as S from './styles';

export const EditDeleteButton = ({ handleEdit, handleDelete }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  return (
    <S.ButtonContainer onClick={handleClick} className="btnWrap">
      <Icon Icon={Dots} size={20} />
      {toggle && (
        <S.Button>
          <li onClick={handleEdit}>
            <Icon Icon={Edit} size={11} color="#fff" />
            수정하기
          </li>
          <li onClick={handleDelete}>
            <Icon Icon={Delete} size={12} color="#fff" />
            삭제하기
          </li>
        </S.Button>
      )}
    </S.ButtonContainer>
  );
};
