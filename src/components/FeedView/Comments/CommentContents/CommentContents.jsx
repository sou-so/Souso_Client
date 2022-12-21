import React, { useState } from 'react';

import { Icon } from 'components/Common';
import { ReactComponent as Comment } from 'assets/icons/comment.svg';
import * as C from 'components/FeedView';
import * as S from './styles';

export const CommentContents = ({
  contents,
  feedAuthor,
  setIsReplying,
  setReplyId,
  setReplyNickname,
  reply
}) => {
  const { author, content, comment_id } = contents;

  const [isEditing, setIsEditing] = useState(false);

  // 답글버튼 클릭시 정보전달
  const handleReplying = e => {
    e.preventDefault();
    setIsReplying(true);
    setReplyId(comment_id);
    setReplyNickname(author.nickname);
  };

  return (
    <>
      <C.CommentHeader
        contents={contents}
        feedAuthor={feedAuthor}
        setIsEditing={setIsEditing}
      />

      <S.CommentText>
        {isEditing ? (
          <C.EditForm
            content={content}
            commentId={comment_id}
            setIsEditing={setIsEditing}
          />
        ) : (
          <S.TextBox>{content}</S.TextBox>
        )}
      </S.CommentText>

      <S.CommentFooter>
        {!reply && (
          <button>
            <Icon Icon={Comment} size={17} />
            <span onClick={handleReplying} id={comment_id}>
              답글쓰기
            </span>
          </button>
        )}
      </S.CommentFooter>
    </>
  );
};
