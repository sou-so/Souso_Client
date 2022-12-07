import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { category } from 'api/queries/category';
import { ReactComponent as MoreIcon } from 'assets/icons/arrow_b.svg';
import { Icon } from 'components/Common';
import { svgs } from './svgs';
import * as S from './styles';

export const Category = ({ more, linkTo, onClick }) => {
  const [isClosed, setIsClosed] = useState(more);
  const { data, isLoading } = useQuery(['category'], category.getList);

  return (
    <>
      <S.CategoryContainer>
        {!isLoading &&
          data.category_list.map(({ category_name, category_id }) => (
            <Link
              key={category_id}
              to={linkTo ? `feed/list/${category_id}` : '#'}
              state={{ category_name, category_id }}
            >
              <li id={category_id} onClick={onClick}>
                <Icon Icon={svgs[category_id - 1]} stroke="#fff" size={25} />
                <S.Name>{category_name}</S.Name>
              </li>
            </Link>
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
