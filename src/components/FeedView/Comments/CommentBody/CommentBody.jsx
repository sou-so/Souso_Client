import React from 'react';
import { useQuery } from 'react-query';
import { comments } from 'api/queries/comment';
import { CommentContents } from '../CommentContents/CommentContents';
import * as S from './styles';

export const CommentBody = ({ postData }) => {
  const { feed_id, comment_count, author } = postData;
  const pageId = 0;
  const { data, isLoading } = useQuery(
    ['comments', { feedId: feed_id, pageId: pageId }],
    comments.list
  );

  return (
    <>
      <S.CommentCount>댓글 ({comment_count})</S.CommentCount>
      {!isLoading && (
        <S.CommentContainer>
          {data.comment.length > 0 &&
            data.comment.map(data => (
              <S.OriginComment key={data.comment_id}>
                <CommentContents contents={data} feedAuthor={author.user_id} />

                {data.reply.length > 0 &&
                  data.reply.map(data => (
                    <S.Recomment key={data.comment_id}>
                      <CommentContents contents={data} />
                    </S.Recomment>
                  ))}
              </S.OriginComment>
            ))}
          {data.comment.length === 0 && (
            <S.NoComment>
              <p>댓글이 아직 없어요!</p>
              <p>가장 먼저 댓글을 달아보세요.</p>
            </S.NoComment>
          )}
        </S.CommentContainer>
      )}
    </>
  );
};
