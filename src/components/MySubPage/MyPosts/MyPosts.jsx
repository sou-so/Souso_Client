import React from 'react';
import { ThumbTop } from 'components/Post';
import posts from 'data/posts';
import * as S from './styles';
import { EditDeleteButton } from '..';

export const MyPosts = () => {
  return (
    <S.ListContainer>
      {posts.popular.map(post => (
        <ThumbTop key={post.id} postData={post}>
          <EditDeleteButton />
        </ThumbTop>
      ))}
    </S.ListContainer>
  );
};
