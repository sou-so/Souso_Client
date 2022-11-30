import React from 'react';
import { useQuery } from 'react-query';
import { comments } from 'api/queries/comment';
import { CommentContents } from '../CommentContents/CommentContents';
import * as S from './styles';

export const CommentBody = ({ postData }) => {
  const { feed_id, comment_count } = postData;
  const pageId = 0;
  const { data, isLoading } = useQuery(
    ['comments', { feedId: feed_id, pageId: pageId }],
    comments.list
  );

  if (!isLoading) {
    console.log(data);
  }

  return (
    <>
      <S.CommentCount>댓글 ({comment_count})</S.CommentCount>
      {!isLoading && (
        <S.CommentContainer>
          {data.comment.length > 0 &&
            data.comment.map(data => (
              <S.OriginComment key={data.comment_id}>
                <CommentContents contents={data} />

                {data.reply.length > 0 &&
                  data.reply.map(data => (
                    <S.Recomment key={data.comment_id}>
                      <CommentContents contents={data} />
                    </S.Recomment>
                  ))}
              </S.OriginComment>
            ))}
        </S.CommentContainer>
      )}
    </>
  );
};
