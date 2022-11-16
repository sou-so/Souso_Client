import React, { useState } from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as comment } from 'assets/icons/comment.svg';
import * as S from './styles';

export const CommentBody = ({ data }) => {
  const [commentUser, setCommentUser] = useState('');

  return (
    <S.CommentContainer>
      <S.CommentCount>댓글 ({data.comments})</S.CommentCount>
      <S.CommentWrap>
        <S.OriginComment>
          <div className="comment_user">
            <ProfileImage size={40} url={commentUser} />
            <p className="nickname">토끼 세마리</p>
          </div>

          <div className="comment_text">
            카페 찾고있었는데 좋네요! 조만간 한 번 가봐야겠어요~ 추천 디저트
            있나요?
          </div>

          <div className="comment_footer">
            <button>
              <Icon Icon={comment} size={17} />
              <span>답글쓰기</span>
            </button>

            <p>12분 전</p>
          </div>
        </S.OriginComment>
      </S.CommentWrap>
    </S.CommentContainer>
  );
};
