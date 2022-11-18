import React from 'react';
import * as C from 'components/MyPage';
import { ScrollContainer } from 'components/Common';
import { ReactComponent as Ic1 } from 'assets/icons/pencil.svg';
import { ReactComponent as Ic2 } from 'assets/icons/bookmark_star.svg';
import { ReactComponent as Ic3 } from 'assets/icons/peoples.svg';
import data from 'data/user';
import * as S from './styles';

export const MyPage = () => {
  return (
    <ScrollContainer>
      <S.PageContainer>
        <S.MyDataSection>
          <S.EditButton>프로필 편집</S.EditButton>
          <C.UserData data={data.user} />
          <S.LinkBoxWrap>
            <C.LinkBox
              name="나의 글"
              icon={Ic1}
              myposts={{ post: 2, comment: 4 }}
              linkTo="posts"
            />
            <C.LinkBox name="보관함" linkTo="scraps" icon={Ic2} scraps={17} />
            <C.LinkBox name="소소모임" linkTo="meets" icon={Ic3} meets={2} />
          </S.LinkBoxWrap>
        </S.MyDataSection>

        <S.MeetupSection>
          <h2>이번주 소소모임 일정</h2>
          <C.ComingMeetup />
        </S.MeetupSection>
        <C.LogoutButton />
      </S.PageContainer>
    </ScrollContainer>
  );
};
