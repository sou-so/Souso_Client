import React from 'react';
import { Icon, ProfileImage } from 'components/Common';
import { ReactComponent as comment } from 'assets/icons/comment.svg';
import * as S from './styles';

export const CommentBody = ({ data }) => {
  const { comments } = data;

  return (
    <S.CommentContainer>
      <S.CommentCount>댓글 ({comments.count})</S.CommentCount>
      <S.CommentWrap>
        {comments.contents.length > 0 &&
          comments.contents.map((data, i) => (
            <S.OriginComment key={i}>
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

                <p>{data.time}분 전</p>
              </div>

              {data.re_comment.length > 0 &&
                data.re_comment.map(recomment => (
                  <S.RecommentWrap key={recomment.id}>
                    <S.Recomment>
                      <div className="comment_user">
                        <ProfileImage
                          size={40}
                          url={recomment.user.profile_img}
                        />
                        <p className="nickname">{recomment.user.name}</p>
                      </div>

                      <div className="comment_text">{recomment.text}</div>

                      <div className="comment_footer">
                        <button>
                          <Icon Icon={comment} size={17} />
                          <span>답글쓰기</span>
                        </button>

                        <p>{recomment.time}분 전</p>
                      </div>
                    </S.Recomment>
                  </S.RecommentWrap>
                ))}
            </S.OriginComment>
          ))}
      </S.CommentWrap>
    </S.CommentContainer>
  );
};
