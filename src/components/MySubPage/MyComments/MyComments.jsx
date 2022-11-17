import React from 'react';
import { ReactComponent as Arrow } from 'assets/icons/arrow_angle.svg';
import { CategoryTag, Icon, TextClamp } from 'components/Common';
import { EditDeleteButton } from 'components/MySubPage';
import data from 'data/myComments';
import * as S from './styles';

export const MyComments = () => {
  return (
    <S.ListContainer>
      {data.mycomments.map(({ category, post, comments }, i) => (
        <S.CommentBox key={i}>
          <CategoryTag name={category} />
          <S.PostTitle>
            [<span>{post}</span>]에서 작성한 댓글
          </S.PostTitle>
          <S.CommentList>
            {comments.map((text, i) => (
              <li key={i}>
                <Icon Icon={Arrow} color="#c9c9c9" />
                <TextClamp line={2}>{text}</TextClamp>
                <EditDeleteButton />
              </li>
            ))}
          </S.CommentList>
        </S.CommentBox>
      ))}
    </S.ListContainer>
  );
};
