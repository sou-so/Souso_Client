import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ScrollContainer } from 'components/Common';
import { ReactComponent as Ic1 } from 'assets/icons/pencil.svg';
import { ReactComponent as Ic2 } from 'assets/icons/bookmark_star.svg';
import { ReactComponent as Ic3 } from 'assets/icons/peoples.svg';
import { user } from 'api/queries/user';
import meets from 'data/comingmeets';
import * as C from 'components/MyPage';
import * as S from './styles';

export const MyPage = () => {
  const { data, isLoading } = useQuery(['user'], user.getProfile);

  console.log(data);
  return (
    <ScrollContainer>
      <S.PageContainer>
        <S.MyDataSection>
          <Link to="edit">
            <S.EditButton>프로필 편집</S.EditButton>
          </Link>
          <C.UserData data={!isLoading && data} />
          <S.LinkBoxWrap>
            <C.LinkBox
              name="나의 글"
              icon={Ic1}
              myposts={{
                post: !isLoading && data.feed_count,
                comment: !isLoading && data.comment_count
              }}
              linkTo="posts"
            />
            <C.LinkBox
              name="보관함"
              linkTo="scraps"
              icon={Ic2}
              bookmarks={!isLoading && data.bookmark_count}
            />
            <C.LinkBox name="소소모임" linkTo="meets" icon={Ic3} meets={7} />
          </S.LinkBoxWrap>
        </S.MyDataSection>

        <S.MeetupSection>
          <h2>이번주 소소모임 일정</h2>
          <S.MeetList>
            {meets.meetups.map((meet, i) => (
              <C.ComingMeetup key={i} meet={meet} />
            ))}
          </S.MeetList>
        </S.MeetupSection>
        <C.LogoutButton />
      </S.PageContainer>
    </ScrollContainer>
  );
};
