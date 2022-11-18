import React from 'react';
import * as S from './styles';

export const MenuTab = ({ list, active, setActive }) => {
  const isFull = list.length === 2;

  return (
    <S.TabList isFull={isFull}>
      {list.map((name, i) => (
        <li
          key={i}
          id={name}
          onClick={e => setActive(e.target.id)}
          className={name === active ? 'active' : ''}
        >
          {name}
        </li>
      ))}
    </S.TabList>
  );
};
