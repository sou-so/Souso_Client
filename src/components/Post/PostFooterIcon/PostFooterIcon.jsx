import React from 'react';
import { Icon } from 'components/Common';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Scrap } from 'assets/icons/scrap.svg';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import * as S from './styles';

export const PostFooterIcon = ({ data }) => {
  const { comments, likes, scraps } = data;

  return (
    <S.FooterContainer>
      <S.IconList>
        <li>
          <Icon Icon={Heart} size={12} />
          {likes}
        </li>
        <li>
          <Icon Icon={Comment} size={13} />
          {comments}
        </li>
        <li>
          <Icon Icon={Scrap} size={9} />
          {scraps}
        </li>
      </S.IconList>
    </S.FooterContainer>
  );
};
