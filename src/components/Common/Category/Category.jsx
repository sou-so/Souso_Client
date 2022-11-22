import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { category } from 'utils/api/categoryAPI';
import { ReactComponent as MoreIcon } from 'assets/icons/arrow_b.svg';
import { ReactComponent as Temp } from 'assets/icons/temp.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

const categories = [
  '동네질문',
  '동네소식',
  '취미생활',
  '동네맛집',
  '일상',
  '분실센터',
  '해주세요',
  '사건사고'
];

export const Category = ({ more }) => {
  const [isClosed, setIsClosed] = useState(more);

  const { data } = useQuery('category', category.getList);

  const categoryList = isClosed
    ? categories.slice(0, 8)
    : categories.concat(categories);

  const openCategory = () => setIsClosed(false);

  return (
    <>
      <S.CategoryContainer>
        {categoryList.map((category, i) => (
          <li key={i}>
            <Icon Icon={Temp} />
            <span>{category}</span>
          </li>
        ))}
      </S.CategoryContainer>
      {isClosed && (
        <S.MoreButton onClick={openCategory}>
          더보기 <Icon Icon={MoreIcon} size={14} />
        </S.MoreButton>
      )}
    </>
  );
};
