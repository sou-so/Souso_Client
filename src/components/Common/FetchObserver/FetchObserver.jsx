import { useObserver } from 'hooks/useObserver';
import loading from 'assets/images/loading.gif';
import styled from 'styled-components';

export const FetchObserver = ({ data, fetchNextPage, isFetching }) => {
  const { ObserverComponent } = useObserver(data, fetchNextPage);

  return (
    <Container>
      {/* 스크롤이 Observer에 도착하면 다음 페이지 fetch */}
      <ObserverComponent />
      {isFetching && <img src={loading} alt="loading" />}
    </Container>
  );
};

const Container = styled.div`
  margin: 35px 0;
  text-align: center;
  img {
    width: 30px;
  }
`;
