import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { feed } from 'api/queries/feed';
import { PageHeader, ScrollContainer } from 'components/Common';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import * as C from 'components/FeedView';
import * as S from './styles';

export const FeedViewPage = () => {
  const { postId } = useParams();
  const { data, isLoading, refetch } = useQuery(
    ['feed-detail', { feedId: postId }],
    feed.detail
  );

  const [isReplying, setIsReplying] = useState(false);
  const [replyId, setReplyId] = useState('');
  const [replyNickname, setReplyNickname] = useState('');
  console.log(replyId);

  return (
    !isLoading && (
      <S.PageContainer>
        <PageHeader backTo="/" title={data.category.category_name} />

        <ScrollContainer>
          <S.ContentSection>
            <PostBodyUser postData={data} view />
            <C.ImageSlider imgData={data.image_url} />
            <PostFooterBtn postData={data} refetch={refetch} />
          </S.ContentSection>

          <S.CommentSection>
            <C.CommentBody
              postData={data}
              setIsReplying={setIsReplying}
              setReplyId={setReplyId}
              setReplyNickname={setReplyNickname}
            />
          </S.CommentSection>
        </ScrollContainer>

        <S.FormContainer>
          <S.ReplyDesc className={`${isReplying ? 'reply' : ''}`}>
            {isReplying && (
              <span>{replyNickname}님에게 답글을 작성 중입니다.</span>
            )}
          </S.ReplyDesc>
          {!isReplying ? (
            <C.CommentForm feedId={postId} />
          ) : (
            <C.ReplyForm
              isReplying={isReplying}
              setIsReplying={setIsReplying}
              replyId={replyId}
              replyNickname={replyNickname}
            />
          )}
        </S.FormContainer>
      </S.PageContainer>
    )
  );
};
