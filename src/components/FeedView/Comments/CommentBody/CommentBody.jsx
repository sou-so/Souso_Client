import React from 'react';
import { CommentContents } from '../CommentContents/CommentContents';
import * as S from './styles';

export const CommentBody = ({ data }) => {
  const { comments } = data;

  return (
    <>
      <S.CommentCount>댓글 ({comments.count})</S.CommentCount>
      <S.CommentContainer>
        {comments.contents.length > 0 &&
          comments.contents.map((data, i) => (
            <S.OriginComment key={i}>
              <CommentContents contents={data} />

              {data.re_comment.length > 0 &&
                data.re_comment.map(recomment => (
                  <S.Recomment key={recomment.id}>
                    <CommentContents contents={recomment} />
                  </S.Recomment>
                ))}
            </S.OriginComment>
          ))}
      </S.CommentContainer>
    </>
  );
};
