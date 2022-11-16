import React, { useState } from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as comment } from 'assets/icons/comment.svg';
import * as S from './styles';

export const CommentBody = ({ data, comments }) => {
  return (
    <S.CommentContainer>
      <S.CommentCount>댓글 ({data.comments})</S.CommentCount>
      <S.CommentWrap>
        {comments.length > 0 &&
          comments.map(data => (
            <S.OriginComment key={data.id}>
              <div className="comment_user">
                <ProfileImage size={40} url={data.user.profile_img} />
                <p className="nickname">{data.user.name}</p>
              </div>

              <div className="comment_text">{data.text}</div>

              <div className="comment_footer">
                <button>
                  <Icon Icon={comment} size={17} />
                  <span>답글쓰기</span>
                </button>

                <p>12분 전</p>
              </div>
            </S.OriginComment>
          ))}
      </S.CommentWrap>
    </S.CommentContainer>
  );
};
