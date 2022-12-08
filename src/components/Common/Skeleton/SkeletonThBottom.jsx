import React from 'react';
import { Skeleton } from './Skeleton';
import styled from 'styled-components';

export const SkeletonThBottom = () => {
  return (
    <Container>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="item">
          <div className="flex">
            <Skeleton type="circle" size={30} />
            <Skeleton type="title" width={80} />
          </div>
          <Skeleton type="text" line={2} />
          <Skeleton height={200} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 15px;
  .item {
    padding: 20px 0;
  }
  .flex {
    display: flex;
    align-items: center;
    .title {
      margin-left: 6px;
    }
  }
  > div + div {
    border-top: 1px solid #eee;
  }
`;
