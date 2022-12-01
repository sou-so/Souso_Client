import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { category } from 'api/queries/category';
import { ReactComponent as MoreIcon } from 'assets/icons/arrow_b.svg';
import { ReactComponent as Temp } from 'assets/icons/temp.svg';
import { ReactComponent as Question } from 'assets/icons/category/question_circle.svg';
import { ReactComponent as Clock } from 'assets/icons/category/clock.svg';
import { ReactComponent as Bulb } from 'assets/icons/category/bulb.svg';
import { ReactComponent as Map } from 'assets/icons/category/map.svg';
import { ReactComponent as Puzzle } from 'assets/icons/category/puzzle.svg';
import { ReactComponent as Lost } from 'assets/icons/category/lost.svg';
import { ReactComponent as Lightning } from 'assets/icons/category/lightning.svg';
import { ReactComponent as Fire } from 'assets/icons/category/fire.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

export const Category = ({ more, linkTo, onClick }) => {
  const [isClosed, setIsClosed] = useState(more);
  const { data, isLoading } = useQuery(['category'], category.getList);

  const svgs = [Question, Clock, Bulb, Map, Puzzle, Lost, Lightning, Fire];

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
                <S.IconContainer>
                  <Icon
                    Icon={svgs[category_id - 1]}
                    stroke={'#fff'}
                    size={30}
                  />
                  <Icon Icon={Temp} />
                </S.IconContainer>
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
