import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { category } from 'api/queries/category';
import { ReactComponent as MoreIcon } from 'assets/icons/arrow_b.svg';
import { ReactComponent as Temp } from 'assets/icons/temp.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const Category = ({ more, onClick }) => {
  const [isClosed, setIsClosed] = useState(more);
  const { data, isLoading } = useQuery(['category'], category.getList);

  return (
    <>
      <S.CategoryContainer>
        {!isLoading &&
          data.category_list.map(({ category_name, category_id }) => (
            <li key={category_id} id={category_id} onClick={onClick}>
              <Icon Icon={Temp} />
              <S.Name>{category_name}</S.Name>
            </li>
          ))}
      </S.CategoryContainer>
      {isClosed && !isLoading && data.category_list.length > 8 && (
        <S.MoreButton onClick={() => setIsClosed(false)}>
          더보기 <Icon Icon={MoreIcon} size={14} />
        </S.MoreButton>
      )}
    </>
  );
};
