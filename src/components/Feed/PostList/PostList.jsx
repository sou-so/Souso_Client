import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThumbBottom, ThumbRight } from 'components/Post';
import posts from 'data/posts';
import * as S from './styles';

export const PostList = () => {
  const [current, setCurrent] = useState('최신글');
  const navigate = useNavigate();

  const redirect = id => {
    navigate(`/feed/${id}`);
  };

  return (
    <S.PostListContainer>
      <S.Tabs>
        {['인기글', '최신글'].map((name, i) => (
          <button
            key={i}
            id={name}
            onClick={e => setCurrent(e.target.id)}
            className={name === current ? 'active' : ''}
          >
            {name}
          </button>
        ))}
      </S.Tabs>
      <S.PostLists>
        {current === '인기글'
          ? posts.popular.map(post => (
              <ThumbRight key={post.id} postData={post} redirect={redirect} />
            ))
          : posts.latest.map(post => (
              <ThumbBottom key={post.id} postData={post} redirect={redirect} />
            ))}
      </S.PostLists>
    </S.PostListContainer>
  );
};
