import React from 'react';
import { Skeleton } from './Skeleton';
import styled from 'styled-components';

export const SkeletonCategory = () => {
  return (
    <Container>
      {[...Array(8)].map((_, i) => (
        <div key={i}>
          <Skeleton type="circle" size={40} />
          <Skeleton type="text" width={40} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px 30px;
  flex-wrap: wrap;
  padding: 0 15px;
  height: 120px;
  > div {
    margin: 0 auto;
  }
`;
