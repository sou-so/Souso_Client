import React, { useState } from 'react';
import * as S from './styles';

export const MenuTab = ({ list }) => {
  const [current, setCurrent] = useState(list[0]);
  const isFull = list.length === 2;

  return (
    <S.TabList isFull={isFull}>
      {list.map((name, i) => (
        <li
          key={i}
          id={name}
          onClick={e => setCurrent(e.target.id)}
          className={name === current ? 'active' : ''}
        >
          {name}
        </li>
      ))}
    </S.TabList>
  );
};
