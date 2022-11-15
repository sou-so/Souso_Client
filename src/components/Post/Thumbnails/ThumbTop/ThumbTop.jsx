import React, { useState } from 'react';
import { PostBody, PostFooterIcon } from 'components/Post';
import { EditDeleteButton } from 'components/MySubPage';
import { Icon } from 'components/Common';
import { ReactComponent as Dots } from 'assets/icons/dots.svg';
import * as S from './styles';

export const ThumbTop = ({ postData, myPost }) => {
  const [toggle, setToggle] = useState(false);
  const { thumbnail } = postData;

  return (
    <S.PostContainer>
      {thumbnail.length > 0 && <S.Thumbnail src={thumbnail[0]} alt="" />}
      <S.ContentWrap>
        {myPost && (
          <S.ButtonWrap onClick={() => setToggle(!toggle)}>
            <Icon Icon={Dots} size={20} />
            {toggle && <EditDeleteButton />}
          </S.ButtonWrap>
        )}
        <PostBody data={postData} />
        <PostFooterIcon data={postData} hasDate />
      </S.ContentWrap>
    </S.PostContainer>
  );
};
