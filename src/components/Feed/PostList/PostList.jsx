import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostLatest, PostPopular } from 'components/Feed';
import posts from 'data/posts';
import * as S from './styles';

export const PostList = () => {
  const [current, setCurrent] = useState('최신글');
  const navigate = useNavigate();

  const activeTab = e => setCurrent(e.target.id);
  const viewPost = id => navigate(`/feed/${id}`);

  return (
    <S.PostListContainer>
      <S.Tabs>
        {['인기글', '최신글'].map((name, i) => (
          <button
            key={i}
            id={name}
            onClick={activeTab}
            className={name === current ? 'active' : ''}
          >
            {name}
          </button>
        ))}
      </S.Tabs>
      <S.PostLists>
        {current === '인기글'
          ? posts.popular.map(post => (
              <PostPopular key={post.id} postData={post} viewPost={viewPost} />
            ))
          : posts.latest.map(post => (
              <PostLatest key={post.id} postData={post} viewPost={viewPost} />
            ))}
      </S.PostLists>
    </S.PostListContainer>
  );
};
