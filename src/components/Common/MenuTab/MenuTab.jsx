import React from 'react';
import * as S from './styles';

export const MenuTab = ({ list, active, setActive }) => {
  return (
    <S.TabList>
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
