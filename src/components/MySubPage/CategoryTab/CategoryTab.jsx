import React, { useEffect, useState } from 'react';
import { ScrollHorizon } from 'components/Common';
import { category } from 'api/queries/category';
import * as S from './styles';
import { useQuery } from 'react-query';

export const CategoryTab = ({ active, setActive, refetch }) => {
  const { data, isLoading } = useQuery(['category'], category.getList);
  const [categories, setCategories] = useState([]);

  const handleTabClick = async e => {
    await setActive(+e.target.id);
    refetch();
  };

  useEffect(() => {
    if (data) {
      setCategories(
        [{ category_id: 0, category_name: '전체' }].concat(data.category_list)
      );
    }
  }, [data]);

  return (
    <ScrollHorizon margin>
      <S.TabList>
        {!isLoading &&
          categories.map(({ category_name, category_id }) => (
            <li
              key={category_id}
              id={category_id}
              onClick={handleTabClick}
              className={category_id === active ? 'active' : ''}
            >
              {category_name}
            </li>
          ))}
      </S.TabList>
    </ScrollHorizon>
  );
};
