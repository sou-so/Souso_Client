import React from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader, ScrollContainer } from 'components/Common';
import { CommentBody, CommentForm, ImageSlider } from 'components/FeedView';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import postData from 'data/posts';
import * as S from './styles';

export const FeedViewPage = () => {
  const { id } = useParams();
  const data = postData.latest.filter(data => data.id === Number(id))[0];

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={data.category} />
      <ScrollContainer>
        <S.ContentSection>
          <PostBodyUser data={data} />
          <ImageSlider data={data} />
          <PostFooterBtn data={data} />
        </S.ContentSection>

        <S.CommentSection>
          <CommentBody data={data} />
        </S.CommentSection>
      </ScrollContainer>

      <CommentForm data={data} />
    </S.PageContainer>
  );
};
