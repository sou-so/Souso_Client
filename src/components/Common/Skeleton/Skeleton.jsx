import React from 'react';
import styled from 'styled-components';

export const Skeleton = ({ type, height, width, size }) => {
  return (
    <SkeletonItem className={type} height={height} width={width} size={size}>
      <HighLight />
    </SkeletonItem>
  );
};

const SkeletonItem = styled.div`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '100%')};
  background: #e1e1e1;
  margin-bottom: 7px;
  border-radius: 3px;
  opacity: 0.7;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &.title {
    height: 22px;
  }

  &.text {
    height: 10px;
  }

  &.circle {
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
    border-radius: 50%;
  }
`;

const HighLight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 2.5s infinite;

  &::before {
    content: '';
    width: 50%;
    height: 100%;
    background-color: #eaeaea;
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.05);
    position: absolute;
  }

  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(-60%);
    }
    100% {
      transform: translate(150%);
    }
  }
`;
