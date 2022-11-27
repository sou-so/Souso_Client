import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ThumbBottom, ThumbRight } from 'components/Post';
import { feed } from 'api/queries/feed';
import * as S from './styles';

export const PostList = () => {
  const [current, setCurrent] = useState('최신글');
  const { data, isLoading } = useQuery(['feed'], feed.list);

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
        {/* TODO -- 로딩될 때 Skeleton UI 만들기 */}
        {/* TODO -- 게시글 없을 때 empty 페이지 UI */}
        {!isLoading &&
          (current === '인기글'
            ? data.feed_list.map(post => (
                <ThumbRight key={post.feed_id} postData={post} />
              ))
            : data.feed_list.map(post => (
                <ThumbBottom key={post.feed_id} postData={post} />
              )))}
      </S.PostLists>
    </S.PostListContainer>
  );
};
