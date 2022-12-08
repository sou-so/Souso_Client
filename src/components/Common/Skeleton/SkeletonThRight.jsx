import React from 'react';
import { Skeleton } from './Skeleton';
import styled from 'styled-components';

export const SkeletonThRight = () => {
  return (
    <Container>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="item">
          <div className="left">
            <Skeleton type="title" width={80} />
            <Skeleton type="text" line={4} />
          </div>
          <Skeleton width={110} height={110} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 0 15px;
  .item {
    padding: 15px 0;
    display: flex;
  }
  .left {
    flex: 1;
    margin-right: 20px;
    margin-top: 10px;
  }
  > div + div {
    border-top: 1px solid #eee;
  }
`;
