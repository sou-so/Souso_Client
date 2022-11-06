import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as AlertIcon } from 'assets/icons/alert.svg';
import { Icon } from 'components/Common';
import * as S from './styles';

const navList = [
  { name: '커뮤니티', linkTo: '/', component: AlertIcon },
  { name: '소소모임', linkTo: '/meetup', component: AlertIcon },
  { name: '채팅', linkTo: '/chats', component: AlertIcon },
  { name: '프로필', linkTo: '/mypage', component: AlertIcon }
];

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <S.NavContainer>
      {navList.map((nav, i) => (
        <S.NavItem key={i}>
          <Link
            to={nav.linkTo}
            className={`menu ${nav.linkTo === pathname ? 'active' : ''}`}
          >
            <Icon Icon={nav.component} />
            <span>{nav.name}</span>
          </Link>
        </S.NavItem>
      ))}
    </S.NavContainer>
  );
};
