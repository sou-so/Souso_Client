import React from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import { PostBodyUser, PostFooterBtn } from 'components/Post';
import { ImageSlider } from 'components/FeedView';
import postData from 'data/posts';
import * as S from './styles';

export const FeedViewPage = () => {
  const data = postData.latest[1];
  // console.log(data);

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={data.category} />
      <ScrollContainer>
        <S.ContentSection>
          <PostBodyUser data={data} view />
          <ImageSlider data={data} />
          <PostFooterBtn data={data} />
        </S.ContentSection>

        <S.CommentSection>
          <div>댓글</div>
        </S.CommentSection>
      </ScrollContainer>
    </S.PageContainer>
  );
};
