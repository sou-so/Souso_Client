import React from 'react';
import * as S from './styles';

export const PostLatest = ({ postData, viewPost }) => {
  const { id, user, category, comments, text, thumbnail } = postData;
  console.log(postData);

  return (
    <S.PostLatestItem onClick={() => viewPost(id)}>
      <p>
        {user.name} {user.age}
      </p>
      <p>{category}</p>
      <p>{text}</p>
      <p>댓글 보기 ({comments})</p>
    </S.PostLatestItem>
  );
};
