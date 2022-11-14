import React from 'react';
import { PageHeader, ScrollContainer } from 'components/Common';
import * as S from './styles';
import * as C from 'components/Post';
import * as V from 'components/FeedView';
import postData from 'data/posts';

export const FeedViewPage = () => {
  const data = postData.latest[1];
  // console.log(data);

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={data.category} />
      <ScrollContainer>
        <S.ViewContainer>
          <C.PostBodyUser data={data} />
          <V.ImageSlider data={data} />
          <C.PostFooterBtn data={data} />
        </S.ViewContainer>
      </ScrollContainer>
    </S.PageContainer>
  );
};
