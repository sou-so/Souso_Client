import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { feed } from 'api/queries/feed';
import { PageHeader, ScrollContainer } from 'components/Common';
import { CommentBody, CommentForm, ImageSlider } from 'components/FeedView';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import * as S from './styles';

export const FeedViewPage = () => {
  const { postId } = useParams();
  const { data, isLoading, refetch } = useQuery(
    ['feed-detail', { feedId: postId }],
    feed.detail
  );

  return (
    !isLoading && (
      <S.PageContainer>
        <PageHeader backTo="/" title={data.category.category_name} />

        <ScrollContainer>
          <S.ContentSection>
            <PostBodyUser postData={data} view />
            <ImageSlider imgData={data.image_url} />
            <PostFooterBtn postData={data} refetch={refetch} />
          </S.ContentSection>

          <S.CommentSection>
            <CommentBody postData={data} />
          </S.CommentSection>
        </ScrollContainer>

        <CommentForm feedId={postId} />
      </S.PageContainer>
    )
  );
};
