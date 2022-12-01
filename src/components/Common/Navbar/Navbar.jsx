import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Nav1 } from 'assets/icons/nav/nav1.svg';
import { ReactComponent as Nav2 } from 'assets/icons/nav/nav2.svg';
import { ReactComponent as Nav3 } from 'assets/icons/nav/nav3.svg';
import { ReactComponent as Nav4 } from 'assets/icons/nav/nav4.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

const navList = [
  { name: '소식', linkTo: '/feed', icon: Nav1 },
  { name: '모임', linkTo: '/meetup', icon: Nav2 },
  { name: '채팅', linkTo: '/chats', icon: Nav3 },
  { name: '프로필', linkTo: '/mypage', icon: Nav4 }
];

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <S.NavContainer>
      {navList.map((nav, i) => (
        <S.NavItem key={i}>
          <S.NavLink
            to={nav.linkTo}
            className={nav.linkTo === pathname ? 'active' : ''}
          >
            <S.Icons>
              <Icon Icon={nav.icon} size={20} />
              <Icon Icon={nav.icon} size={20} />
            </S.Icons>
            <span>{nav.name}</span>
          </S.NavLink>
        </S.NavItem>
      ))}
    </S.NavContainer>
  );
};
