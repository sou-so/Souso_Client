import React from 'react';
import * as S from './styles';

export const PostPopular = ({ postData, viewPost }) => {
  const { id, category, comments, likes, scraps, text, thumbnail } = postData;
  console.log(postData);

  return (
    <S.PostPopularItem onClick={() => viewPost(id)}>
      <div>
        <span>{category}</span>
        <p>{text}</p>
        <span>
          좋아요 {likes} 댓글 {comments} 스크랩 {scraps}
        </span>
      </div>
    </S.PostPopularItem>
  );
};
